const fs = require("fs");

const fetchNotes = ()=>{
    try {
        return JSON.parse(fs.readFileSync("notes.txt"))
    } catch (error) {
        return []
    }
}

const addingNote = (title , body) =>{
    var notes = fetchNotes()
    var note = {
        title,
        body
    }
    notes.push(note)
    fs.writeFileSync('notes.txt', JSON.stringify(notes))
    logNote(note)
}

const removeNote = (title)=>{
    var notes = fetchNotes()
    var filterNotes = notes.filter((note)=>note.title !==title)
    fs.writeFileSync('notes.txt' , JSON.stringify(filterNotes))
}

const readNote = (body) =>{
    var notes = fetchNotes()
    var filterNotes = notes.filter((note)=>note.body ===body)
    console.log(filterNotes)
} 

const getList = ()=>{
    const notes = fetchNotes();
    notes.forEach((note)=>logNote(note))
}

logNote = (note)=>{
    console.log("*********************");
    console.log(`Title : ${note.title}`);
    console.log(`Body : ${note.body}`);
}

module.exports={
    addingNote,
    removeNote,
    readNote,
    getList
}