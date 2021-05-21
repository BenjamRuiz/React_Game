import React from "react";
import { Button } from "react-bootstrap";
import Carousel1 from '../img/C1.jpg'
import Carousel2 from '../img/C2.jpg'
import Carousel3 from '../img/C3.jpg'
import Carousel4 from '../img/C4.jpg'
import Carousel5 from '../img/C5.jpg'
import Carousel6 from '../img/C6.jpg'
import Carousel from 'react-bootstrap/Carousel'
import '../App.css'


const CarouselItems = () => {
  
    return (   
      <Carousel>
          <Carousel.Item>
            <div className="carouselContainer">
              <Button className="carouselCentered carouselButton"  href="/game">Click Here</Button>
             <img
                width = {700}
                height = {600}
                className="d-block w-100 imgCarousel"
                src={Carousel1}
                alt="slide 1"
              /> 
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carouselContainer">
              <img
                width = {700}
                height = {600}
                className="d-block w-100 imgCarousel"
                src={Carousel2}
                alt="slide 2"
              />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carouselContainer">
              <img
                width = {700}
                height = {600}
                className="d-block w-100 imgCarousel"
                src={Carousel3}
                alt="slide 3"
              />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carouselContainer">
              <img
                width = {700}
                height = {600}
                className="d-block w-100 imgCarousel"
                src={Carousel4}
                alt="slide 4"
              />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carouselContainer">
              <img
                width = {700}
                height = {600}
                className="d-block w-100 imgCarousel"
                src={Carousel5}
                alt="slide 5"
              />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carouselContainer">
              <img
                width = {700}
                height = {600}
                className="d-block w-100 imgCarousel"
                src={Carousel6}
                alt="slide 6"
              />
            </div>
          </Carousel.Item>

      </Carousel>
    )
}

class CarouselHome extends React.Component {
  render() {
      return (
        <CarouselItems/>
      );
    }
}

export default CarouselHome;