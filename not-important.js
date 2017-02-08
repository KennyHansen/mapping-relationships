
let GalaxySchemaModel = {
    name: { type: String, required: true },
    description: { type: String },
    // Relations
    solarSystems: [{ type: ObjectId, ref: 'System' }],
    stars: [{ type: ObjectId, ref: 'Star' }],
    planets: [{ type: ObjectId, ref: 'Planet' }],
    moons: [{ type: ObjectId, ref: 'Moon' }],
    species: [{ type: ObjectId, ref: 'Species' }]

}

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

let StarSchemaModel = {
    name: { type: String, required: true },
    description: { type: String },
    mass: { type: Number },
    // Relations
    galaxyId: { type: ObjectId, ref: 'System' },
    planets: [{ type: ObjectId, ref: 'Planet' }],
    moons: [{ type: ObjectId, ref: 'Moon' }],
    species: [{ type: ObjectId, ref: 'Species' }]
    
}

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

let MoonSchemaModel = {
    name: { type: String, required: true },
    description: { type: String },
    mass: { type: Number },
    // Relations
    galaxyId: { type: ObjectId, ref: 'System' },
    starId: { type: ObjectId, ref: 'Star' },
    planetId: { type: ObjectId, ref: 'Planet' },
    species: [{ type: ObjectId, ref: 'Species' }]
    
}

let SpeciesSchemaModel = {
    name: { type: String, required: true },
    description: { type: String },
    // Relations
    galaxyId: { type: ObjectId, ref: 'System' },
    starId: { type: ObjectId, ref: 'Star' },
    planetId: { type: ObjectId, ref: 'Planet' },
    moonId: { type: ObjectId, ref: 'Moon' }

}