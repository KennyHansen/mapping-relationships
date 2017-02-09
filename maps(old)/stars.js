var starMap = {
    name: 'star',
    relations: {
        hasMany: {
            planets: {
                localField: 'planet',
                foreignKey: 'planetId'
            },
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
                localField: 'galaxy',
                localKey: 'galaxyId'
            }
        }
    }
}