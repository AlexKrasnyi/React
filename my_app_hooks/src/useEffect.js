import React, {useState, Component, useEffect} from 'react'
import ReactDom from 'react-dom'

const App = () => {
    const [ value, setValue ] = useState(0)
    const [ visible, setVisible ] = useState(true)
    
    if(visible){
    return (
        <div>
            <button onClick={() => setValue((v) => v + 1) }>+</button>
            <button onClick={() => setVisible(false)}>Hide</button>
            {/* <ClassCounter value={value}/> */}
            {/* <HookCounter value={value}/> */}
            <Notification />
        </div>
    )
    }
    else{
        return(
            <button onClick={() => setVisible(true)}>Show</button>
        )
    }
}

const HookCounter = ({value}) => {
    useEffect(() => console.log('mount'), [])
    useEffect(() => console.log('update'))
    useEffect(() => {
        console.log('mount1')
        return () => console.log('unmount')
    }, [])
return <p>{value}</p>
}


const Notification = () => {
    const [vis, setVis] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => setVis(false), 3500)
        return () => clearTimeout(timeout)
    })
 
return (
    <div>
        { vis && <p>Hello</p>}
    </div>
)
}
// class ClassCounter extends Component {

//     componentDidMount() {
//         console.log('class: mount')
//     }
//     componentDidUpdate() {
//         console.log('class: Update')
//     }
//     componentWillUpdate() {
//         console.log('class: Unmount')
//     }

//     render() {
//         return <p>{this.props.value}</p>
//     }
// }

ReactDom.render(<App />, document.getElementById('root'))