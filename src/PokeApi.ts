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
                slug: 'pikachu',
                title: 'Pikachu',
                items: await basicFetch('pikachu')
            },
            {
                slug: 'bulbasaur',
                title: 'Bulbasaur',
                items: await basicFetch('bulbasaur')
            },
            {
                slug: 'charmander',
                title: 'Charmander',
                items: await basicFetch('charmander')
            },
            {
                slug: 'gyarados',
                title: 'Gyarados',
                items: await basicFetch('gyarados')
            },
            {
                slug: 'gengar',
                title: 'Gengar',
                items: await basicFetch('gengar')
            },
            {
                slug: 'dragonite',
                title: 'Dragonite',
                items: await basicFetch('dragonite')
            }
        ]
    }
}

