const express = require('express')
const asynchandler = require('express-async-handler')
const router = express.Router()

router.get('/', asynchandler(async (req, res) => {
  const response = await fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=34ffbc41f61cd831dd85524b41b1462f&page=1')
  console.log(response)
  res.json(response)
}))
