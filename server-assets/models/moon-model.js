let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let MoonSchemaModel = {
    name: { type: String, required: true },
    description: { type: String },
    mass: { type: Number },
    // Relations
    // galaxyId: { type: ObjectId, ref: 'System' },
    // starId: { type: ObjectId, ref: 'Star' },
    // planetId: { type: ObjectId, ref: 'Planet' },
    // species: [{ type: ObjectId, ref: 'Species' }]
    
}

let schema = new Schema(MoonSchemaModel)
let MoonModel = mongoose.model('Moon', schema)

module.exports = MoonModel
