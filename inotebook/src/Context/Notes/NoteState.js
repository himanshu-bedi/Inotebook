import React, { useState } from 'react'
import NoteContext from './NoteContext'
const localhost="http://localhost:8000";

const NoteState = (props) => {
  
    
    // const stateinit=[
    //     {
    //     _id:"6410db33033e7bcb25d85c1c",
    //     user:"640f6c080b32cd4878e03ed0",
    //     title:"Himanshu",
    //     description:"Love is very much fake",
    //     tag:"Sad Love story",
    //     date: "2023-03-14T20:38:11.120+00:00",
       
    //     },
    //     {
    //         _id:"6410db33033e7bcb25d85c1cc",
    //     user:"640f6c080b32cd4878e03ed0",
    //     title:"Himanshu Bedi",
    //     description:"Love is very much fake",
    //     tag:"Sad Love story",
    //     date: "2023-03-14T20:38:11.120+00:00",
    //     },
    //     {
    //         _id:"6410db33033e7bcb25d85c1cd",
    //         user:"640f6c080b32cd4878e03ed0",
    //         title:"sanjeev Bedi",
    //         description:"Love is very much fake",
    //         tag:"Sad Love story",
    //         date: "2023-03-14T20:38:11.120+00:00",
    //     },
    //     {
    //         _id:"6410db33033e7bcb25d85c1ce",
    //     user:"640f6c080b32cd4878e03ed0",
    //     title:"Himanshu Bedi",
    //     description:"Love is very much fake",
    //     tag:"Sad Love story",
    //     date: "2023-03-14T20:38:11.120+00:00",
    //     },
    //     {
    //         _id:"6410db33033e7bcb25d85c1cf",
    //     user:"640f6c080b32cd4878e03ed0",
    //     title:"Monisha",
    //     description:"Love is very much fake",
    //     tag:"Sad Love story",
    //     date: "2023-03-14T20:38:11.120+00:00",
    //     },
    //     {
    //         _id:"6410db33033e7bcb25d85c1cg",
    //     user:"640f6c080b32cd4878e03ed0",
    //     title:"Chanika Bedi",
    //     description:"Love is very much fake",
    //     tag:"Sad Love story",
    //     date: "2023-03-14T20:38:11.120+00:00",
    //     },
    //     {
    //     _id:"6410db33033e7bcb25d85c1ch",
    //     user:"640f6c080b32cd4878e03ed0",
    //     title:"Himanshu Bedi",
    //     description:"Love is very much fake",
    //     tag:"Sad Love story",
    //     date: "2023-03-14T20:38:11.120+00:00",
    //     }

    // ]

    const [notes,setNotes]=useState([])

    const getnotes=async ()=> {
       const response=await fetch(`${localhost}/api/notes/getNotes`,{
        method:'GET',
        headers:{
            'Content-Type':"application/json",
            'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwZjZjMDgwYjMyY2Q0ODc4ZTAzZWQwIn0sImlhdCI6MTY3ODczMjI5Nn0.a3vFzB0gVMnXqthy03ffpBLLQ2cctBpPmTXkcQpEuhA"
        }
       });

       const data=await response.json();
     
       setNotes(data);
    }

    
    const addnote=async(note)=>{
        const response=await fetch(`${localhost}/api/notes/addNotes`,{
            method:'POST',
            headers:{
                'Content-Type':"application/json",
                'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwZjZjMDgwYjMyY2Q0ODc4ZTAzZWQwIn0sImlhdCI6MTY3ODczMjI5Nn0.a3vFzB0gVMnXqthy03ffpBLLQ2cctBpPmTXkcQpEuhA"
            },
            body: JSON.stringify(note)
           });
    
           const data=await response.json();
           console.log("lllf")
           console.log(data);
           
            setNotes(notes.concat(note));

        
       

    }

    const deletenote=async(id)=>{

        const response=await fetch(`${localhost}/api/notes/deleteNotes/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type':"application/json",
                'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwZjZjMDgwYjMyY2Q0ODc4ZTAzZWQwIn0sImlhdCI6MTY3ODczMjI5Nn0.a3vFzB0gVMnXqthy03ffpBLLQ2cctBpPmTXkcQpEuhA"
            }
            
           });
    
           const data=await response.json();
          
           
          const newnotes=notes.filter((note)=>{
            console.log("\n");
            console.log(note._id);
           
            return note._id!==id;
        })
       
        setNotes(newnotes);
    }

    // const showmodal=()=>{
    //     return (
    //     <>

    //     </>
    //     );
    // }

    const editnote=async(id,title,description,tag)=>{
      console.log(id);
    
      const ress=await fetch(`${localhost}/api/notes/editNotes/${id}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
            "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwZjZjMDgwYjMyY2Q0ODc4ZTAzZWQwIn0sImlhdCI6MTY3ODczMjI5Nn0.a3vFzB0gVMnXqthy03ffpBLLQ2cctBpPmTXkcQpEuhA"
        },
        body:JSON.stringify({title,description,tag}),
      })

      const data=await ress.json();
      if(data.message==="Enter fields Properly")
      {

      }
      else
      {
        console.log(data);
      }


    let newnote=JSON.parse(JSON.stringify(notes));
    for(let i=0;i<newnote.length;i++)
    {
        const element=newnote[i];
        if(element._id===id)
        {
            console.log("here done");
            newnote[i].title=title;
            newnote[i].description=description;
            newnote[i].tag=tag;
            break;
        }
    }
    setNotes(newnote);
     
    }
    
  return (
   <>
     <NoteContext.Provider value={{notes,addnote,deletenote,editnote,getnotes}}>
        {props.children}
     </NoteContext.Provider>

   </>
  )
}

export default NoteState