import React from 'react'

const BodyCard = ({ Subject, Topic }) => {


  // // const SubjectName = () => {
  //   return Subject
  // }

  // // const navigate=()=>{
  // //   window.location.href="/topics"
  // // }

  return (
    <div className='card' 
          onClick={()=>Topic(Subject)}>
          
          <img 
          alt='subjectImg' 
          src="data:image/png;base64,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"
          />
        <p>{Subject}</p>
    </div>
  )
}

export default BodyCard