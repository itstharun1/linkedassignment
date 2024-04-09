import React from 'react'

import './App.css'

import { Component } from 'react'

import sound from "./assets/sound.m4a"

  
  
const quotes=[
  {
    name:"The only way to do great work is to love what you do.",
    id:0
  },
  {
    name: "If you can't explain it simply, you don't understand it well enough.",
    id:1
  },
  {
    name:"A good friend is someone who knows your heart and still holds your hand.",
    id:2
  },
  {
    name:"The only way to do great work is to love what you do.",
    id:3
  },
  {
    name:"If you can't explain it simply, you don't understand it well enough.",
    id:4
  },
  {
    name:"A good friend is someone who knows your heart and still holds your hand",
    id:5
  },
  {
    name:"If you can't explain it simply, you don't understand it well enough.",
    id:6
  },
  {
    name:"A good friend is someone who knows your heart and still holds your hand.",
    id:7
  },
  {
    name:"The only way to do great work is to love what you do",
    id:8
  },
]



class App extends Component{


  state={
    img1:"https://media.istockphoto.com/id/2051957622/vector/vector-closed-gift-boxes-with-bow-on-white-background.jpg?s=612x612&w=0&k=20&c=HrX_cxCVOnzqgq_BqrsHIXUkFYp2c900ncLsU0hy6ro=",
    img2:"https://thumbs.dreamstime.com/b/magic-open-box-magic-gift-box-light-illustration-realistic-comming-inside-paper-isolated-white-81145912.jpg",
    val:false,
    text:""
  }

  changeImg=()=>{
    const{val}=this.state
    this.setState({val:!val});
    const randomNumber = Math.floor(Math.random()*7);
   
    const  quote = quotes[randomNumber];
    this.setState({text:quote.name})
    
  }
  changeImg1=()=>{
    const{val}=this.state
    this.setState({val:!val});
    const randomNumber = Math.floor(Math.random()*7);
   
    const  quote = quotes[randomNumber];
    this.setState({text:quote.name})

    new Audio(sound).play()
    
  }

  render(){

    const {img1,img2,val,text}=this.state

    return(
      <div className='card'>
        {val? <h1 className='text'>{text}</h1>:<h1 className='text'>Tap the box</h1>}
        {val? <img  className='img' src={img2} alt='img'/>:<img onClick={this.changeImg1} className='img' src={img1} alt='img'/>}
        {val &&(<button onClick={this.changeImg} className='btn'>Retry</button>)}
      </div>
    )
  }
}

export default App