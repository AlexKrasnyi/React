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
    return await res.results
  }
  
  getPerson(id) {
    return this.getResourse(`https://swapi.dev/api/people/${id}`)
  }
  
  async getAllStarShips() {
    const res = await this.getResourse('https://swapi.dev/api/starships')
    return await res.results
  }
  getStarShip(id) {
    return this.getResourse(`https://swapi.dev/api/starships/${id}`)
  }
  
  async getAllPlanets() {
   const res = await this.getResourse('https://swapi.dev/api/planets')
  return res.results
  }
  getPlanet(id){
    return this.getResourse(`https://swapi.dev/api/planets/${id}`)
  }
  }
  
  const swapi = new SwapiServise
  swapi.getAllPlanets().then((people) =>{ people.forEach((p) => {
    console.log(p.name)
  })
  })
  
  swapi.getPerson(7).then((p) => {
    console.log(p.name)
  })
  