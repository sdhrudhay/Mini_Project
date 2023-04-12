import React from 'react'
import MainLayout from '../mainlayout/MainLayout';
import {Link, useLocation} from "react-router-dom";
import projects from "../ProjectTransactions"
import Table from "../components/Table";
function Transactions(props) {
  //       id:1,
  //       amount:1000,
  //       name:"joe",
  //       to:"doe",
  //       type:"wilidraw",
  //       url:"link1"
  function createTable(entry) {
    return (
      <Table
        key={entry.id}
        transid={entry.transid}
        name={entry.name}
        to={entry.to}
        type={entry.type}
        url={entry.url}
        amount={entry.amount}
        status={entry.status}
      />
    );
  }
  const [selectValue, setSelectValue] = React.useState("");
  const onChange = (event) => {
    const value = event.target.value;
    console.log(event.target.value);
    setSelectValue(value);
  };
  return (
    <MainLayout>
      <div className='transaction-container'>
      <h1 style={{color:"white",marginLeft:"30px",paddingTop:"10px"}}>Transactions</h1>
      <select  className="dropdown"style={{color:"black",marginLeft:"30px",paddingTop:"10px",textAlign:"center"}} onChange={onChange}>
        <option defaultValue disabled>
          Select Type
        </option>
        <option value="All">All</option>
        <option value="Withdraw">Withdraw</option>
        <option value="Deposit">Deposit</option>
      </select>
     
        {/* <ul className="tablelist">
        <li className="tli">Id</li>
        <li className="tli">From</li>
        <li className="tli">To</li>
        <li className="tli">Amt</li>
        <li className="tli">Type</li>
        <li className="tli">Link</li>
        </ul>
         */}
         
       {/* {projects.map(createTable)}  */}
       {selectValue==="All" ? projects.map(createTable): projects.filter(createTable => createTable.type.includes(selectValue)).map(createTable)}
      {/* {projects.filter(createTable => createTable.type.includes(selectValue)).map(createTable)} */}
    </div>
    </MainLayout>
    
  )
}

export default Transactions;