import React from 'react'
import prev from './images/prev.png'
import next from "./images/next.png"

const NavigationCard = () => {
  return (
    <div className='navigationCard'>
      <div className='previous'>
        <button>
          <img alt='nextImg' src={prev } />
          <p> Previous</p>

        </button>
      </div>
      <div className='next'>
       <button>
          <p>Next </p>
          <img alt='nextImg' src={next} />

       </button> 
       </div>
    </div>
  )
}

export default NavigationCard