import React from 'react';
import '../../assets/styles/Sundary.css';
import 'swiper/swiper-bundle.css';
import Swiper1 from "./Swiper"
import Icons from "./Icons";


function SundaryContents(props) {
    return (
        <>
      <div className="card">
      <div className="row ">
      <div className="col-md-7 px-3">
        <div className="card-block px-6">
        <span>
        <div className="emojis">
        <a href="www.google.com" className="mt-auto btn btn-warning tag">{props.tag}</a>
       <Icons/>
       </div>
        </span>
        <br/>
          <h4 className="card-title">{props.title} </h4>
          <p className="card-text">
          {props.desc}
          </p>
          <br/>
          <a href="www.google.com" className="mt-auto btn btn-primary links">{props.link}</a>
          <button type="button" className="btn btn-light read-time">{props.time}</button>
        </div>
      </div>
      <div className="col-md-5">
      <Swiper1 links={props.img}/>
      </div>
    </div>
  </div>
  </>
    );
  }
  
  export default SundaryContents;
