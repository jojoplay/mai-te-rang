var ghpages = require('gh-pages');

ghpages.publish('out',{ src: ['**/*','.nojekyll']}, function(err) {});