import React from 'react'
import Body from './Body'
import Header from './Header'

const Home = (props) => {





  return (
    <div className='Home'>
        <Header  />
        <Body Data={props.Data} />
    </div>
  )
}

export default Home