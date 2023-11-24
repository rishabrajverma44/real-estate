import React from 'react'
import './Hero.css'
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from 'react-countup'
import {motion} from 'framer-motion'

export const Hero = () => {
    return (
        <div>
            <section className="hero-wrapper">
                <div className="paddings innerWidth flexCenter hero-container">
                    {/* left side */}
                    <div className="flexColStart hero-left">
                        <div className="hero-title">
                            <div className="orange-circle" />
                            <motion.h1
                            initial={{y: "2rem", opacity: 0}}
                            animate={{y:0, opacity:1}}
                            transition={{
                                duration:4,
                                type:"spring"
                            }}
                            >Discover<br />Most Sutable<br />Property</motion.h1>
                        </div>

                        <div className="flexColStart hero-des">
                            <span className='secondaryText'>Find a variety of property that suit you very eeasilty</span>
                            <span className='secondaryText'>Forget all difficuilties in finding a residence for you</span>
                        </div>

                        <div className="flexCenter search-bar">
                            <HiLocationMarker color="var(--blue)" size={25} />
                            <input type="text" />
                            <button className="button">Search</button>
                        </div>

                        <div className="flexCenter states">
                            <div className="flexColCenter state">
                                <span>
                                    <CountUp start={8888} end={9000} duration={4} />
                                    <span>+</span>
                                </span>
                                <span className='secondaryText'>
                                    Premium Product
                                </span>
                            </div>
                            <div className="flexColCenter state">
                                <span>
                                    <CountUp start={1950} end={2000} duration={4} />
                                    <span>+</span>
                                </span>
                                <span className='secondaryText'>
                                    Happy Customer
                                </span>
                            </div>
                            <div className="flexColCenter state">
                                <span>
                                    <CountUp end={28}/>
                                    <span>+</span>
                                </span>
                                <span className='secondaryText'>
                                    Award Winnings
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* right side */}
                    <motion.div 
                    initial={{x:"10rem", opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{
                        duration:3,
                        type:"spring"
                    }}
                    className="hero-right">
                        <div className="image-container">
                            <img src="./hero-image.png" alt="hero-image" />
                        </div>
                    </motion.div>

                </div>
            </section>
        </div>
    )
}
export default Hero;
