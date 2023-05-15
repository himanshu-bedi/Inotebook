import React from "react";
import { useContext } from "react";
import NoteContext from "../Context/Notes/NoteContext";

const NotesDisplay = (props) => {
  const a =useContext(NoteContext);
  const {deletenote,editnote}=a;
  const {updatefun}=props;
  const clickededit=()=>{
   
    updatefun(props.note);
    console.log("here in clickedit");
    console.log(props.note);

  }
  return (
    <>
   
    <div className="col-md-3">
      <div className="card my-3">
        <div className="flex align-items-center justify-center space-x-3 ">
          <h1 className="text-center font-bold p-1">{props.note.title}</h1>
          <button > <i className="fa fa-edit p-1" onClick={clickededit} ></i></button>
           <button > <i className="fa fa-minus p-1" onClick={()=>deletenote(props.note._id)} ></i></button>
          </div>
        <div className="card-body ">
          <h5 className="card-title">{props.note.tag}</h5>
          <p className="card-text">{props.note.description }</p>
         
          
          
        </div>
      </div>
      </div>
      
    </>
  );
};

export default NotesDisplay;
