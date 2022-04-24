
import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
// import axios from "axios";
import Subjects from "./components/Subjects/Subjects";
// import NoPage from "./components/noPage";
import Questions from "./components/Questions/Questions";
import Topics from "./components/Topics/Topics";
import Api from "./DataApi"

function App() {


  const [display, setDisplay] = React.useState({
    isSubject: true,
    isTopic: false,
    isQuestion: false

  })
  const [allData, setAllData] = React.useState([])
  const [topics, setTopics] = React.useState([])
  const [question, setQuestions] = React.useState([])
  const [answer, setAnswer] = React.useState([])


  React.useEffect(() => {
    setAllData(Api)

  }, [])


  const fectchTopics = (result) => {
    Api.map((item) => {
      return (
        result === item.name ? setTopics(item.topics) : "Error"
      )

    })
    setDisplay({
      isSubject: false,
      isTopic: true,
      isQuestion: false
    })

  }

  const fetchQuestions = (result) => {

    topics.map((topic => {
      return (
        result === topic.name ? setQuestions(topic.Questions) : "Error"
      )
    }))
    topics.map((topic => {
      return (
        result === topic.name ? setAnswer(topic.Answer) : "Error"
      )
    }))


    setDisplay({
      isSubject: false,
      isTopic: false,
      isQuestion: true
    })
  }

  const TopicBack = () => {
    setDisplay({
      isSubject: true,
      isTopic: false,
      isQuestion: false
    })
  }

  const AnswerBack = () => {
    setDisplay({
      isSubject: false,
      isTopic: true,
      isQuestion: false
    })

  }
  // <BrowserRouter>

  //   <Routes>
  //     <Route path="*" element={<NoPage />}/>
  //   </Routes>

  // </BrowserRouter>

  return (

    <div className="App">

      {display.isSubject && <Subjects Data={allData} Geti={fectchTopics} />}
      {display.isTopic && <Topics Data={topics} Geti={fetchQuestions} Back={TopicBack} />}
      {display.isQuestion && <Questions Questions={question} Answers={answer} Back={AnswerBack} />}
      <p>Checking something</p>
    </div>

  );


}

export default App;
