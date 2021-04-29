const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
	console.log(chalk.blue.inverse("Your notes"));
	const notes = loadNotes();

	notes.forEach((note) => {
		console.log(chalk.yellow(note.title));
		console.log(note.description);
	});
};

const addNote = (title, description) => {
	const notes = loadNotes();
	const duplicateNote = notes.find((note) => note.title === title);

	if (!duplicateNote) {
		notes.push({
			title: title,
			description: description,
		});
		saveNotes(notes);
   		console.log(chalk.green.inverse('Note saved succesfully!'))
	} else {
		console.log(chalk.red.inverse("Duplicate found!"));
	}
};

const removeNote = (title) => {
	notes = loadNotes();
	const notesToKeep = notes.filter((note) => note.title !== title);
	if (notes.length === notesToKeep.length) {
		console.log(chalk.red.inverse("No Note Found!"));
	} else {
		console.log(chalk.green.inverse("Note Removed!"));
	}
	saveNotes(notesToKeep);
};

const saveNotes = (notes) => {
	fs.writeFileSync("notes.json", JSON.stringify(notes));
};

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync("notes.json");
		const dataJson = dataBuffer.toString();
		return JSON.parse(dataJson);
	} catch (e) {
		return [];
	}
};

const readNote = (title) => {
	const notes = loadNotes();
	const noteToRead = notes.find(
		(note) => note.title.toLowerCase() === title.toLowerCase()
	);

	if (noteToRead) {
		console.log(chalk.yellow.inverse(noteToRead.title));
		console.log(noteToRead.description);
	} else {
		console.log(chalk.red.inverse("No Note with this tile exist!"));
	}
};

module.exports = {
	getNotes: getNotes,
	addNote: addNote,
	removeNote: removeNote,
	readNote: readNote,
};
