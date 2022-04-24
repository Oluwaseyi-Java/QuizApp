import React from 'react'

const AnswerCard = ({ Display, Render, Answer}) => {

  // const Show = () => {
  //   document.getElementById("answer").style.display=
  // }

  return (
    <div className='answerCard'>
      <button onClick={()=>Display(!Render)}>Show Answer</button>
      {Render && <p id='answer'>Answer</p>}
    </div>
  )
}

export default AnswerCard