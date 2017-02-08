let StarSchemaModel = {
    name: { type: String, required: true },
    description: { type: String },
    mass: { type: Number },
    // Relations
    galaxyId: { type: ObjectId, ref: 'System' },
    planets: [{ type: ObjectId, ref: 'Planet' }],
    moons: [{ type: ObjectId, ref: 'Moon' }],
    
}