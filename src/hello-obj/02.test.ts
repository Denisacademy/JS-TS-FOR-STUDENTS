import {CityType} from "./02_02";

let city: CityType

beforeEach(() => {
    city = {
        title: "NY",
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 10,
                    street: {
                        title: 'White street'
                    }
                }
            }, {
                buildedAt: 2018,
                repaired: true,
                address: {
                    number: 25,
                    street: {
                        title: 'Happy street'
                    }
                }
            }, {
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 11,
                    street: {
                        title: 'Black street'
                    }
                }
            }
        ],
        governmentBuildings: [
            {
                type: 'Hospital', budget: 10000, staffCount: 20,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                type: 'Bus station', budget: 25000, staffCount: 5,
                address: {
                    street: {
                        title: 'Universe Str'
                    }
                }
            },
            {
                type: 'Fire station', budget: 40000, staffCount: 30,
                address: {
                    street: {
                        title: 'Square Str'
                    }
                }
            },
        ],
        citizensNumber: 100000
    }
})

test('test city should contains 3 houses', () => {
    expect(city.houses.length).toBe(3)
    expect(city.houses[0].address.street.title).toBe('White street')
})

test('test city should contains hospital and fire station', () => {
    expect(city.governmentBuildings[0].type).toBe('Hospital')
    expect(city.governmentBuildings.length).toBe(3)
    expect(city.governmentBuildings[1].budget).toBe(25000)
    expect(city.governmentBuildings[1].staffCount).toBe(5)
})