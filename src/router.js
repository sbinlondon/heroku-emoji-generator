const { handleHomeRoute } = require('./handlers');
const { handlePublic } = require('./handlers');

const router = (request, response) => {
  
  const url = request.url;
  
  if (url === '/') {
    handleHomeRoute(request, response);
  } else if (url.indexOf('/public/') !== -1){
    handlePublic(request, response, url);
  } else {
    response.writeHead(404, 'Content-Type: text/html');
    response.end('<h1>404 Not Found - Beached As!</h1>');
  }

};

module.exports = router;