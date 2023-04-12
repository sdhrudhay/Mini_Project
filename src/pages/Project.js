import React from 'react'
import { Link } from "react-router-dom";
import MainLayout from '../mainlayout/MainLayout';
import { AiOutlineSearch } from "react-icons/ai";
import Card from "../components/Card"
import project from "../ProjectContract"
import TextField from "@mui/material/TextField";
import FlipCard from "../components/FlipCard";
import { CiSearch } from "react-icons/ci";
function Project() {
  function projects(entry){
    return(
      <FlipCard
      key={entry.id}
      name={entry.name}
      img={entry.img}
      content={entry.content}
      address={entry.address}
      fund={entry.fund}
      balance={entry.balance}
      
      />
    );
  }
  const [searchWord, setSearchWord] = React.useState('');
  // const [inputText, setInputText] = React.useState("");
//   let inputHandler = (e) => {
//     //convert input text to lower case
//     var lowerCase = e.target.value.toLowerCase();
//     setInputText(lowerCase);
//   };
//   const filteredData = project.filter((el) => {
//     //if no input the return the original
//     if (inputText === '') {
//         return el;
//     }
//     //return the item which contains the user input
//     else {
//         return el.text.toLowerCase().includes(inputText)
//     }
// })
  return (
    <MainLayout>
      <div>
        {/* <input type="text" placeholder={ AiOutlineSearch }></input>
        <button type="submit">search</button> */}
      
        {/* {project.map(projects)} */}
        <div className="main">
      <div className="search">
        <input className='searchbox'
          //id="outlined-basic"
          //onChange={inputHandler}
          type="text"
          variant="outlined"
          value={searchWord}
          onChange={e => setSearchWord(e.target.value)}
          //fullWidth
          placeholder="&#xF002; Search"
          
        />
      </div>
      
      {/* {project.map(projects)} */}
      {/* {filteredData.map(inputText)} */}
      {/* movieinfos.filter(movie => movie.title.includes(searchWord)).map(movie => return <Movie_card key={movie.Title} data={movie} />) */}
      <div className="prcard">
      <p className='prcontent'>Project List</p><br />
      {project.filter(projects => projects.name.includes(searchWord)).map(projects)}
      </div>
    </div>
        
    </div>
    </MainLayout>
    
  )
}

export default Project