export default class SwapiServise  {
    async getResourse(url) {
       const res = await fetch(url)
        if(!res.ok) {
          throw new Error (`[ERROR] ${res.status}`)
        }
        return await res.json()
     }
  
  
  async getAllPeople() {
    const res = await this.getResourse('https://swapi.dev/api/people')
    return await res.results.map(this._transformPeope)
  }
  
  async getPerson(id) {
    const people = await this.getResourse(`https://swapi.dev/api/people/${id}`)
    return this._transformPeope(people)
  }
  
  async getAllStarShips() {
    const res = await this.getResourse('https://swapi.dev/api/starships')
    return await res.results.map(this._transformStarship)
  }
  async getStarShip(id) {
    const starship = await this.getResourse(`https://swapi.dev/api/starships/${id}`)
    return this._transformStarship(starship)
  }
  
  async getAllPlanets() {
   const res = await this.getResourse('https://swapi.dev/api/planets')
  return await res.results.map(this._transformPlanet)
  }
  async getPlanet(id){
    const planet = await this.getResourse(`https://swapi.dev/api/planets/${id}`)
    return  this._transformPlanet(planet)
  }
  
  _transformId(item) {
    const idRegExp = /\/([\-A-Za-z0-9]*)\/$/
    console.log(item.url.match(idRegExp)[1])
    return item.url.match(idRegExp)[1]
  }

  _transformStarship(starship) {

    return {
      id: this._transformId(starship),
      name: starship.name,
      model: starship.model,
      passengers: starship.passengers,
      costInCredits: starship.cost_in_credits
    }
  }

  _transformPeope(people) {

    return {
      id: this._transformId(people),
      name: people.name,
      gender: people.gender,
      birthYear: people.birth_year,
      eyeColor: people.eye_color
    }
  }
  _transformPlanet(planet) {

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
  