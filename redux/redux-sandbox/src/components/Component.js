import React from 'react'

const Component = ({ counter, inc, dec, rnd}) => {
    return (
        <div className="jumbotron">
      <h2>{counter}</h2>
      <button onClick={inc} className="bth btn-danger btn-lg">inc</button>
      <button onClick={dec} className="bth btn-danger btn-lg">dec</button>
      <button onClick={rnd} className="bth btn-primary btn-lg">RND</button>
    </div>
    )
}

export default Component
