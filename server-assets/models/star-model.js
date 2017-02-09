let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let StarSchemaModel = {
    name: { type: String, required: true },
    description: { type: String },
    mass: { type: Number },
    // Relations
    galaxyId: { type: ObjectId, ref: 'Galaxy', required: true },
    // planets: [{ type: ObjectId, ref: 'Planet' }],
    // moons: [{ type: ObjectId, ref: 'Moon' }],
}

let schema = new Schema(StarSchemaModel)
let StarModel = mongoose.model('Star', schema)

module.exports = StarModel