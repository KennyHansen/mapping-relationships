var speciesMap = {
    name: 'moon',
    relations: {
         belongsTo: {
            galaxies: {
                localField: 'galaxy',
                localKey: 'galaxyId'
            },
            planets: {
                localField: 'planet',
                localKey: 'planetId'
            },
            moons: {
                localField: 'moon',
                localKey: 'moonId'
            },
        }
    }
}