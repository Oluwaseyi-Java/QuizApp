import React from 'react'

const AnswerCard = ({Answer}) => {

  const Show = () => {
    document.getElementById("answer").style.display="block"
  }

  return (
    <div className='answerCard'>
      <button onClick={show}>Show Answer</button>
      <p id='answer'>{Answer}</p>
    </div>
  )
}

export default AnswerCard