const http = require('http');
const url = require('url');
const port = 3000; 
function generateTable(number) {
  let table = '<h1>Table of ' + number + '</h1>';
  table += '<table>';
  for (let i = 1; i <= 10; i++) {
    table += '<tr><td>' + number + ' x ' + i + '</td><td>' + (number * i) + '</td></tr>';
  }
  table += '</table>';
  return table;
}

const server = http.createServer((req, res) => {
  const query = url.parse(req.url, true).query;
  const number = parseInt(query.number);

  if (!isNaN(number)) {
  
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(generateTable(number));
    res.end();
  } else {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Invalid input. Please provide a valid number as a query parameter.');
  }
});


server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
