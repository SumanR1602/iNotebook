const express = require('express')
const router = express.Router()
var fetchuser = require('../middleware/fetchuser')
const Note = require('../models/Note')
const { body, validationResult } = require('express-validator');



// ROUTE 1 :using Get /api/notes/fetchallnotes No login Required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id })
        res.json(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Ocuured")
    }
})

// ROUTE 2 : add note POST /api/notes/addnote  - login Required
router.post('/addnote', [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),
],fetchuser, async (req, res) => {
    try {
        const { title, description,tag } = req.body;

        // if there are errors return bad request and errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Note({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save()
        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Ocuured")
    }

})

// ROUTE 2 : Update existing note PUT /api/notes/updatenote  - login Required
router.put('/updatenote/:id',fetchuser, async (req, res) => {
    try {
        const { title, description,tag } = req.body;

        // if there are errors return bad request and errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const newNote={};
        if(title){newNote.title=title}
        if(description){newNote.description=description}
        if(tag){newNote.tag=tag}

        // Find if the Note exists to update
        let note=await Note.findById(req.params.id);
        if(!note){return res.status(404).send("Not Found")}

        // Check if the actual user logged in
        if(note.user.toString()!==req.user.id){
            return res.status(401).send("Not Allowed")
        }
        note=await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
        res.json({note})
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Ocuured")
    }

})

// ROUTE 2 : Delete note PUT /api/notes/deletenote  - login Required
router.delete('/deletenote/:id',fetchuser, async (req, res) => {
    try {
        // Find if the Note exists to update
        let note=await Note.findById(req.params.id);
        if(!note){return res.status(404).send("Not Found")}

        // Check if the actual user logged in
        if(note.user.toString()!==req.user.id){
            return res.status(401).send("Not Allowed")
        }

        note=await Note.findByIdAndDelete(req.params.id)
        res.json({"Success":"Note has been deleted",note:note})
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server Ocuured")
    }

})
module.exports = router