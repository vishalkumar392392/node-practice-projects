
const fs = require('fs');
const chalk = require('chalk');
const getNotes = () => 'Your notes';

const addNotes = (title, body) => {

  debugger;

  const notes = loadNotes();
  const filteredNote = notes.filter(note => note.title === title);
  if(filteredNote.length !== 0){
    console.log(chalk.yellow.inverse('Already title is present!!!'));
    return;
  } 

  notes.push({
    title,
    body
  })
  saveNotes(notes);
  console.log(chalk.green.inverse('New note added'));
}

const saveNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const loadNotes = () => {
  try {
    const bufferData = fs.readFileSync('notes.json');
    const json = bufferData.toString();
    return JSON.parse(json);
  } catch (error) {
    return [];
  }
}

const removeNotes = (title) =>{
  
  const notes = loadNotes();

  const filteredNote = notes.filter(note => note.title === title);
    if(filteredNote.length !==0){
      const newNotes = notes.filter(note => note.title !== title);
      saveNotes(newNotes);
      console.log(chalk.red.inverse('Remove'));
    }
    else{
      console.log(chalk.yellow.inverse('No title is Remove'));

    }
}

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNotes:removeNotes
}