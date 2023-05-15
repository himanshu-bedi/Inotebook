import React, {  useContext, useState } from "react";
import NoteContext from "../Context/Notes/NoteContext";

const AddNote = () => {
 
    const {addnote}=useContext(NoteContext);
    const [note, setNote] = useState({title:"",description:"",tag:""});
   

    const changed=(e)=>{
        setNote({...note,[e.target.name]:e.target.value});
    }
    const clicked=(e)=>{
        e.preventDefault();
        addnote(note);
    }
  return (
    <>
      <div className="container mt-5">
        <h1 className="font-bold mx-auto">Add Your Note</h1>
        <div className="container mt-5">
          <form>
            <div className="form-group mb-3">
              <label for="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                aria-describedby="emailHelp"
                placeholder="Enter Title"
                onChange={changed}

              />
             
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                placeholder="Enter description"
                onChange={changed}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Tag</label>
              <input
                type="text"
                className="form-control"
                id="tag"
                name="tag"
                placeholder="Enter tag"
                onChange={changed}
              />
              </div>

            <button type="submit" className="btn btn-warning mt-4" onClick={clicked}>
              AddNote
            </button>
          </form>
        </div>
      </div>
     
    </>
  );
};

export default AddNote;
