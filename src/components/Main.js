import React from 'react'
import { Input, Button } from 'reactstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const MainCon = styled.div`
  margin: 5em auto 0 auto;
  max-width: 700px;

  h1 {
  color: #fff;
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 1.5em;
  }
`;


const SearchCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .navSearch {
    width: 550px;
    height: 50px;
    font-size: 1.2em;
    margin-right: 0.8em;
  }

  button {
    width: 100px;
    height: 50px;
  }
`;

const Main = ({ handleChange, homeSearch }) => {

  const handleClick = evt => {
    evt.preventDefault();
    const homeParkList = document.querySelector("#home-park-list")

    homeSearch < 1 ? console.log("Please enter a search input!") : homeParkList.style.display = "unset";
    
    console.log(homeParkList)  
  }

  return (
    <MainCon>
      <h1>Your best neighborhood parks are closer than you think.</h1>

      <SearchCon>
        <Input
          className="navSearch"
          type="search"
          name="search"
          placeholder="Find your favorite park"
          onChange={handleChange}
        />

        <Link to="/#home-park-list">
          <Button 
          className="home-search-button" 
          color="primary"
          onClick={(evt) => handleClick(evt)}>
            Search
          </Button>
        </Link>

      </SearchCon>

    </MainCon>
  )
}

export default Main
