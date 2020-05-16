export default class SwapiService  {
    async getResourse(url) {
       const res = await fetch(url)
        if(!res.ok) {
          throw new Error (`[ERROR] ${res.status}`)
        }
        return await res.json()
     }
  
  
  getAllPeople = async () => {
    const res = await this.getResourse('https://swapi.dev/api/people?size=3')
    return await res.results.map(this._transformPeope)
  }
  
  getPerson = async (id) => {
    const people = await this.getResourse(`https://swapi.dev/api/people/${id}`)
    return this._transformPeope(people)
  }
  
  getAllStarShips = async () => {
    const res = await this.getResourse('https://swapi.dev/api/starships')
    return await res.results.map(this._transformStarship)
  }

  getStarShip = async (id) => {
    const starship = await this.getResourse(`https://swapi.dev/api/starships/${id}`)
    return this._transformStarship(starship)
  }
  
  getAllPlanets = async () => {
   const res = await this.getResourse('https://swapi.dev/api/planets')
   return await res.results.map(this._transformPlanet)
  }

  getPlanet = async (id) => {
    const planet = await this.getResourse(`https://swapi.dev/api/planets/${id}`)
    return  this._transformPlanet(planet)
  }

  getImagePerson = ({id}) => {
    return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
  }

  getImageStarship = ({id}) => {
    return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
  }

  getImagePlanet = ({id}) => {
    return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
  }

  _transformId(item) {
    const idRegExp = /\/([0-9]*)\/$/
    return item.url.match(idRegExp)[1]
  }

  _transformStarship = (starship) => {

    return {
      id: this._transformId(starship),
      name: starship.name,
      model: starship.model,
      passengers: starship.passengers,
      costInCredits: starship.cost_in_credits
    }
  }

  _transformPeope = (people) => {

    return {
      id: this._transformId(people),
      name: people.name,
      gender: people.gender,
      birthYear: people.birth_year,
      eyeColor: people.eye_color
    }
  }

  _transformPlanet = (planet) => {

    return {
      id: this._transformId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diametr: planet.diameter
    }
  }
}
  
  // const swapi = new SwapiServise
  // swapi.getAllPlanets().then((people) =>{ people.forEach((p) => {
  //   // console.log(p.name)
  // })
  // })
  
  // swapi.getPerson(7).then((p) => {
  //   // console.log(p.name)
  // })
  