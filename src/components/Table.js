import React from "react";

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
    <div className="t1" style={{backgroundColor:status=== "Success" ? "green" : "red"}}>{props.status}</div> 
    <div className="t2">{props.amount} ETH</div>
    <div className="t3">{props.type}</div>
    <div className="t4">TXN HASH:{props.transid}</div>
    <div className="t5">From:{props.name}</div>
    <div className="t6">To:{props.to}</div> 
    <div className="t7" style={{visibility:type=== "Withdraw" ? "" : "hidden"}}>{props.url}</div>
    
    
    </div>
    </div>
  );
  
}

export default Table;
