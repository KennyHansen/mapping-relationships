var planetMap = {
    name: 'planet',
    relations: {
        hasMany: {
            moons: {
                localField: 'moon',
                foreignKey: 'moonId'
            },
            species: {
                localField: 'species',
                foreignKey: 'speciesId'
            }
        },
        belongsTo: {
            galaxies: {
                localField: "galaxy",
                localKey: 'galaxyId'
            },
            stars: {
                localField: "star",
                localKey: 'starId'
            },
    }
}