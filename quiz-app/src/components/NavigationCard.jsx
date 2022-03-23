import React from 'react'

const NavigationCard = () => {
  return (
    <div className='navigationCard'>
      <div className='previous'>
        <button>
          <img alt='nextImg' src="https://www.transparentpng.com/thumb/arrow/right-grey-arrow-icon-png-20.png" />
          <p>Previous</p>

        </button>
      </div>
      <div className='next'>
       <button>
          <p>Next</p>
          <img alt='nextImg' src="https://www.transparentpng.com/thumb/arrow/right-grey-arrow-icon-png-20.png" />

       </button> 
       </div>
    </div>
  )
}

export default NavigationCard