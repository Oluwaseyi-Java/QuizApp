import React from 'react'
import Header from '../Header'
import Topic from './topic'

const Topics = ({ Data, Geti, Back }) => {
  return (
    <div className='topics'>
      <Header />
      <Topic Data={Data} Geti={Geti} />
      <div className='btn'>
      
      <button onClick={Back}>Back</button>
      </div>
    </div>
  )
}

export default Topics