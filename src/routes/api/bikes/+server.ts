import { json } from '@sveltejs/kit'
let filteredBikes = []
const bikes = [
    {
        id: '0',
        name: 'Ziad',
        bike: 'Trek'
    },
    {
        id: '1',
        name: 'Sean',
        bike: 'Specialized'
    },
    {
        id: '2',
        name: 'Christian',
        bike: 'Specialized'
    },
    {
        id: '3',
        name: 'Patrick',
        bike: 'Trek'
    },
    {
        id: '4',
        name: 'Paul',
        bike: 'Big Wheel'
    }
]

export function GET ({ url }) {
    const bikeFilter = url.searchParams.get('bike')
    filteredBikes = bikes
    if(bikeFilter) {
        filteredBikes = bikes.filter( bike => bike.bike === bikeFilter )
    }
    return json(filteredBikes)
}