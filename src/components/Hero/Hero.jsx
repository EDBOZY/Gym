import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from '../../assets/calories.png';




const hero = () => {
  
  return (
    <div className="hero" id='home'>
      <div className="left-h">
        <Header/>

        <div className="the-best-ad">
          <div></div>
          <span>the best firness club in the town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className='stroke-text'> Shape </span>
            <span>your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and live up your life to fullest
            </span>
          </div>
        </div>

        <div className="figures">
          <div>
            <span>+148</span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness progress</span>
          </div>
        </div>

        <div className="hero-buttons">
          
          <button className='btn'>Get Strarted</button>
          <button className='btn'>Learn More</button>

        </div>


      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>


        <div className="heart-rate">
          <img src= {Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />

        <div className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default hero






 