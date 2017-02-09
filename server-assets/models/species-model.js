let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let SpeciesSchemaModel = {
    name: { type: String, required: true },
    description: { type: String },
    // Relations
    // galaxyId: { type: ObjectId, ref: 'System' },
    // starId: { type: ObjectId, ref: 'Star' },
    // planetId: { type: ObjectId, ref: 'Planet' },
    // moonId: { type: ObjectId, ref: 'Moon' }

}

let schema = new Schema(SpeciesSchemaModel)
let SpeciesModel = mongoose.model('Species', schema)

module.exports = SpeciesModel