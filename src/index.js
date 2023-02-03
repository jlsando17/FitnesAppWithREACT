//const element = document.createElement('h1')

//element.innerText='hola word'

//const container =document.getElementById('root')

//container.appendChild(element)


import React from 'react'
import ReactDOM from 'react-dom'

const user ={
  firstName:'jose',
  lastName:'Sandoval',
  avatar:'https://gravatar.com/avatar/3f41c9d9c8e8d0bd1987686c911b86d6?s=400&d=robohash&r=x'
}

function getName(user){
  return `${user.firstName} ${user.lastName}`
}

function getSaludo(user){
  if(user){
     return <h1>holap {getName(user)}</h1>
  }
  return <h1>registrese</h1>
}

const name='Jose'
//const element=<div>{getSaludo(user)}</div>

const element =(
  <div>
    <h1>{getSaludo(user)}</h1>
    <img src={user.avatar} />
  </div>
)



const container=document.getElementById('root')

//ReactDOM.render(___que____donde___)

ReactDOM.render(element,container)