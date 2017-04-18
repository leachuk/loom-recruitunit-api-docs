const fs = require('fs');

exports.handler = function(event, context, callback) {
  fs.readFile('./index.html', 'utf8', (err, data) => {
    if (err) {
      return console.log(err);
    }
    callback(null, {
      statusCode: 200,
      headers: {
        'Content-type': 'text/html; charset=UTF-8',
      },
      body: data,
    });
  });
};
