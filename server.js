const express = require('express')
const app = express()
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
})

app.get('/search/:search', (req, res) => {
  res.send('hello');
})

const port = 3000
const hostname = 'localhost'
app.listen(port, hostname, function(){
  console.log('Mon serveur fonctionne sur http://' + hostname + ':' + port + '\n')
})
