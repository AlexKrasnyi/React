// import React, {Component} from 'react'
// import ItemDetails, {Record} from '../person-details'
// import { SwapiServiceConsumer } from '../swapi-context'

// const PersonDetail = ({itemId}) => {
//     return (
//         <SwapiServiceConsumer>
//             {
//                 ({ getPerson, getImagePerson }) => {
//                     return (
//                         <ItemDetails
//                             itemId={itemId}  
//                             getItem={getPerson}
//                             getImageUrl={getImagePerson} >
//                             <Record field='gender' label='Gender :'/>
//                             <Record field='birthYear' label='Birth Year :' />
//                             <Record field='eyeColor' label='Eye Color :' />
//                         </ItemDetails>
//                     )
//                 }
//             }    
//         </SwapiServiceConsumer>
//     )
// }

// const PlanetDetail = ({itemId}) => {
//     return (
//         <SwapiServiceConsumer>
//             {
//                 ({ getPlanet, getImagePlanet }) => {
//                     return (
//                         <ItemDetails 
//                         itemId={ itemId } 
//                         getItem={ getPlanet }
//                         getImageUrl={ getImagePlanet }
//                          >
//                             <Record field='population' label='Population :'/>
//                             <Record field='rotationPeriod' label='Rotation Period :' />
//                             <Record field='diameter' label='Diameter :' />     
//                         </ItemDetails>
//                     )
//                 }
//             }
//         </SwapiServiceConsumer>
//     )
// }

// const StarshipDetail = ({itemId}) => {
//     return (
//         <SwapiServiceConsumer>
//             {   
//                 ({ getStarShip, getImageStarship }) => {
//                     return (
//                         <ItemDetails 
//                         itemId={ itemId } 
//                         getItem={ getStarShip }
//                         getImageUrl={ getImageStarship }
//                         >
//                             <Record field='model' label='Model :'/>
//                             <Record field='passengers' label='Passengers :' />
//                             <Record field='costInCredits' label='Cost in credits :' />     
//                         </ItemDetails>
//                     )
//                 }
//             }    
//         </SwapiServiceConsumer>
//     )
// }

// // export {
// //     PersonDetail,
// //     PlanetDetail,
// //     StarshipDetail
// // }
