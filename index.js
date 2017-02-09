let express = require('express')
let bodyParser = require('body-parser')
let uuid = require('uuid')
let mongoose = require('mongoose')


let galaxyRoutes = require('./server-assets/routes/galaxy-routes')
let starRoutes = require('./server-assets/routes/star-routes')
// let planetRoutes = require('./server-assets/routes/planet-routes')
// let moonRoutes = require('./server-assets/routes/moon-routes')
// let speciesRoutes = require('./server-assets/routes/species-routes')

const PORT = process.env.PORT || 8080

// DONT PUSH A REAL CONNECTION STRING TO GITHUB
const connectionString = 'mongodb://he-man:heyy@ds056789.mlab.com:56789/space-the-final-frontier'

let connection = mongoose.connection

//copypaste this stuff because it do
mongoose.connect(connectionString, {
    server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
});

connection.on('error', (err) => {
    console.log("No connection found", err)
})

connection.once('open', () => {
    console.log("Space. The Final Frontier.")
    server.listen(PORT, function () {
        console.log("The server is lit on", 'http://localhost:' + PORT)
    })
})


let server = express()
// This is totally fake
let db = {
    galaxies: [],
    stars: [],
    planets: [],
    moons: [],
    species: []
}


server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(galaxyRoutes)
server.use(starRoutes)


server.get('/', function () {
    console.log("Hey! Listen!")
})


// PLANETS
server.get('/planets', function (req, res) {
    console.log("Hey! Listen!")
    return res.send({ data: db.planets })
})

server.post('/planets', function (req, res) {
    let planet = req.body

    if (!planet.starId) {
        return res.send({ error: "YOU MUST CONSTRUCT ADDITIONAL STARS" })
    }

    let star = db.stars.find(star => { return star.id == planet.starId })
    let galaxy = db.galaxies.find(galaxy => { return galaxy.id == star.galaxyId })

    if (star) {
        planet.id = uuid.v1()

        galaxy.planets.push(planet)
        star.planets.push(planet)
        planet.moons = []

        planet.galaxyId = galaxy.id

        db.planets.push(planet)

        return res.send({
            message: "Successfuly added planet to the " + star.name + " star",
            data: planet
        })
    }
    return res.send({ error: 'The planet has no star' })
})

server.get('/planets/:id', function (req, res) {
    let planetId = req.params.id
    let planet = searchFor('planets', planetId)
    console.log("planet:", planet)
    if (planet) {
        return res.send({ message: "Found planet", data: planet })
    }
    return res.send({ error: "Planet does not exist" })
})

// MOONS
server.get('/moons', function (req, res) {
    console.log("Hey! Listen!")
    return res.send({ data: db.moons })
})

server.post('/moons', function (req, res) {
    let moon = req.body

    if (!moon.planetId) {
        return res.send({ error: "YOU MUST CONSTRUCT ADDITIONAL GALAXIES" })
    }

    let planet = db.planets.find(planet => { return planet.id == moon.planetId })
    let star = db.stars.find(star => { return star.id == planet.starId })
    let galaxy = db.galaxies.find(galaxy => { return galaxy.id == star.galaxyId })

    if (planet) {
        moon.id = uuid.v1()

        galaxy.moons.push(moon)
        star.moons.push(moon)
        planet.moons.push(moon)

        moon.starId = star.id
        moon.galaxyId = galaxy.id

        db.moons.push(moon)

        return res.send({
            message: "Successfuly added moon to the " + planet.name + " planet",
            data: moon
        })
    }
    return res.send({ error: 'The moon has no planet' })
})

server.get('/moons/:id', function (req, res) {
    let moonId = req.params.id
    let moon = searchFor('moons', moonId)
    console.log("moon:", moon)
    if (moon) {
        return res.send({ message: "Found moon", data: moon })
    }
    return res.send({ error: "That's no moon." })
})

//PUT
server.put('/galaxies/:id', function (req, res) {
    let galaxyId = req.params.id
    let galaxyName = req.body.name
    let galaxy = searchFor('galaxies', galaxyId)

    if (galaxy) {
        galaxy.name = galaxyName
        return res.send({ message: "Successfully changed galaxy to " + galaxyName })
    }
})
server.put('/stars/:id', function (req, res) {
    let starsId = req.params.id
    let starsName = req.body.name
    let stars = searchFor('stars', starsId)

    if (stars) {
        stars.name = starsName
        return res.send({ message: "Successfully changed stars to " + starsName })
    }
})
server.put('/planets/:id', function (req, res) {
    let planetId = req.params.id
    let planetName = req.body.name
    let planet = searchFor('planets', planetId)

    if (planet) {
        planet.name = planetName
        return res.send({ message: "Successfully changed planet to " + planetName })
    }
})
server.put('/moons/:id', function (req, res) {
    let moonId = req.params.id
    let moonName = req.body.name
    let moon = searchFor('moons', moonId)

    if (moon) {
        moon.name = moonName
        return res.send({ message: "Successfully changed moon to " + moonName })
    }
})
// DELETE
server.delete('/galaxies/:id', function (req, res) {
    let galaxyId = req.params.id
    let galaxyName = req.body.name
    let galaxy = searchFor('galaxies', galaxyId)

    if (galaxy) {
        //Deletes
        deleteFromUniverse('galaxies', galaxy)
        return res.send({ message: "Successfully deleted galaxy" })
    }
})
server.delete('/stars/:id', function (req, res) {
    let starsId = req.params.id
    let starsName = req.body.name
    let stars = searchFor('stars', starsId)

    if (stars) {
        //Deletes
        deleteFromUniverse('stars', star)
        return res.send({ message: "Successfully changed stars to " + starsName })
    }
})
server.delete('/planets/:id', function (req, res) {
    let planetId = req.params.id
    let planetName = req.body.name
    let planet = searchFor('planets', planetId)

    if (planet) {
        //Deletes
        deleteFromUniverse('planets', planet)
        return res.send({ message: "Successfully changed planet to " + planetName })
    }
})
server.delete('/moons/:id', function (req, res) {
    let moonId = req.params.id
    let moonName = req.body.name
    let moon = searchFor('moons', moonId)

    if (moon) {
        //Deletes
        deleteFromUniverse('moons', moon)
        return res.send({ message: "Successfully changed moon to " + moonName })
    }
})


function searchFor(query, id) {
    let searchedData = db[query]
    let foundElement;
    console.log(searchedData)
    if (searchedData) {
        searchedData.forEach(element => {
            if (element.id == id) {
                foundElement = element
            }
        })
    }
    return foundElement
}

function deleteFromUniverse(query, element) {
    let elementId = element.id
    let searchedData = db[query]

    let planet = searchedData.find(planet => { return planet.id == element.planetId })
    let star = searchedData.find(star => { return star.id == element.starId })
    let galaxy = searchedData.find(galaxy => { return galaxy.id == element.galaxyId })

    if (planet) {
        let index = planet.findIndex(x => x.id = elementId);
        planet.splice(index, 1)
    }
    if (star) {
        let index = star.findIndex(x => x.id = elementId);
        star.splice(index, 1)
    }
    if (galaxy) {
        let index = galaxy.findIndex(x => x.id = elementId);
        galaxy.splice(index, 1)
    }

    let index = searchedData.findIndex(x => x.id = elementId);
    searchedData.splice(index, 1)

}