var galaxyMap = {
    name: 'galaxy',
    relations: {
        hasMany: {
            stars: {
                localField: "star",
                foreignKey: 'starId'
            },
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
        }
    }
}