const fs = require('fs');
const path = require('path');

const handleHomeRoute = (request, response) => {
  fs.readFile(
    path.join(__dirname, '..', 'public', 'index.html'),//goes up one folder, then into public, then gets index.html
    (error, file) => { //ES6 way of writing anonymous func, after a comma
      if (error) {
        console.log(error);
        response.writeHead(500, 'Content-type: text/html');
        response.end("<h1>Sorry, we've had an error on our end</h1>")
      } else {
        response.writeHead(200, 'Content-Type: text/html');
        response.end(file);
      }
    }
  );
};

const handlePublic = (request, response, url) => {
  //const url = request.url;
  const extension = url.split('.')[1];

  const extensionType = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    ico: 'image/x-icon'
  };

  fs.readFile(
    path.join(__dirname, '..', url),
    (error, file) => { 
      if (error) {
        console.log(error);
        response.writeHead(500, 'Content-type: text/html');
        response.end("<h1>Sorry, we've had an error on our end</h1>")
      } else {
        response.writeHead(200, `Content-Type: ${extensionType[extension]}`);
        response.end(file);
      }
    }
  );
}

module.exports = { 
  handleHomeRoute, 
  handlePublic 
};