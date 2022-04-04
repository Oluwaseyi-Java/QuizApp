import React from 'react'
import BodyCard from './BodyCard'

const Body = ({Data}) => {

  const Subjects=Data.map((item)=>{
    return(
      <BodyCard key={item.id} Subject={item.name} />
    )
  })

  return (
    <div className='body'>
    {Subjects}

    </div>
  )
}

export default Body