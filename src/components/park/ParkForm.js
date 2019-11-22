import React, { useState } from "react";
import styled from "styled-components";
import CountryFinder from "./countryFinder";
// import axios from "axios";
import GetToken from "../GetToken";

// Styling;
const StyledDiv = styled.div`
  width: 98%;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 0.6em;
  /* justify-content: space-around; */
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3);

  .park-form {
    padding: 30px;
    width: 80%;
    margin: 5px auto;
    display: flex;
    flex-direction: column;
    border-radius: 4px;

    .parks-button {
      margin-top: 30px;
      background-color: green;
      border-radius: 5px;
      width: 100px;
      color: white;
      box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3);
    }
    .label {
      text-align: center;
      background-color: #e9e9e9;
      border-radius: 5px;
      box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3);
    }
  }
`;

export default function ParkForm(props) {
  const [park, setPark] = useState({
    name: "",
    description: "",
    country: "",
    region: ""
  });

  const handleChanges = e => {
    setPark({ ...park, [e.target.name]: e.target.value });
  };

  const selectCountry = val => {
    setPark({ ...park, country: val });
  };
  const selectRegion = val => {
    setPark({ ...park, region: val });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewPark(park);

    // substitutes 'city' for 'region' for backend congruity
    const replacements = { region: "city" };
    let replacedItems = Object.keys(park).map(key => {
      const newKey = replacements[key] || key;
      return { [newKey]: park[key] };
    });
    const parkModified = replacedItems.reduce((a, b) =>
      Object.assign({}, a, b)
    );

    GetToken()
      .post("https://park-pp.herokuapp.com/parks", parkModified)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <StyledDiv>
      <form onSubmit={submitForm} className="park-form">
        <label htmlFor="name" className="parks-label"></label>
        <input
          className="parks-input label"
          name="name"
          onChange={handleChanges}
          value={park.name}
          placeholder="Park Name"
        />
        <label htmlFor="description" className="parks-label "></label>
        <textarea
          className="parks-textarea label"
          name="description"
          onChange={handleChanges}
          value={park.description}
          placeholder="Description"
        />
        <CountryFinder
          country={park.country}
          region={park.region}
          selectCountry={selectCountry}
          selectRegion={selectRegion}
        />

        <div>
          <button className="parks-button">Add a park</button>{" "}
        </div>
      </form>
    </StyledDiv>
  );
}
