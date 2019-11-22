import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import axios from 'axios';

import LandingNav from "./LandingNav";
import Main from "./Main";
import landingBackground from '../images/landscape.jpg'
import HomeParkList from './HomeParkList'

const HeaderStyle = styled.header`
  /* z-index:9999;
  filter: blur(0px);
  -webkit-filter: blur(0px);
    -moz-filter: blur(0px);
    -o-filter: blur(0px); */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  flex-grow: 1;
`;

const FooterStyle = styled.footer`
  background: rgba(255, 255, 255, 0.5);
  width: 100vw;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin: 0;
  }
`;

const LandingPage = () => {

  const [homeSearch, setHomeSearch] = useState("");
  const [allParks, setAllParks] = useState([])

  useEffect(() => {
    axios
      .get("https://park-pp.herokuapp.com/parks")
      .then(res => {
        setAllParks(res.data);
      })
      .catch(error => console.log(error.message))
  }, [])

  const handleChange = evt => {
    setHomeSearch(evt.target.value);
  }

  const filteredHomeParks = allParks.filter(char => char.name.toLowerCase().includes(homeSearch.toLowerCase()))

  

  



  // (<HomeParkList filteredHomeParks={filteredHomeParks} />)

  return (
    <Container>
      <Content className="bg-image"
        style={{
          background: `url(${landingBackground})`
        }}>
        <HeaderStyle>
          <LandingNav />
        </HeaderStyle>

        <Main handleChange={handleChange} homeSearch={homeSearch}/>
      </Content>
      
      <div id="home-park-list">
        <HomeParkList filteredHomeParks={filteredHomeParks} />
      </div>

      <FooterStyle>
        <p>Copyright 2019. Local Park Passport</p>
      </FooterStyle>
    </Container>
  );
};

export default LandingPage;
