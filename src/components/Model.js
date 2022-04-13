import React from 'react';
import "./Modal.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

function Model({item,onClose}) {
    console.log("ity",item);
   
    let thumb =item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    let title =  item.volumeInfo.title;
    let authors = item.volumeInfo.authors;
    let publisher = item.volumeInfo.publisher;
    let publishedDate = item.volumeInfo.publishedDate;
    let description = item.volumeInfo.description;
    let previewLink = item.volumeInfo.previewLink;
  return (
    <div>
        <div className="overlay">
        <div className="overlay-inner">
            <button className="close" onClick={onClose}><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></button>
            <div className="inner-box">
            <img src={thumb}/>
            <div className="info">
                <h1>{title}</h1>
                <h3>{authors}</h3>
                <h4>{publisher}<span>{publishedDate}</span></h4>
                <a href={previewLink}><button>More</button></a>
               
            </div>
            </div>
<h4 className="description">{description}</h4>
        </div>
    </div>
    </div>
  )
}

export default Model