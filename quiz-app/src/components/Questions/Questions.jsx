import React from 'react'
import AnswerCard from './AnswerCard'
// import NavigationCard from "./NavigationCard"
import QuestionCard from './questionCard'
import prev from '../images/prev.png'
import next from "../images/next.png"

// <NavigationCard Index={Index}/>
const Questions = ({ Questions, Answers, Back }) => {

  const [index, setIndex] = React.useState(0)
  const [question, setQuestions] = React.useState([])
  const [answer, setAnswer] = React.useState([])
  const [answerRender, setAnswerRender] = React.useState({
    isRender:true
  })

  React.useEffect(() => {
    setQuestions(Questions)
    setAnswer(Answers)
  }, [])

  const Previous = () => {
    setIndex(prevIndex => prevIndex - 1)

  }

  const Next = () => {
    setIndex(prevIndex => prevIndex + 1)
    
  }

  React.useEffect(() => {
    if (index < 0) {
      setIndex(0)
    } else if (index >= question.length) {
      setIndex(question.length - 1)
    }
    console.log(index)
    console.log(question)
  }, [index])


  const display = (result) => {
    // setAnswerRender({
    //   isRender: result
    // })
  }

  return (
    <div className='questions'>

      <h2>Questions:</h2>
      <QuestionCard Question={question[index]} />
      <AnswerCard Answer={answer[index]} Display={ display} Render={answerRender.isRender} />

      <div className='navigationCard'>
        <div className='previous'>
          <button onClick={Previous}>
            <img alt='nextImg' src={prev} />
            <p> Previous</p>

          </button>
        </div>
        <div className='next'>
          <button onClick={Next}>
            <p>Next </p>
            <img alt='nextImg' src={next} />

          </button>
        </div>
      </div>

      <button id='backButton' onClick={Back}>Back</button>
    </div>
  )
}

export default Questions