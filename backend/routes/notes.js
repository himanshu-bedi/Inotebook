const express = require("express");
const router = express.Router();
const Notes = require("../models/Notes");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const fetchUser = require("../middleware/fetchUser");
const { updateOne } = require("../models/Notes");

router.get("/api/notes/getNotes", fetchUser, async (req, res) => {
  const userid = req.id;
  const notes = await Notes.find({ user: userid });
  res.json(notes);
});

router.post("/api/notes/addNotes", fetchUser, async (req, res) => {
  const userid = req.id;
  const { title, description, tag } = req.body;

  if (title.length < 3 || description.length == 0 || tag === "") {
    return res.status(401).send({ message: "Enter fields Properly" });
  }

  const newnote = new Notes({ title, description, tag, user: userid });
  const savednote = await newnote.save();

  res.json(savednote);
});

router.put("/api/notes/editNotes/:id", fetchUser, async (req, res) => {
  console.log(req.params.id);
  let note = await Notes.findById(req.params.id);

  const { title, description, tag } = req.body;
  console.log(req.body);

  if (title.length < 3 || description.length == 0 || tag === "") {
    return res.status(401).send({ message: "Enter fields Properly" });
  }

  //we can't create newnote as new object because then id will be differenet so problem
  const newnote = {};
  newnote.title = title;
  newnote.description = description;
  newnote.tag = tag;

  if (note.user.toString() != req.id) {
    return res.status(401).send({ message: "Error" });
  }

  note = await Notes.findByIdAndUpdate(
    req.params.id,
    { $set: newnote },
    { new: true }
  );

  res.send(note);
});

router.put("/api/notes/deleteNotes/:id", fetchUser, async (req, res) => {
  try {
    let note = await Notes.findById(req.params.id);
  
    if (!note) {
      return res.status(401).send({ message: "Error" });
    }

    if (note.user.toString() != req.id) {
      return res.status(401).send({ message: "Error" });
    }

    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({message:"Deleted"});
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
