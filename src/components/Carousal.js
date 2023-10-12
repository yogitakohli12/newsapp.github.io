import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';


export class Carousal extends Component {
  render() {
    return (
      <div >
      <Carousel style={{width:"100%", height:"10% " , marginTop:"50px"}}>
      <Carousel.Item>
        <img   src="https://image.freepik.com/free-vector/top-headlines-news-background-concept_1017-12631.jpg" alt=""   style={{height:"250px" , width:"100%" , gap:"20px" }}/>
        
      </Carousel.Item>

      <Carousel.Item>
        <img   src="https://tse1.mm.bing.net/th?id=OIP.9PgkZJG9YFQFLr1hFcVyiAHaB7&pid=Api&P=0&h=180" alt=""   style={{height:"250px" , width:"100%" , gap:"20px"}}/>
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src="https://india.postsen.com/temp/resized/medium_2023-08-07-bf71bb5b17.jpg" alt="image"  style={{height:"250px" , width:"100%"}} />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src="https://tse3.mm.bing.net/th?id=OIP.43Z3QfFJEyGT8Q9nvnl7fgAAAA&pid=Api&P=0&h=180" alt=""   style={{height:"250px" , width:"100%"}}/>
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      
    
      
      
      
    </Carousel>
      </div>
    )
  }
}

export default Carousal
