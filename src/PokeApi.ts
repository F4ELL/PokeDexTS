const API_BASE = 'https://pokeapi.co/api/v2/pokemon/'

const basicFetch = async (endpoint: string) => {
    const response = await fetch(`${API_BASE}${endpoint}`)
    const json = await response.json()
    return json
}

export default {

    getPokeList: async () => {
        return [
            {
                color: '#D4A813',
                title: 'Pikachu',
                items: await basicFetch('pikachu')
            },
            {
                color: '#18d621',
                title: 'Bulbasaur',
                items: await basicFetch('bulbasaur')
            },
            {
                color: '#d64418',
                title: 'Charmander',
                items: await basicFetch('charmander')
            },
            {
                color: '#1864d6',
                title: 'Gyarados',
                items: await basicFetch('gyarados')
            },
            {
                color: '#7a18d6',
                title: 'Gengar',
                items: await basicFetch('gengar')
            },
            {
                color: '#d64418',
                title: 'Dragonite',
                items: await basicFetch('dragonite')
            }
        ]
    }
}

