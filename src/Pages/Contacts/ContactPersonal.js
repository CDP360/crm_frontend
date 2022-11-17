import React from 'react'
import AppointmentDetails from './ContactPersonal/AppointmentDetails'
import ContactDetails from './ContactPersonal/ContactDetails'
import SendDetails from './ContactPersonal/SendDetails'

function ContactPersonal() {
  return (
    <>
    <hr style={{marginTop:'0px',marginBottom:'0px'}}/>
    <div style={{display:'flex',height:'80vh'}}>
        <ContactDetails/>
        <SendDetails/>
        <AppointmentDetails/>
    </div>
    </>
  )
}

export default ContactPersonal