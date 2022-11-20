//literal obj
type CityType = {
    countryTitle:string
    title: string
}

type AddressType = {
    streetTitle: string
    city: CityType
}

type TechType = {
    id: number
    title: string
}

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}

const student: StudentType = {
    id: 1,
    name: 'Dimych',
    age: 32,
    isActive: false,
    address: {
        streetTitle: 'Pandora 19',
        city: {
            countryTitle: 'Venera',
            title: 'Universe'
        }
    },
    technologies: [
        {id: 1, title: 'JS'},
        {id: 2, title: 'CSS'},
        {id: 3, title: 'HTML'}
    ]
}


console.log(student.technologies[1].title)