// Libraries
const path = require('path');  // Get the path
const fs = require('fs');      // File System
const solc = require('solc');


const inboxPath = path.resolve(__dirname, 'contracts', 'inbox.sol');  // Get the path of the Inbox.sol file
const source = fs.readFileSync(inboxPath, 'utf8');

const Inbox = solc.compile(source,1).contracts[':Inbox'];

module.exports = Inbox;
