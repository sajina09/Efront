import React from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import MenuHeader from '../../components/MenuHeader';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselComponent from "./carouselcomponent";

/**
* @author
* @function HomePage
**/

const HomePage = (props) => {
  return(
    <Layout>
      <div className="HomePage">
        <CarouselComponent />
      </div>
    </Layout>
   );

 }

export default HomePage