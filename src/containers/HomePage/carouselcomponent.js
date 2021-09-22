import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
           
                <div>
                    <img src="../image1.jpg" />
                </div>
                <div>
                    <img src="../image4.jpg" />
                </div>
                <div>
                    <img src="../image2.jpg" />
                </div>
            </Carousel>
        </div>
    );
}