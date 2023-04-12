import React from "react";
import { Link } from "react-router-dom";
function Table(props) {
  const status=props.status;
  const type=props.type;
  return (
    <div className="maintable">
    <div className="tablecontainer">
      
      {/* <ul className="tablelists">
        <li className="tli">{props.transid}</li>
        <li className="tli">{props.name}</li>
        <li className="tli">{props.to}</li>
        <li className="tli">{props.amount}</li>
        <li className="tli">{props.type}</li>
        <li className="tli" style={{marginLeft:"35px"}}>{props.url}</li>
    </ul> */}
    <div className="t1" >{props.name}</div> 
    <div className="t2">{props.amount} ETH</div>
    <div className="t33">{props.url}</div> 
    <div className="t4">TXN HASH:{props.transid}</div>
    <div className="t5"> <Link to='/Success' >
				
        <button className="flipbuttonjhj" onclick="confirm('hello')" style={{
        
width: '85px',
padding: '10px',
fontSize: '10px',
background: 'red',
fontWeight: 'bold',
borderRadius: '10px',
        
}} >
Reject</button>
        </Link></div>
    <div className="t6"><Link to='/Success' >
				
        <button className="flipbuttonjhj" onclick="confirm('hello')" style={{
        
width: '85px',
padding: '10px',
fontSize: '10px',
background: '#04AA6D',
fontWeight: 'bold',
borderRadius: '10px',
marginLeft:'200px',
        
}} >
Accept</button>
        </Link></div>  
    {/* <div className="t7" >{props.url}</div> */}
    
    
    </div>
    </div>
  );
  
}

export default Table;
