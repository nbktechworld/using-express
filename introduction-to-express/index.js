const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.static('public', { extensions: ['html'] }));

app.get('/products', function(req, res) {
  // these would typically come from a database
  const products = [
    {
      id: '1',
      name: 'Table',
    },
    {
      id: '2',
      name: 'Chair',
    },
  ];

  res.set('Content-Type', 'application/json');
  // res.status(200)
  res.status(200).send(products);
});

// app.get('/hello-world', function(req, res) {
//   res.set('Content-Type', 'text/html');

//   const fileContent = fs.readFileSync('public/hello-world.html', { encoding: 'utf-8' });

//   res.send(fileContent);
// });

app.get('/another-endpoint', function(req, res) {
  const information = 'Lorem ipsum whatever';

  res.send(information);
});

const port = 3000;
app.listen(port, function() {
  console.log(`Server is running on http://localhost:${port}`);
});
