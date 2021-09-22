import React from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import MenuHeader from '../../components/MenuHeader'
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
        {/* //<Carousel fade>
        //   <Carousel.Item>
        //     <img
        //       className="d-block w-100"
        //       src="holder.js/800x400?text=First slide&bg=373940"
        //       alt="First slide"
        //     />
        //     <Carousel.Caption>
        //       <h3>First slide label</h3>
        //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //     </Carousel.Caption>
        //   </Carousel.Item>
        //   <Carousel.Item>
        //     <img
        //       className="d-block w-100"
        //       src="holder.js/800x400?text=Second slide&bg=282c34"
        //       alt="Second slide"
        //     />

        //     <Carousel.Caption>
        //       <h3>Second slide label</h3>
        //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        //     </Carousel.Caption>
        //   </Carousel.Item>
        //   <Carousel.Item>
        //     <img
        //       className="d-block w-100"
        //       src="holder.js/800x400?text=Third slide&bg=20232a"
        //       alt="Third slide"
        //     />

        //     <Carousel.Caption>
        //       <h3>Third slide label</h3>
        //       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        //     </Carousel.Caption>
        //   </Carousel.Item>
        // </Carousel>  */}
    </Layout>
   )

 }

export default HomePage