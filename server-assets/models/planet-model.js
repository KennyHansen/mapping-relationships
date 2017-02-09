let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let PlanetSchemaModel = {
    name: { type: String, required: true },
    description: { type: String },
    mass: { type: Number },
    // Relations
    // galaxyId: { type: ObjectId, ref: 'System' },
    // starId: { type: ObjectId, ref: 'Star' },
    // moons: [{ type: ObjectId, ref: 'Moon' }],
    // species: [{ type: ObjectId, ref: 'Species' }]
    
}

let schema = new Schema(PlanetSchemaModel)
let PlanetModel = mongoose.model('Planet', schema)

module.exports = PlanetModel