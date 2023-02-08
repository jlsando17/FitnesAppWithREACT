//const element = document.createElement('h1')

//element.innerText='hola word'

//const container =document.getElementById('root')

//container.appendChild(element)


import React from 'react'
import ReactDOM from 'react-dom'
import Card  from './components/card'
import 'bootstrap/dist/css/bootstrap.css'
import Wellcome from './components/Wellcome'

const container=document.getElementById('root')



ReactDOM.render(<div>
                <Wellcome username="Joseph"></Wellcome>
                     <Card 
                      title="first title"
                      description="learn amazing stret workout"
                      img="https://images2.wikia.nocookie.net/__cb20131231193749/es.pokemon/images/thumb/f/f6/Weedle_%28dream_world%29.png/140px-Weedle_%28dream_world%29.png"
                      leftColor="#A74CF2"
                      rightColor=" #617BFB"/>
                      
                </div>,container)