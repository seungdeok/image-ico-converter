const fs = require('fs');
const { convert } = require('@fiahfy/ico-convert');
const bufs = [
  fs.readFileSync(__dirname + '/256x256.png'),
  fs.readFileSync(__dirname + '/256x256.png'),
  fs.readFileSync(__dirname + '/256x256.png'),
];
convert(bufs).then((data) => {
  fs.writeFileSync('output.ico', data)
});