import "./Navbar.css";
import {useState,useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import Model from "./Model.js"
export const Books = (props)=>{
    const [modal, setModal] = useState(false);
    const [item, setItem] = useState();
    const [ID, setID] = useState(0);
    let data = props.books;
    //console.log("data",data)
    //function to toggle between modal
    const toggleModal = () => {
        setModal(!modal);
      };

      function getModalFun(){
        console.log("tou are inside function")
      }

      if (modal) {
        document.body.classList.add("active-modal");
      } else {
        document.body.classList.remove("active-modal");
      }
   
    return (
        <div>
           
        <div className="book_card" >
       
            {data.map((e)=>{
                let thumb =e.volumeInfo.imageLinks&& e.volumeInfo.imageLinks.smallThumbnail;
                let title =  e.volumeInfo.title;
                let price = e.volumeInfo.pageCount;
                if(thumb !=undefined && price !=undefined && title !=undefined){
                return(
                  <>
                    <div className="border_div" onClick={()=>{setModal(true);setItem(e)}}>
                        <img src={thumb} />
                        <div>
                            <h5>{title}</h5>
                            <p>&#8377;{price}</p>
                            
                        </div>
                    </div>
                   {modal && <Model modal={modal} item={item} onClose={()=>setModal(false)}/>}
                    </>
                    
                )}
                
})}
</div>



        </div>
    )
}

