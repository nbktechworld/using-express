const express = require('express')
const fs = require('fs')

const app = express()

app.use(express.static('public'))

app.get('/products', function(req, res) {
  // query the database for products
  const products = [
    {
      id: 1,
      name: 'iPhone 15'
    },
  ]

  res.send(products)
})

// app.get('/hello-world', function(req, res) {
//   const htmlContent = fs.readFileSync('hello-world.html', { encoding: 'utf-8' })
//   res.set('Content-Type', 'text/html');
//   res.send(htmlContent)
// });

// app.get('/not-found', function(req, res) {
//   const htmlContent = fs.readFileSync('not-found.html', { encoding: 'utf-8' })
//   res.status(404)
//   res.send(htmlContent)
// });

const port = 3000
app.listen(port, function() {
  console.log(`Server is listening at http://localhost:${port}`)
});
