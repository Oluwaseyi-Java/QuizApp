import React from 'react'
import Body from './Body'
import Header from '../Header'

const Home = ({ Data, Geti }) => {

  return (
    <div className='Home'>
        <Header  />
        <Body Data={Data}  Topic={Geti} />
    </div>
  )
}

export default Home