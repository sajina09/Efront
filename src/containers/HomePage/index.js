import React from 'react'
import Layout from '../../components/Layout'
import Slider from "react-slick";
import './style.css';

/**
* @author
* @function HomePage
**/

const HomePage = (props) => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return(
    
    <Layout>
      <div className="home-page-container">
      <div className="home-page"> 
         <Slider {...settings}>
          <div className="image-container">
            <img className="image" src={"https://image.shutterstock.com/image-photo/beautiful-sunrise-on-green-cornfield-260nw-498326326.jpg"}/>
          </div>
          <div className="image-container">
            <img className="image" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZOT2ifytGEdDL5Q6vjxDQxRG0fpZqYsSwHA&usqp=CAU"}/>
          </div>
          <div className="image-container">
            <img className="image" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5RCn_n6KN6QpyNiF8MNtQ8s-qPJJOX5oiHXuZwmkfhjjaCQo8-fdQ-AXozT2J2o_vot4&usqp=CAU"}/>
          </div>
          <div className="image-container">
            <img className="image" src={"https://image.shutterstock.com/image-photo/beautiful-sunrise-on-green-cornfield-260nw-498326326.jpg"}/>
          </div>
          
        </Slider> 
      </div>
      </div>
    </Layout>
   );

 }

export default HomePage