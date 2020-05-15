export default class DummiSwapiService {

    _people = [
            {
                id: 1,
                name: 'Sasha [Test]',
                gender: 'male',
                birthYear: 1098,
                eyeColor: 'brown'
        },
        {
            id: 2,
            name: 'Sveta [Test]',
            gender: 'female',
            birthYear: 1994,
            eyeColor: 'green-grey'
    }
    ]

    _planets = [
        {
            id: 1,
            name: 'Earth [Test]',
            diameter: 12742,
            rotationPeriod: 24
        },
        {
            id: 2,
            name: 'Moon [Test]',
            diameter: 3474,
            rotationPeriod: 24
        }
    ]

    _starShips = [
        {
            id:1,
            name: 'Tesla [Test]',
            model: 'Model-X',
            manufacturer: 'Tesla',
            costInCredits: 120000,
            length: 5,
            passengers: 7
        },
        {
            id:2,
            name: 'BMW [Test]',
            model: 'M5',
            manufacturer: 'BMW',
            costInCredits: 150000,
            length: 4.7,
            passengers: 5
        }
    ]

    getAllPeople = async ()  => {
        return this._people
    }
    getPerson = async () => {
        return this._people[0] 
    }

    getAllStarShips = async () => {
        return this._starShips
    }
    getStarShip = async () => {
        return this._starShips[0]
    }

    getAllPlanets = async ()  => {
        return this._planets
    }
    getPlanet = async () => {
        return this._planets[0] 
    }

    getImagePerson = () => {
        return 'https://blog.farvater.travel/wp-content/uploads/2020/02/rfhnbyrf-3-2.png'
    }

    getImageStarship = () => {
        return 'https://s.auto.drom.ru/i24195/r/photos/tesla/model_x/big_1052567.jpg'
    }

    getImagePlanet = () => {
        return 'https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg'
    }


}