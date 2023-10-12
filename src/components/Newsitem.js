import React, { Component } from 'react'

export default class Newsitem extends Component {
  

  render() {
    let {title , description ,imageurl , newUrl ,author ,date , source} = this.props
    return (
      <div  >
        <div className="container mx-3">
    <div className="card my-3" >
    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{marginLeft:'80%' , zIndex:'1'}}>{source}</span>
      <img src={!imageurl?"https://www.livemint.com/lm-img/img/2023/07/23/600x338/HDFC_1690113994334_1690113994514.jpg":imageurl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <span className="badge bg-success">Success</span>
        <p className="card-text">{description}...</p>
        <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
        <a href={newUrl} target='_blank' className="btn btn-sm btn-dark">read more</a>
      </div>
    </div>
  </div>
      </div>
    )
  }
}

