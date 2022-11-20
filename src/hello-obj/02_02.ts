type StreetType = {
    title: string
}

type AddressType = {
    number?: number
    street: StreetType
}

export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

type governmentBuildingType = {
    type: 'Hospital' | 'Bus station' | 'Fire station'
    budget: number
    staffCount: number
    address: AddressType
}

export type CityType = {
    title: string,
    houses: Array<HouseType>
    governmentBuildings: Array<governmentBuildingType>
    citizensNumber: number
}
//string[]