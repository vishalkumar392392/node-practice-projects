const add  = require('./utils');
const validator = require('validator');
const note = require('./note');
const yargs = require('yargs');
// console.log(validator.isEmail('vishal.palla@cbre.com'));
// console.log(add(2,4));

// Create add command
yargs.command({
  command:'add',
  describe:'Add a new note',
  builder:{
    title:{
      describe:'Note title',
      demandOption:true,
      type:'string'
    },
    body:{
      describe:'Note body',
      demandOption:true,
      type:'string'
    }
  },
  handler: function(argv){
    note.addNotes(argv.title,argv.body);
  }
})
// Create remove command
yargs.command({
  command:'remove',
  describe:'remove a note....',
  builder:{
    title:{
      describe:'Note title',
      demandOption:true,
      type:'string'
    }
  },
  handler: function(argv){
    note.removeNotes(argv.title)
  }
})
// list command
yargs.command({
  command:'list',
  describe:'list command',
  handler: function(){
    console.log('list command handler method');
  }
})
// read command
yargs.command({
  command:'read',
  describe:'read command....',
  handler: function(){
    console.log('read command handler method');
  }
})

yargs.parse();
// console.log(yargs.argv);


