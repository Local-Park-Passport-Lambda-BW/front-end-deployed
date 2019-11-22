import React from "react";
import styled from "styled-components";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

// Styling;
const StyledDiv = styled.div`
  width: 38.2%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .country {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background-color: #e9e9e9;
    color: #5a5a5a;
    padding: 3px;
    font-size: 0.8rem;
    text-align: center;
    font-family: inherit;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3);
  }
  .region {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: #e9e9e9;
    color: #5a5a5a;
    font-size: 0.8rem;
    padding: 2px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3);
  }
`;
const CountryFinder = props => {
  return (
    <StyledDiv>
      <CountryDropdown
        className="country"
        value={props.country}
        onChange={val => props.selectCountry(val)}
      />
      <RegionDropdown
        className="region"
        country={props.country}
        value={props.region}
        onChange={val => props.selectRegion(val)}
      />
    </StyledDiv>
  );
};
export default CountryFinder;
