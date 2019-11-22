import React from "react";
import {
  Navbar,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "reactstrap";
import { Link } from 'react-router-dom';

import brandLogo from "../images/LP-logo.png";
import evansImage from "../images/evans.jpg";
import SearchForm from "./SearchForm";

const DashboardNav = ({ handleChange, onLogOut }) => {
  return (
    <div>
      <Navbar color="white" light expand="md">
        <Nav className="logoCon">
          <img src={brandLogo} alt="brand logo" className="logo" />
        </Nav>
        <Nav>
          <SearchForm handleChange={handleChange} />
        </Nav>
        <Nav className="ml-auto navCon" navbar>
          <NavItem>
            <Link to="/dashboard/add-park">
              <Button color="success" size="sm" className="addParkButton">Add A Park</Button>{' '}
            </Link> 
          </NavItem>

          <UncontrolledDropdown setActiveFromChild>
            <DropdownToggle tag="a" className="nav-link" caret>
              <span className="charles">Charles Vane</span>
              <img src={evansImage} alt="profile" className="evansDrop" />
            </DropdownToggle>
            <DropdownMenu className="dropMenu">
              <DropdownItem tag="a" href="/blah" active>
                View Profile
              </DropdownItem>
              <DropdownItem tag="a" href="/blah">
                Parks Visited
              </DropdownItem>
              <DropdownItem tag="a" href="/blah">
                Parks Added
              </DropdownItem>
              <DropdownItem tag="a" href="/blah">
                Account Settings
              </DropdownItem>
              <DropdownItem className="navLogout" onClick={onLogOut}>
                Logout
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>
    </div>
  );
};

export default DashboardNav;
