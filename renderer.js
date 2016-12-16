let fs = require('fs');
let path = require('path');
let glob = require('glob');
let dir = '.';

glob('*', function (error, files) {
  files.forEach(function (item) {
    document.body.appendChild(document.createTextNode(item + ' '));
  })
});
