import React, {useState, useEffect, useCallback, useMemo } from 'react'
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

// const HookCounter = ({value}) => {
//     useEffect(() => console.log('mount'), [])
//     useEffect(() => console.log('update'))
//     useEffect(() => {
//         console.log('mount1')
//         return () => console.log('unmount')
//     }, [])
// return <p>{value}</p>
// }

const getPlanet = (id) => {
  return fetch(`https://swapi.dev/api/planets/${id}`)
    .then((r) => r.json()).then((data) => data)
}

const useRequest = (request) => {
    const initialState = useMemo(() => ({
        data: null,
        loading: true,
        error: false
    }), []) 

    const [dataState, setDataState] = useState(initialState)
    useEffect(() => {
        setDataState(initialState)
        let canselled = false
        request()
        .then(data => !canselled && setDataState({
            data,
            loading: false,
            error:false
        })).catch(error => !canselled && setDataState({
            data: false,
            loading: false,
            error
        })) 
        
    // .then((r) => r.json()).then((data) => !canselled && setName(data.name))
    return () => canselled = true
    }, [ request, initialState ])
    return dataState
}

const usePlanetName = (id) => {
    const request = useCallback(() =>  getPlanet(id), [id])
    return useRequest(request)
}

const PlanetName = ({value}) => {
    const { data, loading, error } = usePlanetName(value)

    if(loading) {
        return <div>loading...</div>
    }
    if(error) {
        return <div>Something has wrong</div>
    }
    return (
    <p>{value} - Planet Name : {data && data.name}</p>
    )
}


// const Notification = () => {
//     const [vis, setVis] = useState(true)

//     useEffect(() => {
//         const timeout = setTimeout(() => setVis(false), 3500)
//         return () => clearTimeout(timeout)
//     })
 
// return (
//     <div>
//         { vis && <p>Hello</p>}
//     </div>
// )
// }


ReactDom.render(<App />, document.getElementById('root'))