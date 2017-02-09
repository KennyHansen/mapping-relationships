let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let GalaxySchemaModel = {
    name: { type: String, required: true },
    description: { type: String },
    // Relations
    stars: [{ type: ObjectId, ref: 'Star' }],
    // planets: [{ type: ObjectId, ref: 'Planet' }],
    // moons: [{ type: ObjectId, ref: 'Moon' }],
    // species: [{ type: ObjectId, ref: 'Species' }]

}

let schema = new Schema(GalaxySchemaModel)
let GalaxyModel = mongoose.model('Galaxy', schema)

module.exports = GalaxyModel
