import React, { useState } from "react";
import { QuizResult } from "./QuizResult";
import GetQuizQuestion from "./GetQuizQuestion";

const ExamQuizQuest = ({ retry }) => {
  const QuestionsList = [
    {
      title: "What is capital of india?",
      question: ["Delhi", "Kolkata", "Mumbai", "Amratvati"],
      correctOptionIndex: "1"
    },
    {
      title: "What is capital of Maharashtra?",
      question: ["Mumbai", "Nagpur", "Mumbai", "Pune"],
      correctOptionIndex: "1"
    }
  ];
  const [currQuest, setcurrQuest] = useState(0);
  const [markAnswer, setmarkAnswer] = useState(new Array(QuestionsList.length));
  const isQuestEnd = currQuest === QuestionsList.length;

  function calResult() {
    let correct = 0;
    QuestionsList.forEach((question, index) => {
      if (question.correctOptionIndex === markAnswer[index]) {
        correct++;
      }
    });

    return {
      total: QuestionsList.length,
      correct: correct,
      percentage: Math.trunc((correct / QuestionsList.length) * 100)
    };
  }

  return (
    <div>
      {isQuestEnd ? (
        <></>
      ) : (
        // <QuizResult result={calResult()} retry={retry} />
        <GetQuizQuestion
          aquestion={QuestionsList[currQuest]}
          totalQuestion={QuestionsList.length}
          currQuestion={currQuest + 1}
          setAnswer={(index) => {
            setmarkAnswer((arr) => {
              let newArr = [...arr];
              newArr[currQuest] = index;
              return newArr;
            });
            setcurrQuest(currQuest + 1);
          }}
        />
      )}
    </div>
  );
};

export default ExamQuizQuest;
