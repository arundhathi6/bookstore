import "./Navbar.css";
import {useState,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";
import {Books} from "./Books.jsx";

export const Navbar = ()=>{
    const [text,setText] = useState("");
    const [bookData,setBookdata] = useState([]);
    const [on,signalOn] = useState(false);
    const dispatch = useDispatch();
    const {items} = useSelector((store) => {
        return store.bag;
       });
 function searchFunc(){
    signalOn(true);
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${text}&key=AIzaSyDXlwyReBJYnH5bNBcusc54OvCpxVsnTjY&maxResults=40`)
         .then(res=>setBookdata(res.data.items))
         .catch(err=>console.log(err))
             }

const searchBooks=(e)=>{
if(e.key=="Enter"){
    signalOn(true);
   axios.get(`https://www.googleapis.com/books/v1/volumes?q=${text}&key=AIzaSyDXlwyReBJYnH5bNBcusc54OvCpxVsnTjY&maxResults=40`)
.then(res=>setBookdata(res.data.items))
.catch(err=>console.log(err))}
    }

   

    return (
        <div>
           <div className="nav_bar">
               <p className="bookfinder">BookFinder</p>
              
               <span>
                   <input id="search-box"
                placeholder="Search for Books.."
             onChange={(e) => setText(e.target.value)} 
             onKeyPress={searchBooks}/>
               
               <button className="search-btn"
               onClick={searchFunc}>Search</button>
               </span>
             
               <button className="signup-btn">SiginUp</button>
                   </div> 
                   <div style={{display:"flex",}}>
                       <img className="side_img" src="https://img.wallpapersafari.com/tablet/768/1024/45/73/klPsWI.jpg"/>
                       <div>
                          {on &&
                       <Books books={bookData}/>}
                       {(!on) && <div id="ntg"><img className ="when_ntg" src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/fun-book-lover-heartbeat-gift-for-a-reader-teacher-gift-kanig-designs.jpg"/>
                       <p className="when_text">“A room without books is like a body without a soul.” — Cicero</p></div>}
                    
                       </div>
                       
                   </div>
        </div>
    )
}