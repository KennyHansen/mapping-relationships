let SpeciesSchemaModel = {
    name: { type: String, required: true },
    description: { type: String },
    // Relations
    galaxyId: { type: ObjectId, ref: 'System' },
    starId: { type: ObjectId, ref: 'Star' },
    planetId: { type: ObjectId, ref: 'Planet' },
    moonId: { type: ObjectId, ref: 'Moon' }

}