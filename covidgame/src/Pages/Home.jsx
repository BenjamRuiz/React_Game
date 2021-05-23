import React from "react";
import CarouselHome from '../Components/CarouselHome';
import '../App.css'
import axios from 'axios';
class Home extends React.Component {

  render() {
    return (
      <div>
        <CarouselHome/>
        <br/>
        <br/>
        <h1 className="titulo" >Your Latest Score</h1>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}
export default Home;
