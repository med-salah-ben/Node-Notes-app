
const fs = require('fs');
const notes = require("./notes");
const yargs = require('yargs');

// console.log("process" , process.argv)

var title =yargs.argv.title
var body  = yargs.argv.body
var command = yargs.argv._[0]

if(command ==="add"){
    console.log("adding note")
    notes.addingNote(title,body)
}else if(command ==="remove"){
    console.log("removing note")
    notes.removeNote(title)
}else if(command ==="read"){
    console.log("reading note")
    notes.readNote(body)
}else if(command ==="list"){
    console.log("List notes")
    notes.getList()
}else{
    console.log('Unknown command')
}
