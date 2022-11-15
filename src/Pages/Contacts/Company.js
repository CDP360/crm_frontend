import React from 'react'
import Plus from '../../assests/plus.png'
import Search from '../../assests/search.png'
import Empty from '../../assests/empty-box.png'
import './styles/company.scss' 

function Company() {
  return (
    <div style={{backgroundColor:'#f0f5fc',height:'84vh',padding:'2%'}}>
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <h3>Company List</h3>
            <button style={{display:'flex',justifyContent:'space-around',width:'160px',padding:'0.5%',backgroundColor:'green',color:'white',border:'none',borderRadius:'10px'}}>
                <img src={Plus} style={{width:'12%',marginTop:'3%'}}/>
                <p style={{marginBottom:'auto'}}>New Company</p>
            </button>
        </div>
        <div style={{marginTop:'3%',display:'flex'}}>
            <div style={{backgroundColor:'white',border:'1px solid gray',borderRight:'none',borderTopLeftRadius:'10px',borderBottomLeftRadius:'10px'}}>
              <img src={Search} style={{width:'30px',marginTop:'20%',padding:'15%'}}/>
            </div>
           <input className='input-text' placeholder='Search by company name' 
           style={{width:'20%',padding:'0.7%',border:'1px solid gray',borderLeft:'none',borderTopRightRadius:'10px',borderBottomRightRadius:'10px'}}
           />
        </div>
        <div style={{display:'flex',justifyContent:'space-between',marginTop:'2%',backgroundColor:'white',padding:'1%'}}>
            <p>Company Name</p>
            <p>Phone</p>
            <p>Email</p>
            <p>Created By</p>
            <p>Created Date</p>
        </div>
        <div style={{width:'100%',height:'50vh',backgroundColor:'white',border:'1px solid lightgray',borderRadius:'5px'}}>
            <div style={{textAlign:'center'}}>
                <img src={Empty} style={{width:'15%',marginTop:'2%'}}/>
                <p>You don’t have any companies yet.</p>
                <p>Add New Company</p>
            </div>
        </div>
    </div>
  )
}

export default Company