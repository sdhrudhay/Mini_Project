
import MainLayout from '../mainlayout/MainLayout';
import {Link} from "react-router-dom"
import React, { useState } from "react";
function CHome() {
  //const [selectedImage, setSelectedImage] = useState(null);
  return (
    
    <MainLayout>
      <div className="createProject">
      <div className="insidecreate">
      <h1>Create a Project</h1><br></br>
        <span>Project Title: </span><input type="text" className='createinp'></input><br></br><br></br>
        <p>Description:</p>
        <textarea rows="4" cols="30" maxlength='100' className='createinp'></textarea><br></br><br></br>
        <span>Wallet address: </span><input type="text" className='createinp'></input><br></br>
        {/* {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
          
        </div>
      )}

      
      <br />
      
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      /> */}
      </div>
      <br />
      <Link to='/Success' >
        <button style={{
          width: '85px',
          padding: '10px',
          fontSize: '10px',
          background: '#04AA6D',
          fontWeight: 'bold',
          borderRadius: '10px',
          marginLeft: '40px',
          }} >
        Create</button>
        </Link>
      </div>
    </MainLayout>
    
  )
}

export default CHome;