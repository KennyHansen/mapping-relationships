
let GalaxySchemaModel = {
    name: { type: String, required: true },
    description: { type: String },
    // Relations
    // solarSystems: [{ type: ObjectId, ref: 'System' }],
    stars: [{ type: ObjectId, ref: 'Star' }],
    planets: [{ type: ObjectId, ref: 'Planet' }],
    moons: [{ type: ObjectId, ref: 'Moon' }],
    species: [{ type: ObjectId, ref: 'Species' }]

}

// Nope
let SolarSystemSchemaModel = {
    name: { type: String, required: true },
    description: { type: String },
    // Relations
    galaxyId: { type: ObjectId, ref: 'System' },
    starId: { type: ObjectId, ref: 'Star' },
    planets: [{ type: ObjectId, ref: 'Planet' }],
    moons: [{ type: ObjectId, ref: 'Moon' }],
    species: [{ type: ObjectId, ref: 'Species' }]

}
