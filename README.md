# Note-taking application
A command line interface(CLI) application to simulate a Note taking application built using Nodejs. It uses a third party node module - Yargs to parse command line arguments. This application allows the following operations:

* Adding a Note
* Removing a Note
* Reading a Note
* Listing all Notes

# Installation

Make sure you have Nodejs and npm installed on your machine.  
Follow this link if unsure : https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

1. Clone into local folder
2. Install dependencies with npm install 
3. See documentation node app --help

# Usage
1. node app add --title="Note Title" --description="Note's content"
2. node app list
3. node app read --title="Note Title"
4. node app remove --title="Note Title"
