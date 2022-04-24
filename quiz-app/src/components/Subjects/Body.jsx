import React from 'react'
import BodyCard from './BodyCard'

const Body = ({Data, Topic}) => {

  const Subjects=Data.map((item)=>{
    return(
      <BodyCard key={item.id} Subject={item.name}  Topic={Topic}/>
    )
  })

  return (
    <div className='body'>
    {Subjects}

    </div>
  )
}

export default Body