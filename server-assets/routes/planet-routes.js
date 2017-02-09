let router = require('express').Router()
let Planets = require('../models/planet-model')

// PLANETS
router.get('/planets', function (req, res) {
    Planets.find().then(planets => {
        res.send({ data: planets })
    }).catch(err => {
        res.send({ error: err })
    })
})


router.get('/planets/:id', function (req, res) {
    Planets.findById(req.params.id).then(planets => {
        res.send({ data: planets })
    }).catch(err => {
        res.send({ error: err })
    })
})

router.get('/planets/:id/moons', function (req, res) {
    Planets.findById(req.params.id).then(planets => {
        res.send({ data: planets })
    }).catch(err => {
        res.send({ error: err })
    })
})


module.exports = router