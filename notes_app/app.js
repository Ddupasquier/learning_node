import chalk from 'chalk';
import { addNote, removeNote, listNotes, readNote } from './notes.js';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
  .command({
    command: 'add',
    describe: 'Adding command',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string',
      },
      body: {
        describe: 'Note body',
        demandOption: true,
        type: 'string',
      },
    },
    handler: (argv) => {
      console.log('Adding notes');
      console.log('Title: ' + argv.title);
      console.log('Body: ' + argv.body);
      addNote(argv.title, argv.body);
    },
  })
  .parse();

yargs(hideBin(process.argv))
  .command({
    command: 'remove',
    describe: 'Removing command',
    builder: {
      title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string',
      },
    },
    handler: (argv) => {
      console.log('Removing notes');
      console.log('Title: ' + argv.title + 'removed');
      removeNote(argv.title);
    },
  })
  .parse();

yargs(hideBin(process.argv))
  .command({
    command: 'list',
    describe: 'Listing command',
    handler: () => {
      listNotes();
    },
  })
  .parse();

yargs(hideBin(process.argv))
  .command({
    command: 'read',
    describe: 'Reading command',
    handler: (argv) => {
      console.log('Reading note');
      readNote(argv.title);
    },
  })
  .parse();
