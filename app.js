const notes = require("./notes.js");
const chalk = require("chalk");
const yargs = require("yargs");

yargs.command({
	command: "add",
	describe: "Add a new file",
	builder: {
		title: {
			describe: "Note title",
			demandOption: true,
			type: "string",
		},
		description: {
			type: "string",
			demandOption: true,
			describe: "content",
		},
	},
	handler(argv) {
		notes.addNote(argv.title, argv.description);
	},
});

yargs.command({
	command: "remove",
	describe: "removed a file",
	builder: {
		title: {
			describe: 'Note Title',
			demandOption: true,
			type: "string",
		},
	},
	handler(argv) {
		notes.removeNote(argv.title);
	},
});

yargs.command({
	command: "read",
	describe: "read a file",
	builder: {
		title: {
			describe: 'Note Title',
			demandOption: true,
			type: "string",
		},
	},
	handler(argv) {
		notes.readNote(argv.title);
	},
});

yargs.command({
	command: "list",
	describe: "list files",
	handler() {
		notes.getNotes();
	},
});

yargs.parse();
