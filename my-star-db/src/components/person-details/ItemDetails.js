import React, {Component} from 'react'
import './ItemDetails.css'
import SwapiServise from '../../service/swapi-service'
import Loader from '../loader'

export default class ItemDetails extends Component {

    swapiService = new SwapiServise()

    state={
        item: null,
        loading: true,
        image: null
    }
     
    componentDidMount(){
        this.updateItem()
    }

    componentDidUpdate(prevProps) {
        if(this.props.itemId !== prevProps.itemId ||
            this.props.getItem !== prevProps.getItem ||
            this.props.getImageUrl!== prevProps.getImageUrl){
            this.updateItem()
        }
    }

    updateItem() {
        const{itemId, getItem, getImageUrl} = this.props
        if(!itemId){
            return
        }

        getItem(itemId).then((item)=> {  
            this.setState({item, loading:false, image: getImageUrl(item)})
        })
    }



     render(){

        const {item, image} = this.state
        
        if(!item) {
            return(
                <span>Please select a item</span>
            )
        }
        const load = this.state.loading ? 
                     <Loader /> : 
                     <ItemData item={item} 
                     image={image} 
                     children={
                        React.Children.map(this.props.children, (child) => {
                        return React.cloneElement(child, {item})
                        })
                        } />
        
         return (
            <div className="person-details card">
                {load}
            </div>
         )
     }
}

const Record = ({item, field, label}) => {
    return (
        <li className="list-group-item">
        <span className="term">{label}</span>
        <span>{item[field]}</span>
    </li> 
    )
}
export {Record}


const ItemData = ({item, image, children}) => {

    const { name }= item
    return(
        <React.Fragment>
                          <img className="person-image" src={ image } alt="chracters"></img>  
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        {children}
                    </ul>
                </div>
    
        </React.Fragment>
    )
}