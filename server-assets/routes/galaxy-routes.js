let express = require('express')
let Galaxies = require('../models/galaxy-model')
let Stars = require('../models/star-model')

let router = express.Router()

// GALAXIES
router.get('/galaxies', function (req, res) {
    Galaxies.find().then(galaxies => {
        res.send({ data: galaxies })
    }).catch(err => {
        res.send({ error: err })
    })
})

router.get('/galaxies/:id', function (req, res) {
    Galaxies.findById(req.params.id).then(galaxy => {
        res.send({ data: galaxy })
    }).catch(err => {
        res.send({ error: err })
    })
})

router.get('/galaxies/:galaxyId/stars/:starId?', function (req, res) {
    if (req.params.starId) {
        // DO THIS L8ER
    }
    Stars.find({ galaxyId: req.params.galaxyId }).then(stars => {
        res.send({ data: stars })
    }).catch(err => {
        res.send({ error: err })
    })

})


router.post('/galaxies', (req, res) => {
    let newGalaxy = req.body

    // if (!newGalaxy.name || !newGalaxy.description) {
    //     return res.send('Nope')
    // }

    Galaxies.create(newGalaxy)
        .then(galaxy => {
            res.send({ message: "Successfully created a new galaxy", data: galaxy })
        })
        .catch(err => {
            res.send({ error: err })
        })

})


router.get('/galaxies/:id', function (req, res) {
    let galaxyId = req.params.id
    let galaxy = searchFor('galaxies', galaxyId)
    console.log("galaxy:", galaxy)
    if (galaxy) {
        return res.send({ message: "Found galaxy", data: galaxy })
    }
    return res.send({ error: "Galaxy does not exist" })
})

module.exports = router