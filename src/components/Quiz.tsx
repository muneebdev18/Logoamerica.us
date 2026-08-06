"use client";

import { useState } from "react";
import { quizQuestions, quizDirections } from "@/data/content";

type Direction = keyof typeof quizDirections;

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  function handleAnswer(dir: string) {
    const newAnswers = [...answers];
    newAnswers[current] = dir;
    setAnswers(newAnswers);

    if (current < quizQuestions.length - 1) {
      setCurrent(current + 1);
    } else {
      const counts: Record<string, number> = {};
      newAnswers.forEach(a => { counts[a] = (counts[a] || 0) + 1; });
      Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0] as Direction;
      setShowResult(true);
    }
  }

  function handleBack() {
    if (current > 0) setCurrent(current - 1);
  }

  function handleRestart() {
    setAnswers([]);
    setCurrent(0);
    setShowResult(false);
  }

  const result = showResult
    ? quizDirections[answers.reduce((_acc, _a) => {
        const counts: Record<string, number> = {};
        answers.forEach(x => { counts[x] = (counts[x] || 0) + 1; });
        return Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];
      }, "") as Direction]
    : null;

  return (
    <section className="section" id="quiz">
      <div className="wrap">
        <div className="section-head center" style={{ marginLeft: "auto", marginRight: "auto" }}>
          <div className="eyebrow">Not Sure Where to Start?</div>
          <h2>Find your brand direction in 60 seconds</h2>
          <p>Answer four quick questions and we&apos;ll point you toward the identity style that fits your business best.</p>
        </div>
        <div className="quiz-card reveal in-view">
          <div className="quiz-progress">
            {quizQuestions.map((_, i) => (
              <span key={i} className={i < current ? "done" : i === current ? "current" : ""}>
                <i></i>
              </span>
            ))}
          </div>

          {!showResult && quizQuestions.map((q, idx) => (
            <div key={idx} className={`quiz-step ${idx === current ? "active" : ""}`}>
              <div className="quiz-q-eyebrow">{q.eyebrow}</div>
              <div className="quiz-q">{q.question}</div>
              <div className="quiz-options">
                {q.options.map((opt, oi) => (
                  <button key={oi} className="quiz-opt" onClick={() => handleAnswer(opt.dir)}>
                    <strong>{opt.title}</strong>
                    <span>{opt.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}

          <button className="quiz-back" hidden={current === 0} onClick={handleBack}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 6l-6 6 6 6" /></svg> Back
          </button>

          {showResult && result && (
            <div className="quiz-result active">
              <div className="quiz-result-eyebrow">Your Direction</div>
              <h3>{result.title}</h3>
              <p>{result.desc}</p>
              <div className="quiz-result-tags">
                {result.tags.map((t, ti) => <span key={ti}>{t}</span>)}
              </div>
              <div className="quiz-result-actions">
                <a href="#contact" className="btn btn-primary">
                  Start This Direction
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <button className="quiz-restart" onClick={handleRestart}>Retake Quiz</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
