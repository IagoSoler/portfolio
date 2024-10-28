import React from 'react';


export const Question = (props) => {
  const [submitted,setSubmitted] = React.useState(false)

  const questions = props.data.map((element, questionIndex) => {
    return (
      <div key={questionIndex} className='quizzical__questions'>
        <h3 dangerouslySetInnerHTML={{ __html: element.question }} />
        {element.answers.map((answer, answerIndex) => (
          <button
            className={`quizzical__answer--button ${answer === element.selectedAnswer ? "quizzical__selected" : ""}`}
            onClick={() => selectAnswer(element.question, answer)}
            id={[element.question, answer]} key={[questionIndex, answerIndex]}>
            {answer}</button>
        ))}
      </div>
    )
  })
  function selectAnswer(question, answer) {
    if(submitted) {return}
    props.setData(prevData => prevData.map(item =>
      item.question === question
        ? { ...item, selectedAnswer: answer }
        : item
    ));
  }
  function submitAnswers() {
    setSubmitted(true);
    props.data.forEach(element => {
      document.getElementById([element.question, element.correctAnswer]).classList.add("quizzical__correct")
      if (element.selectedAnswer && element.selectedAnswer !== element.correctAnswer) {
        document.getElementById([element.question, element.selectedAnswer]).classList.add("quizzical__incorrect")
      }

    });
  }


  return (
    <div>{questions}
     {!submitted && <button id="submitButton" onClick={submitAnswers} className='quizzical__submit--button quizzical__answer--button' >Submit</button>}
      {submitted && <button id="restartButton" onClick = {()=>props.setQuizStarted(false)}   className='quizzical__submit--button quizzical__answer--button'>Restart</button>}
    </div>

  )
}
