import "./Navbar.css";
import {useState,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";
import { addData,deleteData } from "../redux/actions";
export const Navbar = ()=>{
    const [text,setText] = useState("");
    const dispatch = useDispatch();
    const {items} = useSelector((store) => {
        return store.bag;
       });
    return (
        <div>
           <div className="nav_bar">
               <p className="bookfinder">BookFinder</p>
               <span><input id="search-box"
                placeholder="Search for Books.."
             onChange={(e) => setText(e.target.value)} />
               <button className="search-btn"
               onClick={()=>{
                axios.get(`https://www.googleapis.com/books/v1/volumes?q=${text}&download=epub&key=AIzaSyDXlwyReBJYnH5bNBcusc54OvCpxVsnTjY`)
                .then(({data})=>{
                    console.log("item i",data.items);
                    dispatch(addData(data.items));
                })
               }}>Search</button></span>
             
               <button className="signup-btn">SiginUp</button>
                  

               </div> 
        </div>
    )
}