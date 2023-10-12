
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import Loading from './components/Loading'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import LoadingBar from 'react-top-loading-bar'
import Carousal from './components/Carousal';



export default class App extends Component {
  apikey=process.env.REACT_APP_NEWS_APIKEY
pagesize=15
country="in"
state = {
  progress:0
}

setprogress=(progress)=>{
  this.setState({progress:progress})
}


  render() {
    return (
      <BrowserRouter  id="contain">
     
      <div className="App"> 
        < Navbar />
        <Carousal/>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />

        <ScrollToTop smooth />

        <div  className='animate'>
        <Routes>
          <Route exact path="/" element={<News setprogress = {this.setprogress} apikey={this.apikey}  key="general" pagesize={this.pagesize} country={this.country} category="general"/>} />
          <Route exact path="/business" element={<News setprogress = {this.setprogress} apikey={this.apikey}   key="business" pagesize={this.pagesize} country={this.country} category="business"/>} />
          <Route exact path="/entertainment" element={<News setprogress = {this.setprogress} apikey={this.apikey}  key="entertainment" pagesize={this.pagesize} country={this.country} category="entertainment"/>} />
          <Route exact path="/general" element={<News setprogress = {this.setprogress} apikey={this.apikey}  key="general" pagesize={this.pagesize} country={this.country} category="general"/>} />
          <Route exact path="/health" element={<News setprogress = {this.setprogress}  apikey={this.apikey} key="health" pagesize={this.pagesize} country={this.country} category="health"/>} />
          <Route exact path="/science" element={<News setprogress = {this.setprogress} apikey={this.apikey}  key="science" pagesize={this.pagesize} country={this.country} category="science"/>} />
          <Route exact path="/sports" element={<News setprogress = {this.setprogress} apikey={this.apikey}  key="sports" pagesize={this.pagesize} country={this.country} category="sports"/>} />
          <Route exact path="/technology" element={<News setprogress = {this.setprogress} apikey={this.apikey}  key="technology" pagesize={this.pagesize} country={this.country} category="technology"/>} /> 
          <Route exact path="/us/allnews" element={<News setprogress = {this.setprogress} apikey={this.apikey}  key="" pagesize={this.pagesize} country="us" category=""/>} /> 
        </Routes>
        </div>

        
       
        </div>
        <div    id="bootom"  style={{ color:"white" , paddingTop:"30px"  , height:"200px" }}>
          <div id='bot'>
          <h5 >News-APP</h5>      
          <h5 > Company</h5>
          <h5 >Support</h5>
          </div>
          
        <div className='bot' >
          <p>All News</p>
          <p>Privacy Policy</p>
          <p id='para1'>Contact </p>
        </div>

        <div className='bot2' >
        <p>India News</p>
           <p>Terms of Services</p>
           <p  id='para2'>Twitter</p>
        </div>

        <div className='bot' style={{gap:"320px"}}>
        <p>US News</p>
           <p>GitHub</p>
        </div>
           
        </div>
      </BrowserRouter>
    )
  }
}
