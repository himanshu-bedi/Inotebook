import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NoteState from './Context/Notes/NoteState';
import Notes from './components/Notes';
import AddNote from './components/AddNote';
import NotesDisplay from './components/NotesDisplay';
import Login from './components/Login';
import Register from './components/Register'
import Contact from './components/Contact';
const App = () => {
  return (
    <>
    <Navbar/>

    <NoteState>
     <Routes>

      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/About' element={<About/>}></Route>
      <Route exact path='/Notes' element={<Notes/>}></Route>
      <Route exact path='/AddNote' element={<AddNote/>}></Route>
      <Route exact path='/NotesDisplay' element={<NotesDisplay/>}></Route>
      
      
      <Route exact path='/Contact' element={<Contact/>}></Route>
      <Route exact path='/Login' element={<Login/>}></Route>
      <Route exact path='/Register' element={<Register/>}></Route> 

      </Routes>
    </NoteState>
    </>
  )
}

export default App