import React, {useState, Component, useEffect} from 'react'
import ReactDom from 'react-dom'

const App = () => {
    const [ value, setValue ] = useState(1)
    const [ visible, setVisible ] = useState(true)
    
    if(visible){
    return (
        <div>
            <button onClick={() => setValue((v) => v + 1) }>+</button>
            <button onClick={() => setVisible(false)}>Hide</button>
            <PlanetName value={value}/>
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

const usePlanetName = ({value}) => {
    const [name, setName] = useState(null)
    useEffect(() => {
        let canselled = false
        fetch(`https://swapi.dev/api/planets/${value}`)
    .then((r) => r.json()).then((data) => !canselled && setName(data.name))
    return () => canselled = true
    }, [value])
    return name
}

const PlanetName = ({value}) => {
    const name = usePlanetName({value})
    // const [name, setName] = useState(null)
    // useEffect(() => {
    //     let canselled = false
    //     fetch(`https://swapi.dev/api/planets/${value}`)
    // .then((r) => r.json()).then((data) => !canselled && setName(data.name))
    // return () => canselled = true
    // }, [value])
    
    return (
    <p>{value} - Planet Name : {name}</p>
    )
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


ReactDom.render(<App />, document.getElementById('root'))