import React from 'react'
import '../styles/Title.css'

const Title = ({title1,title2}) => {
  return (
    <div className='title-main'>
      <p className='title-p'>{title1}<span className='title-span'>{title2}</span></p>
      <hr className='title-line' />
    </div>
  )
}

export default Title
