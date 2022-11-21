import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';

function Trigger() {
  const [createFolder, setCreateFolder] = useState(false);
  const [addTrigger, setAddTrigger] = useState(false);

  const createFolderClose = () => setCreateFolder(false);
  const createFolderShow = () => setCreateFolder(true);

  const addTriggerClose = () => setAddTrigger(false);
  const addTriggerShow = () => setAddTrigger(true);

  return (
    <div style={{padding:'2%',backgroundColor:'#f0f5fc',height:'85vh',overflow: 'auto',}}>
        <div style={{display:'flex',justifyContent:'space-between'}}>
            <div style={{display:'flex',marginTop:'2%',width:'60%'}}>
             <h3 style={{marginBottom:'auto'}}>Trigger</h3>
             <p style={{marginLeft:'2%',marginTop:'1%',marginBottom:'auto'}}>Showing <span style={{fontWeight:'bold',textDecoration:'underline'}}> All </span> rules based on<span style={{fontWeight:'bold',textDecoration:'underline'}}> Any Condition </span>that will fire <span style={{fontWeight:'bold',textDecoration:'underline'}}>Any Action</span></p>
            </div>
            <div style={{width:'30%',display:'flex',justifyContent:'space-around',height:'40px',marginTop:'2%'}}>
                <button onClick={createFolderShow} style={{width:'40%',backgroundColor:'green',color:'white',border:'none',borderRadius:'5px'}}>+ New Folder</button>
                <button onClick={addTriggerShow} style={{width:'40%',backgroundColor:'green',color:'white',border:'none',borderRadius:'5px'}}>+ Add Trigger</button>
            </div>
        </div>
       <div style={{marginTop:'3%',display:'flex',justifyContent:'space-between',backgroundColor:'white',padding:'1%',borderRadius:'10px'}}>
        <p style={{marginBottom:'auto'}}>#1-A (Home Buyer Info Form - Add to Home Buyer Nurture - Create Opportunity in New Lead stage - Notify Client)</p>
        <div style={{display:'flex',width:'15%',justifyContent:'space-around'}}>
        <Dropdown >
            <Dropdown.Toggle style={{backgroundColor:'#f0f5fc',color:'black',fontWeight:'bold'}}>Draft</Dropdown.Toggle>
            <Dropdown.Menu >
              <Dropdown.Item>Activate</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown >
            <Dropdown.Toggle style={{backgroundColor:'skyblue',color:'blue',fontWeight:'bold'}}>Edit</Dropdown.Toggle>
            <Dropdown.Menu >
              <Dropdown.Item>Duplicate</Dropdown.Item>
              <Dropdown.Item>Delete</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
       </div>
       <Modal show={createFolder} onHide={createFolderClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>
            <p> Create Folder</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Folder Name</p>
          <input
            style={{
              width: "100%",
              padding: "1%",
              border: "1px solid lightgray",
              borderRadius: "10px",
            }}
            placeholder="New Folder Name"
          />
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={createFolderClose}
            style={{
              backgroundColor: "white",
              border: "1px solid lightgray",
              borderRadius: "5px",
              width: "100px",
              padding: "1%",
            }}
          >
            Cancel
          </button>
          <button
            onClick={createFolderClose}
            style={{
              backgroundColor: "green",
              border: "none",
              borderRadius: "5px",
              width: "100px",
              padding: "1%",
              color: "white",
            }}
          >
            Save
          </button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={addTrigger}
        onHide={addTriggerClose}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <p style={{fontSize:'20px',marginBottom:'auto'}}>New Basic Rule</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Trigger Name</p>
          <input
            style={{
              width: "100%",
              padding: "1%",
              border: "1px solid lightgray",
              borderRadius: "10px",
            }}
            placeholder="New Trigger Name"
          />
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={addTriggerClose}
            style={{
              backgroundColor: "white",
              border: "1px solid lightgray",
              borderRadius: "5px",
              width: "100px",
              padding: "1%",
            }}
          >
            Close
          </button>
          <button
            onClick={addTriggerClose}
            style={{
              backgroundColor: "green",
              border: "none",
              borderRadius: "5px",
              width: "100px",
              padding: "1%",
              color: "white",
            }}
          >
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Trigger