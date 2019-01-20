var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Leaflet App #1',
    subheading: 'Life is pretty good, right?'
  })
})

module.exports = router
