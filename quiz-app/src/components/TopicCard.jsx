import React from 'react'

const TopicCard = () => {


  const navigate=()=>{
    window.location.href="/questions"
  }



  return (
    <div className='topicCard' onClick={navigate}>
          <p>Topic</p>
    </div>
  )
}

export default TopicCard