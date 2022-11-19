import React from 'react'
import Message from '../../../assests/message.png'
import Maximum from '../../../assests/maximize.png'
import Minimize from '../../../assests/minimize.png'
import Tag from '../../../assests/addTag.png'
import Smile from '../../../assests/smile.png'
import { useState } from 'react';
import './SendDetails.scss'

function SendDetails() {
  const [style,setStyle]=useState(true)
  const [smsModal,setSmsModal]=useState(false)

  const sms=()=>{
    setStyle(false)
  }

  const fullscreen=()=>{
    setSmsModal(true)
  }

  const smallscreen=()=>{
    setStyle(true)
  }

  return (
    <div style={{width:'40%'}}>
      <div style={{padding:'2.5%'}}>
        <p style={{color:'skyblue',marginLeft:'3%',marginBottom:'auto'}}>+ Assign</p>
      </div>
      <hr style={{marginTop:'auto'}}/>
      <div className={`${style?'messages':'actived'}`} >
        <hr/>
        <img src={Message} style={{width:'20px'}}/>
        <p style={{fontWeight:'bold'}}>Conversation began</p>
      </div>
      <hr style={{marginBottom:'auto'}}/>
      {
        style?<div style={{display:'flex',justifyContent:'space-between',marginTop:'3%'}}>
        <div style={{display:'flex'}}>
        <button style={{padding:'1%',backgroundColor:'white',border:'none',marginLeft:'3%',width:'100px'}} onClick={sms}>Send SMS</button>
        <button style={{padding:'1%',backgroundColor:'white',border:'none',marginLeft:'3%',width:'100px'}}>Send Email</button>
        </div>
        <img src={Maximum} style={{width:'20px',height:'20px'}} onClick={fullscreen}/>
        </div>
        :
        <div style={{padding:'3%'}}>
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <div style={{display:'flex'}}>
              <p className={`${smsModal?'activesms':'normalsms'}`} >SMS</p>
              <p style={{marginLeft:'15%'}}>Email</p>
              </div>
              <img src={Minimize} style={{width:'20px',height:'20px'}} onClick={smallscreen}/>
          </div>
          <div>
            <div style={{padding:'2%',display:'flex',justifyContent:'space-between',border:'1px solid gray'}}>
              <input style={{border:'none',width:'95%',height:'50px'}} placeholder='Type a message'/>
              <div style={{display:'flex',flexDirection:'column'}}>
                <img src={Tag} style={{width:'20px',marginTop:'40%'}}/>
                <img src={Tag} style={{width:'20px',marginTop:'40%'}}/>
                <img src={Smile} style={{width:'20px',marginTop:'40%'}}/>
              </div>
            </div>
            <div style={{marginTop:'2%',display:'flex',justifyContent:'space-between'}}>
              <div style={{display:'flex',width:'100%'}}>
                <img src={Tag} style={{width:'20px',height:'20px',marginTop:'2%',marginLeft:'5%'}}/>
                <img src={Tag} style={{width:'20px',height:'20px',marginTop:'2%',marginLeft:'5%'}}/>
              </div>
              <div style={{display:'flex'}}>
                <button style={{padding:'1%',backgroundColor:'white',border:'1px solid lightgray',borderRadius:'5px',width:'80px',marginRight:'5%'}}>Clear</button>
                <button style={{padding:'1%',backgroundColor:'green',border:'none',borderRadius:'5px',width:'80px',marginRight:'5%',color:'white'}}>Send</button>
              </div>
            </div>
          </div>
        </div>
      }
      
    </div>
  )
}

export default SendDetails