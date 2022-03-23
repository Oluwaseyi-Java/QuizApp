import React from 'react'

const NavigationCard = () => {
  return (
    <div className='navigationCard'>
      <div className='previous'>
        <img alt='nextImg' src="https://www.transparentpng.com/thumb/arrow/right-grey-arrow-icon-png-20.png" />  
        Previous
        
      </div>
      <div className='next'>
          Next
          <img alt='nextImg' src="https://www.transparentpng.com/thumb/arrow/right-grey-arrow-icon-png-20.png" />  
     </div>
    </div>
  )
}

export default NavigationCard