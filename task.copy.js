var path = require('path');
var copy = require('copy');
var opts = {
  cwd: path.resolve(__dirname, './'),
  flatten: true
};

copy.each(['./public/manifest.json', './public/CNAME', './public/robots.txt'], 'build', opts, function(err, files) {
  if (err) throw err;
  console.log('static assets are copied!');
});

copy('./public/images/**.*', 'build/public/images', opts, function(err, files) {
  if (err) throw err;
  console.log('All images are copied!');
});
