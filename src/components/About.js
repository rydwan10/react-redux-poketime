import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = (props) => {
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aspernatur earum, veritatis suscipit placeat adipisci culpa temporibus, ratione assumenda odio eius ex quas ab.</p>
        </div>
    )
}

export default Rainbow(About)
