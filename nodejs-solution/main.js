const fs = require('fs');
const utility = require('./utility.js');

fs.appendFile('log.txt', utility(process.argv[2]) + '\n', (err) => {
  if (err) throw err;
});
