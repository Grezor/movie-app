const express = require('express')
const app = express()
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

app.use(express.static("public"));
const test = [];
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
  const request = new XMLHttpRequest();
  request.onload = function(){
    return this.responseText
  }
  request.open('GET', 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=34ffbc41f61cd831dd85524b41b1462f&page=1', true)
  request.send(test);
  console.log(test)


})

app.get('/search/:search', (req, res) => {
  res.send('hello');
})

const port = 3000
const hostname = 'localhost'
app.listen(port, hostname, function(){
  console.log('Mon serveur fonctionne sur http://' + hostname + ':' + port + '\n')
})
