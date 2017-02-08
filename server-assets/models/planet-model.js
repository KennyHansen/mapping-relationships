let PlanetSchemaModel = {
    name: { type: String, required: true },
    description: { type: String },
    mass: { type: Number },
    // Relations
    galaxyId: { type: ObjectId, ref: 'System' },
    starId: { type: ObjectId, ref: 'Star' },
    moons: [{ type: ObjectId, ref: 'Moon' }],
    species: [{ type: ObjectId, ref: 'Species' }]
    
}