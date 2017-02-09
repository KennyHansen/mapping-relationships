let router = require('express').Router()
let Moons = require('../models/moon-model')

// MOONS
router.get('/moons', function (req, res) {
    Moons.find().then(moons => {
        res.send({ data: moons })
    }).catch(err => {
        res.send({ error: err })
    })
})


router.get('/moons/:id', function (req, res) {
    Moons.findById(req.params.id).then(moons => {
        res.send({ data: moons })
    }).catch(err => {
        res.send({ error: err })
    })
})



module.exports = router