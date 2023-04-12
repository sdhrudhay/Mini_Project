
import MainLayout from '../mainlayout/MainLayout';
import {Link} from "react-router-dom"
import React, { useState } from "react";
function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    
    <MainLayout>
      <div className="createProject">
      <div className="insidecreate">
      <h1>Request Fund</h1><br></br>
        <span>Project Title: </span><input type="text" className='createinp'></input><br></br><br></br>
        <span>Amount:</span><input type="text" className='createinp'></input><br></br><br></br>
        <span>Wallet Address:</span><input type="text" className='createinp'></input><br></br><br></br>
        {selectedImage && (
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
      /> 
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

export default Home;