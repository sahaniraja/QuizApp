import { useState, useEffect, useRef } from "react";

import { flushSync } from "react-dom";

import { Button } from "@mui/material";

function GetQuizQuestion({
  aquestion,
  totalQuestions,
  currentQuestion,
  setAnswer
}) {
  const [selectOption, setselectOption] = useState(null);
  const timer = useRef(null);
  const progressBar = useRef(null);

  function nxtQuestion() {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    flushSync(() => {
      setAnswer(selectOption);
    });
    setselectOption(null);
  }

  useEffect(() => {
    progressBar.current.classList.remove("active");
    setTimeout(() => {
      progressBar.current.classList.add("active");
    }, 0);
    timer.current = setTimeout(nxtQuestion, 10 * 1000); //10 seconds
    return nxtQuestion;
  }, [aquestion]);

  return (
    <div className="question">
      <div className="progress-bar" ref={progressBar}></div>
      <div className="question-count">
        <b>{currentQuestion}</b> of <b>{totalQuestions}</b>
      </div>
      <div className="main">
        <div className="title">
          <span>Question:</span>
          <p>{aquestion.title}</p>
        </div>
        <div className="options">
          {/* {aquestion.options.map((option, index) => {
            return (
              <div
                className={index === selectOption ? "option active" : "option"}
                key={index}
                onClick={() => setselectOption(index)}
              >
                {option}
              </div>
            );
          })} */}
        </div>
      </div>
      <div className="control">
        <Button onClick={nxtQuestion}>Next</Button>
      </div>
    </div>
  );
}

export default GetQuizQuestion;
