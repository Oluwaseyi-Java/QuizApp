import React from 'react'

const TopicCard = ({ Data, Topic}) => {


  // const navigate=()=>{
  //   window.location.href="/questions"
  // }

 
  return (
    <div className='topicCard' onClick={()=>Data(Topic)}>
    <p>{Topic}</p>
    </div>
  )
}

export default TopicCard