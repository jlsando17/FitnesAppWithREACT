import React from 'react'
import exerciseImg from '../images/image1.jpg'

class Card extends React.Component {
  
    render(){
        return (
            <div>
                <div>
                    <img src={exerciseImg}/>
                </div>
                <div>
                    <h1>Technique Guides</h1>
                    <p>learn amazing stret workout</p>
                </div>
            </div>
        )
    }
}

export default Card