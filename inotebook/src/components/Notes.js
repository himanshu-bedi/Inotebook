import React from "react";
import NoteContext from "../Context/Notes/NoteContext";
import NotesDisplay from "./NotesDisplay";
import { useContext, useEffect, useRef,useState } from "react";
// import { Modal, ModalContext } from "./Modal";

const Notes = () => {
  const a = useContext(NoteContext);
  const [evalues, setEvalues] = useState({eid:"",etitle:"",edescription:"",etag:""});
  // const b=  useContext(ModalContext);
  // console.log("b is ",a);
  // const {updatefun}=b;
  const { notes, getnotes , editnote } = a;
  console.log(notes);

  const ref = useRef(null);


  const updatefun = (notee) => {
    console.log("update note");
    ref.current.click();
    console.log(notee)
    setEvalues({eid:notee._id,etitle:notee.title,edescription:notee.description,etag:notee.tag});
   
  };

  useEffect(() => {
    getnotes();
    // eslint-disable-next-line
  }, []);


  // const [note, setNote] = useState({title:"",description:"",tag:""});
   

  const changed=(e)=>{
      setEvalues({...evalues,[e.target.name]:e.target.value});
  }

  // const clicked=(e)=>{
  //     e.preventDefault();
      
  // }

  const clickedit=(e)=>{
    console.log("save changesss");
    e.preventDefault();
    editnote(evalues.eid,evalues.etitle,evalues.edescription,evalues.etag);

  }

  return (
    <>
      {/* <!-- Button trigger modal --> */}
    
      <button
        ref={ref}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{display:"none"}}
       
      >
        Launch demo modal
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <div className="container mt-5">
       
        <div className="container mt-5">
          <form>
            <div className="form-group mb-3">
              <label for="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="etitle"
                aria-describedby="emailHelp"
                placeholder="Enter Title"
                value={evalues.etitle}
                onChange={changed}

              />
             
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="edescription"
                placeholder="Enter description"
                value={evalues.edescription}
                onChange={changed}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Tag</label>
              <input
                type="text"
                className="form-control"
                id="tag"
                name="etag"
                placeholder="Enter tag"
                value={evalues.etag}
                onChange={changed}
              />
              </div>

          </form>
        </div>
      </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={clickedit}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row  mx-auto w-75">
        {notes.map((note, id) => {
          return (
            <NotesDisplay
              note={note}
              key={id}
              updatefun={updatefun}
            ></NotesDisplay>
          );
        })}
      </div>
    </>
  );
};

export default Notes;
