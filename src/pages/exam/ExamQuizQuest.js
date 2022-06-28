import React, { useState } from "react";

const ExamQuizQuest = () => {
  const QuestionsList = [
    {
      id: 1,
      question: "What is capital of india?"
    }
  ];
  const [currQuest, setcurrQuest] = useState(0);
  const [markAnswers, setmarkAnswers] = useState(
    new Array(QuestionsList.length)
  );
  const isQuestEnd = currQuest === QuestionsList.length;

  return <div>{isQuestEnd ? <h1>End</h1> : <h1>Work</h1>}</div>;
};

export default ExamQuizQuest;
