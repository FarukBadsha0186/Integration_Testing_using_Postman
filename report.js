const newman = require('newman');
require('dotenv').config();



newman.run({
    collection:`https://api.postman.com/collections/24084302-e41126a9-1d99-45fb-89c4-7575c6259ec8?access_key=${process.env.secretkey}`,
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});