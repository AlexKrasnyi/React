import React, { Component } from 'react'
import Header from '../header'
import RandomPlanet from '../random-planet'
import './App.css'
import ErrorMessage from '../error-message'
import ErrorBoundary from '../error-boundary'
import SwapiService from '../../service/swapi-service'
import DummiSwapiService from '../../service/dummi-swapi-service'
import { SwapiServiceProvider } from '../swapi-context'
import { PeoplePage, PlanetPage, StarshipPage, SecretPage, LoginPage } from '../item-pages'
import {  StarshipDetail } from '../sw-components'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

export default class App extends Component {

    state={
       hasError: false,
       swapiService: new SwapiService(),
       isLogin: false
    }

    componentDidCatch() {
        this.setState({ hasError:true })
    }

    onChangeApi = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ? DummiSwapiService : SwapiService
            return {
                    swapiService: new Service()
                }
            })
    }

    onLogin = () => {
        this.setState({ isLogin: true })
    }

   render(){
    const {isLogin} = this.state

       if(this.state.hasError){
           return(
               <ErrorMessage />
           )
       }

    return (
        <div className="star-db">
            <ErrorBoundary>
                <SwapiServiceProvider value={ this.state.swapiService }>
                    <Router>
                    <Header onChangeApi={ this.onChangeApi } />
                    <RandomPlanet  />

                    <Switch>
                    <Route path="/" 
                            render={ () => <h3>Welcome to Star DB</h3> } 
                            exact />
                    <Route path="/people/:id?" component={ PeoplePage } />
                    <Route path="/planets" component={ PlanetPage } />
                    <Route path="/starships" exact component={ StarshipPage } />
                    <Route path="/starships/:id" 
                            render={ ({ match }) => {
                                const { id } = match.params
                            return <StarshipDetail itemId={ id } /> 
                            }} />
                    <Route path="/secret" render={ () => <SecretPage
                                            islogged={ isLogin } /> }  />
                    <Route path="/login" render={ () => <LoginPage
                                            islogged={ isLogin }
                                            onLogin={ this.onLogin } /> } />
                    
                    {/* <Redirect to="/" /> */}
                    <Route render={ () => <h3 className="text-center">Page not found</h3> } />
                    </Switch>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>

        </div>
    )
   }
}
