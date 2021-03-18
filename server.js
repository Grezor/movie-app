const express = require('express')
const app = express()
const axios = require('axios')

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=34ffbc41f61cd831dd85524b41b1462f&page=1'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=34ffbc41f61cd831dd85524b41b1462f&query='

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
})

app.get('/home', (req, res) => {
  axios.get(API_URL)
  .then(response => {
    res.send(response.data)
  })
  .catch(error => {
    console.log(error)
  });
})

app.get('/search/:search', (req, res) => {
  const search = req.params.search
  const url = SEARCH_API + search
  axios.get(url)
  .then(response => {
    res.send(response.data)
  })
  .catch(error => {
    console.log(error)
  })
})

const port = 3000
const hostname = 'localhost'
app.listen(port, hostname, function(){
  console.log('Mon serveur fonctionne sur http://' + hostname + ':' + port + '\n')
})
