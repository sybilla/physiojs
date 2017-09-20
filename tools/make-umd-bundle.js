var browserify = require('browserify');
var fs = require('fs');

var b = browserify(['dist/cjs/physiojs.js'], {
  baseDir: 'dist/cjs',
  standalone: 'physiojs'
});

b.bundle().pipe(fs.createWriteStream('dist/global/physiojs.umd.js'));

