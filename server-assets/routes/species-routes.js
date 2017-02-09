let router = require('express').Router()
let Stars = require('../models/star-model')

// STARS
router.get('/galaxies/:galaxyId/stars/:starId/planets/:planetId', function (req, res) {
    Stars.find().then(stars => {
        res.send({ data: stars })
    }).catch(err => {
        res.send({ error: err })
    })
})