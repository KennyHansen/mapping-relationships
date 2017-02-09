let router = require('express').Router()
let Stars = require('../models/star-model')

// STARS
router.post('/stars', function (req, res) {
    Stars.create(req.body).then(star => {
        res.send({ message: "Successfully created a star", data: star })
    }).catch(err => {
        res.send({ message: "Failed to created a star", error: err })
    })
})

router.get('/stars', function (req, res) {
    Stars.find().then(stars => {
        res.send({ data: stars })
    }).catch(err => {
        res.send({ error: err })
    })
})


router.get('/stars/:id', function (req, res) {
    Stars.findById(req.params.id).then(star => {
        res.send({ data: star })
    }).catch(err => {
        res.send({ error: err })
    })
})

router.get('/stars/:id/planets', function (req, res) {
    Stars.findById(req.params.id).then(stars => {
        res.send({ data: stars })
    }).catch(err => {
        res.send({ error: err })
    })
})

// router.get('/stars/:id', (req, res) => {
//     let newStar = req.body

//     Stars.find(newStar)
//         .then(star => {
//             res.send({ message: "Successfully created a new star", data: star })
//         })
//         .catch(err => {
//             res.send({ error: err })
//         })
// })


// router.get('/stars/:id', function (req, res) {
//     let starId = req.params.id
//     let star = searchFor('Stars', starId)
//     console.log("star:", star)
//     if (star) {
//         return res.send({ message: "Found star", data: star })
//     }
//     return res.send({ error: "Star does not exist" })
// })

module.exports = router