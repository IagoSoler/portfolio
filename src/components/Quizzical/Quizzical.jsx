import React, { useState, useEffect } from "react";
import "./Quizzical.css";
import { Question } from "./quizzical_components/Question";
import { StartMenu } from "./quizzical_components/StartMenu";


function Quizzical() {
  const [data, setData] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);


  useEffect(() => {
    if (!quizStarted) { 
      console.log("buscando");
      fetch("https://opentdb.com/api.php?amount=10&category=23")
        .then((response) => response.json())
        .then((data) => {
          setData(
            data.results.map((result) => ({
              question: result.question,
              correctAnswer: result.correct_answer,
              answers: [...result.incorrect_answers, result.correct_answer],
              selectedAnswer: ""
            }))
          );
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [quizStarted]); 
  //////////////////////////

  //////////////////////////
  return (
    <div className="quizzical">
      {quizStarted ? (
        <Question 
        data={data}
        setQuizStarted={setQuizStarted}
        setData={setData} />
      ) : (
        <StartMenu
          setQuizStarted={setQuizStarted}
          data={data}
          setData={setData}
        />
      )}
    </div>
  );
}

export default Quizzical;
