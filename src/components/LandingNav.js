import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Nav, NavItem, Button } from 'reactstrap';

import brandLogo from '../images/LP-logo.png'

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  background: white;
  padding: 1em;
  align-items: center;
  padding-top: 1em;

  a {
    color: #3e3e3e;
  }

  .rightNav {
    display: flex;
    align-items: center;
    margin-right: 2em;

    a {
      padding-left: 2em;
    }
  }
`;

const LandingNav = () => {

  return (
    <StyledDiv>
      <Nav className="logoCon">
        <Link to={`/`}>
          <img src={brandLogo} alt="brand logo" className="logo" />
        </Link>
        <p>Local Park Passport</p>
      </Nav>

      <Nav className="rightNav">
        <NavItem>
          <Link to={`/Login`}>Sign in</Link>
        </NavItem>
        <NavItem>
          <Link to={`/register`}>
            <Button color="success">Sign up</Button>
          </Link>
        </NavItem>
      </Nav>
    </StyledDiv>
  );
};

export default LandingNav;
