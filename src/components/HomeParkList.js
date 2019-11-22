import React from "react";
import styled from "styled-components";

import ParkCard from "./park/ParkCard";

// Styles
const ParkListCon = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const HomeParkList = ({ filteredHomeParks }) => {

  return (
    <div>

      <ParkListCon>
        {
          filteredHomeParks.map(park => (
            <ParkCard key={park.id} park={park} />
          ))
        }
      </ParkListCon>
    </div>
  );
};

export default HomeParkList;
