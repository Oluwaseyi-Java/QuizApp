import React from 'react'
import AnswerCard from './AnswerCard'
import NavigationCard from "./NavigationCard"
import QuestionCard from './questionCard'

const Questions = () => {
  return (
    <div className='questions'>
      <h2>Questions:</h2>
      <QuestionCard/>
      <AnswerCard/>
      <NavigationCard/>

    </div>
  )
}

export default Questions