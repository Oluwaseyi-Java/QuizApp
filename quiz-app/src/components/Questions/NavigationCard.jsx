import React from 'react'
import prev from '../images/prev.png'
import next from "../images/next.png"

const NavigationCard = ({ Index }) => {

  // let [index, setIndex] = React.useState(0)


  // useEffect(() => {
  //   if (index === -1) {
  //     setIndex(0)
  //   }
  //   Index(index)
  // }, [index])


  return (

    <div className='navigationCard'>
      <div className='previous'>
        <button >
          <img alt='nextImg' src={prev} />
          <p> Previous</p>

        </button>
      </div>
      <div className='next'>
        <button onClick={() => Index()}>
          <p>Next </p>
          <img alt='nextImg' src={next} />

        </button>
      </div>
    </div>
  )
}

export default NavigationCard