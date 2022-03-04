const API_BASE = 'https://pokeapi.co/api/v2/'

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
                items: await basicFetch('pokemon/pikachu')
            },
            {
                slug: 'bulbasaur',
                title: 'Bulbasaur',
                items: await basicFetch('pokemon/bulbasaur')
            },
            {
                slug: 'charmander',
                title: 'Charmander',
                items: await basicFetch('pokemon/charmander')
            },
            {
                slug: 'gyarados',
                title: 'Gyarados',
                items: await basicFetch('pokemon/gyarados')
            },
            {
                slug: 'gengar',
                title: 'Gengar',
                items: await basicFetch('pokemon/gengar')
            },
            {
                slug: 'dragonite',
                title: 'Dragonite',
                items: await basicFetch('pokemon/dragonite')
            }
        ]
    }
}

