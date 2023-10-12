import React, { Component } from 'react'
import Newsitem from './Newsitem'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

capitalizefirstletter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

  constructor(props){
    super(props);     //this class call the constructer class
    this .state =
      {
        articles: [],
        loading: true,
        page: 1,
        totalResults:0
        }
    
        document.title=`Top-TodaY-${this.capitalizefirstletter(this.props.category)}`;
  }


  async Updatenews(){
    this.props.setprogress(10);
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({loading:true});
    let data =await  fetch(url);
    this.props.setprogress(40);
    let parsedata = await data.json()
    this.props.setprogress(70);
    this.setState({
    articles:parsedata.articles,
    totalResults:parsedata.totalResults,
    loading:true
   })
   this.props.setprogress(100);
  }


   async componentDidMount(){
    this.Updatenews();
  }

fetchMoreData = async() => {
  
  this.setState({page:this.state.page + 1})
  const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
    let data =await  fetch(url);
    let parsedata = await data.json()
    this.setState({
    articles:this.state.articles.concat(parsedata.articles),
    totalResults:parsedata.totalResults,
    loading:true
   })
};


  render() {
  
    return (
      
      <div className="contain">
        
        <h4 className=' text-center '  style={{paddingTop:"40px"}}>TopTodaY -From {this.capitalizefirstletter(this.props.category)} Top Headlines</h4>
      {/*{this.state.loading && <Loading/>}*/}   
      <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          >
    </InfiniteScroll>
  
      <div className="container"id='container' >
      <div className="container">
        <div className="row my-2 mx-4" style={{width:"90%" }}>
      { this.state.articles?.map((element)=>{
           return <div id='newsitem' className="col " key={element.url} >
                  <Newsitem   title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,50):""} imageurl={element.urlToImage} newUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                  </div>
                })}
        </div>
        </div>
        </div>
        </div>
    )
  }
}

export default News;
