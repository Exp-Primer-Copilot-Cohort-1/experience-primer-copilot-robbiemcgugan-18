// Create web server
// 1. Create a web server
// 2. Read the comments from the file
// 3. Create a template
// 4. Replace the template with the data from the file
// 5. Send the response

// 1. Create a web server
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // 2. Read the comments from the file
  const comments = fs.readFileSync('./comments.json', 'utf8');
  const commentsArray = JSON.parse(comments);

  // 3. Create a template
  const template = fs.readFileSync('./template.html', 'utf8');

  // 4. Replace the template with the data from the file
  let output = template.replace('{%COMMENTS%}', commentsArray);

  // 5. Send the response
  res.writeHead(200, { 'content-type': 'text/html' });
  res.end(output);
});

server.listen(3000);