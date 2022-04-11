import {Navbar} from "./Navbar.jsx";
import {useState,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";
import { addData,deleteData } from "../redux/actions";
import "./books.css";
export const Books =()=>{
    const {items} = useSelector((store) => {
        return store.bag;
       }); 
   
   
 return (
     <div>
         <Navbar/>
        {items.map((e)=>{
            return <div className=".booksDiv">
                <img src={e[0].volumeInfo.imageLinks.smallThumbnail}/>

            </div>
        })}

     </div>
   
 )
} 