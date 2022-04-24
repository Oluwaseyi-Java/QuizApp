import React from 'react'
import TopicCard from './TopicCard'

const Topic = ({ Data , Geti}) => {


  
  const Topics = Data.map((item) => {
    return (

      <TopicCard key={item.id} Topic={item.name} Data={ Geti}/>

    )
  })
  
    // setTimeout(() => {
    // , 5000)
  console.log(Data)

  return (
    <div className='topic'>
    
    {Topics}
    </div>
  )
}

export default Topic