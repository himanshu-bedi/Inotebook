import React, { useContext } from 'react'
import NoteContext from '../Context/Notes/NoteContext'
const About = () => {

  const a=useContext(NoteContext);
  return (
    <>
    <h1>This is {a.name}</h1>
    </>
  )
}

export default About