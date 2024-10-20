import React from 'react'
import Title from '../components/Title'
import '../styles/About.css'
import {assets} from '../assets/assets'

const About = () => {
  return (
    <div className='about'>
        <div>
           <Title title1={'ABOUT'} title2={'US'} size={'2.3rem'} position={'center'} />
        </div>
        <div className='about-content'>
            <div>
              <img className='about-content-image' src={assets.about_img} alt='About Image' />
            </div>
            <div className='about-content-para-container'>
              <p>Welcome to Diago, your ultimate destination for stylish and affordable clothing. At Diago, we believe fashion is a reflection of who you are, and our collections are designed to help you express your unique style with confidence. Whether you're looking for the latest trends or timeless classics, our range includes everything from casual wear to sophisticated pieces for special occasions. We carefully select high-quality fabrics and designs to ensure that each item is not only fashionable but also comfortable and durable, providing exceptional value for every purchase.</p>
              <p>At Diago, our customers are at the heart of everything we do. We are committed to delivering a seamless shopping experience through outstanding customer service, fast and reliable shipping, and a wide variety of sizes to ensure everyone finds their perfect fit. We also embrace sustainability, sourcing our products responsibly to minimize our environmental impact. By choosing Diago, you’re not just shopping for clothes—you’re joining a community that celebrates individuality and empowers people to express themselves through fashion.</p>
            </div>
        </div>
    </div>
  )
}

export default About
