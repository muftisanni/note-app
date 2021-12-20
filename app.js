const chalk = require ('chalk')

const yargs = require('yargs')

const notes = require ('./notes.js')
//customize yargs version

yargs.version('1.1.0')

//Creat add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
    title: {
        describe:'Note title',
        demandOption: true,
        type: 'string'
    },
    body: {
        describe: 'Note Body', 
        demandOption: true,
        type: 'string'
    }
    },
    handler (argv){
    notes.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title:{
describe: 'Note title',
demandOption: true,
type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//create list command

yargs.command({
    command: 'list',
    describe: 'list a note',
    handler(){
    notes.listNotes ()
    }
})

//Create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title : {
            describe : 'Note title', 
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})
//add, remove, read, list

console.log(yargs.argv)

