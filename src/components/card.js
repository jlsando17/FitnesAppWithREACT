import React from 'react'
import exerciseImg from '../images/image1.png'
import './styles/Card.css'
import circlesImg from '../images/circles.png'

class Card extends React.Component {
    
    constructor(props){
        super(props)
        this.state={
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ompZsPOmN6XfJy1oA4ijWhU7c8eqNBJHdQ&usqp=CAU'
        }
    }

    componentDidMount(){
        setTimeout(()=>{
          this.setState({
            image:"https://images2.wikia.nocookie.net/__cb20131231193749/es.pokemon/images/thumb/f/f6/Weedle_%28dream_world%29.png/140px-Weedle_%28dream_world%29.png"

          })
        },3000)
    }

    render(){
        const {title,description,img,leftColor,rightColor}=this.props
        return (
            <div className='card mx-auto Fitness-Card'
            style={{
                backgroundImage:`url(${circlesImg}), linear-gradient(to right,${leftColor},${rightColor} )`
            }}>
             <div className='card-body'> 
              <div className='row center'>
                <div className='col-6'>
                    <img  src={this.state.image} className="float-right" />
                    </div>
                     <div className='col-6 Fitness-Card-Info'>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
              </div>
            </div>
            </div>

        )
    }
}

export default Card