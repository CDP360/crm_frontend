import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Back from '../../assests/left.png'

function CreateWorkflow() {
  const navigate=useNavigate()
  return (
    <div style={{padding:'1.5%',backgroundColor:'#f0f5fc',overflow: 'auto',height:'100vh'}}>
      <div style={{display:'flex',marginTop:'1%'}}>
        <img src={Back} style={{width:'20px',cursor:'pointer'}} onClick={()=>navigate('/automation')}/>
        <p style={{marginBottom:'auto'}}>CreateWorkflow</p>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',marginTop:'2%'}}>
          <p style={{fontSize:'20px'}}>Select a template</p>
          <button style={{backgroundColor:'green',border:'none',borderRadius:'5px',color:'white',width:'15%'}}>+ Create workflow</button>
        </div>
        <hr/>
        <div style={{padding:'2%',display:'flex'}}>
          <div style={{width:'23%',height:'30px',cursor:'pointer'}}>
          <p style={{padding:'2%',width:'90%',backgroundColor:'lightgray',paddingLeft:'5%',borderRadius:'5px'}}>All</p>
          </div>
          <div style={{width:'60%'}}>
            <div style={{border:'1px solid skyblue',padding:'3%',borderRadius:'10px',backgroundColor:'skyblue',cursor:'ponter'}}>
              <p>Import from a campaign</p>
              <p>Import all the steps from an already existing campaign.</p>
              <p>Pick a campaign to import from</p>
              <Dropdown>
                <Dropdown.Toggle variant="light" style={{width:'100%',textAlign:'start'}}>
                   Pick a campaign
                </Dropdown.Toggle>

                <Dropdown.Menu style={{width:'100%'}}>
                  <div style={{padding:"1%"}}>
                  <input style={{width:'100%',padding:'1%',borderRadius:'5px',border:'1px solid lightgray'}}/>
                  </div>
                  <div style={{height:'20vh',overflow:'auto'}}>
                    <Dropdown.Item>Campaigns</Dropdown.Item>
                    <Dropdown.Item>A-1) Home Buyer Nurture</Dropdown.Item>
                    <Dropdown.Item>A-1) Home Buyer Nurture</Dropdown.Item>
                    <Dropdown.Item>A-1) Home Buyer Nurture</Dropdown.Item>
                    <Dropdown.Item>A-1) Home Buyer Nurture</Dropdown.Item>
                    <Dropdown.Item>A-1) Home Buyer Nurture</Dropdown.Item>
                    <Dropdown.Item>A-1) Home Buyer Nurture</Dropdown.Item>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div style={{border:'1px solid lightgray',padding:'3%',borderRadius:'10px',backgroundColor:'white',marginTop:'2%',cursor:'pointer'}}>
              <h5>Start from scratch</h5>
              <p>Start from scratch with a fresh, clean slate for your automation and add your own triggers and actions.</p>
            </div>
            <div style={{border:'1px solid lightgray',padding:'3%',borderRadius:'10px',backgroundColor:'white',marginTop:'2%',cursor:'pointer'}}>
              <h5>Recipe - Appointment Booking</h5>
              <p>Detect intent on customer reply to send them booking link or create a manual SMS to help them make a decision</p>
            </div>
            <div style={{border:'1px solid lightgray',padding:'3%',borderRadius:'10px',backgroundColor:'white',marginTop:'2%',cursor:'pointer'}}>
              <h5>Recipe - Appointment Confirmation + Reminder</h5>
              <p>Appointment confirmation and follow up reminder.</p>
            </div>
            <div style={{border:'1px solid lightgray',padding:'3%',borderRadius:'10px',backgroundColor:'white',marginTop:'2%',cursor:'pointer'}}>
              <h5>Recipe - Appointment Confirmation + Reminder + Survey + Review Request</h5>
              <p>For each new appointment, send a confirmation, send reminders, survey the result, and if the result was a sale, send a review request!</p>
            </div>
            <div style={{border:'1px solid lightgray',padding:'3%',borderRadius:'10px',backgroundColor:'white',marginTop:'2%',cursor:'pointer'}}>
              <h5>Recipe - Auto Missed Call Text-Back</h5>
              <p>If you miss a call from a lead, reply to them automatically and notify the assigned user to get back ASAP. </p>
            </div>
            <div style={{border:'1px solid lightgray',padding:'3%',borderRadius:'10px',backgroundColor:'white',marginTop:'2%',cursor:'pointer'}}>
              <h5>Recipe - Birthday Template</h5>
              <p>A workflow to do Birthday promotions</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CreateWorkflow