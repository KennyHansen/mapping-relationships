var moonMap = {
    name: 'moon',
    relations: {
        hasMany: {
            species: {
                localField: 'species',
                foreignKey: 'speciesId'
            }
        },
        belongsTo: {
            galaxies: {
                localField: 'galaxy',
                localKey: 'galaxyId'
                
            },
            stars: {
                localField: 'star',
                localKey: 'starId'
            },
            planets: {
                localField: 'planet',
                localKey: 'planetId'
            },
    }
}