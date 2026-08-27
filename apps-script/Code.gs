/**
 * Logo America — Google Sheets lead intake (adapted from your original doPost)
 *
 * Handles BOTH website forms in one sheet:
 *   - "Start Your Mark": Name, Work Email, Company, Services, Timeline,
 *     Tell Us More, Budget Range
 *   - "Lead Modal": Name, Email, Phone, Company, Service, Project Details
 *
 * The header row is created automatically on the first submission (and fixed
 * whenever it doesn't match), so the sheet always has clear column labels.
 */

var HEADERS = [
  "Form",             // "Start Your Mark" or "Lead Modal"
  "Name",
  "Work Email",
  "Company",
  "Services",         // comma-joined selection(s)
  "Timeline",
  "Tell Us More",
  "Budget Range",
  // Used by the Lead Capture Modal:
  "Phone",
  "Service Required",
  "Project Details",
  // Metadata:
  "Submitted At",
  "Page",
  "User Agent"
];

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    ensureHeaders_(sheet);

    var lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      sheet.appendRow(rowFor_(data));
    } finally {
      lock.releaseLock();
    }

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true, status: "success" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: String(err) })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Health check: opening the web app URL in a browser should show {"ok":true}
function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ ok: true, service: "lead-intake" })
  ).setMimeType(ContentService.MimeType.JSON);
}

// Writes the header row only when it doesn't already match, so existing
// submissions are never touched. Freezes the header row too.
function ensureHeaders_(sheet) {
  var current = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  for (var i = 0; i < HEADERS.length; i++) {
    if (current[i] !== HEADERS[i]) {
      sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
      sheet.setFrozenRows(1);
      return;
    }
  }
}

function rowFor_(d) {
  return [
    d.form || "",                                   // "Start Your Mark" | "Lead Modal"
    d.name || "",                                   // Name
    d.email || "",                                  // Work Email
    d.company || "",                                // Company
    d.services || "",                               // Services ("Logo design, Rebrand")
    d.timeline || "",                               // Timeline
    d.message || "",                                // Tell Us More
    d.budget || "",                                 // Budget Range
    d.phone || "",                                  // Lead Modal: Phone
    d.service || "",                                // Lead Modal: Service Required
    d.details || "",                                // Lead Modal: Project Details
    d.submittedAt || new Date().toISOString(),      // Submitted At
    d.page || "",                                   // Page
    d.userAgent || ""                               // User Agent
  ];
}
