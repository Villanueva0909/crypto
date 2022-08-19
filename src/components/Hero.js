import React from 'react'
import './Hero.css'
import Crypto from '../assets/lap.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>

                {/* Left Side */}
                <div className='left'>
                    <p>Buy & Sell Crypto 24/7 using your DeCrypt account</p>
                    <h1>Buy, trade, and hold 600+ cryptocurrencies on DeCrypt</h1>
                    <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn'>Submit</button>
                    </div>
                </div>


                {/* Right Side */}
                <div className='right'>
                    <div className='img-container'>
                        <img src={Crypto} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
