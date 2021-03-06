import React from "react";
import Layout from "../../components/Layout";
import Slider from "react-slick";
import "./style.css";
import {Carousel} from '3d-react-carousal';
/**
 * @author
 * @function HomePage
 **/
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const HomePage = (props) => {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  let slides = [
    <img  src="https://picsum.photos/800/300/?random" alt="1" />,
    <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
    <img  src="https://picsum.photos/800/302/?random" alt="3" />  ,
    <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
    <img src="https://picsum.photos/800/304/?random" alt="5" />   ];
  return (
    <Layout className="main">
      <div className="heading">
        <h1>Ongoing events</h1>
      </div>
      <div className="home-page">
         <Carousel slides={slides} autoplay={true} interval={10000}/>      
        <div className="heading">
        <h1>Deals of the day</h1>
      </div>
      <Slider {...settings}>
          <div className="deal-container">
            <img
              className="image"
              src={
                "https://image.shutterstock.com/image-photo/beautiful-sunrise-on-green-cornfield-260nw-498326326.jpg"
              }
            />
          </div>
          <div className="deal-container">
            <img
              className="image"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZOT2ifytGEdDL5Q6vjxDQxRG0fpZqYsSwHA&usqp=CAU"
              }
            />
          </div>
          <div className="deal-container">
            <img
              className="image"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5RCn_n6KN6QpyNiF8MNtQ8s-qPJJOX5oiHXuZwmkfhjjaCQo8-fdQ-AXozT2J2o_vot4&usqp=CAU"
              }
            />
          </div>
          <div className="image-container">
            <img
              className="image"
              src={
                "https://image.shutterstock.com/image-photo/beautiful-sunrise-on-green-cornfield-260nw-498326326.jpg"
              }
            />
          </div>
        </Slider>
      </div>
    </Layout>
  );
};

export default HomePage;
