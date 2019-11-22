import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import ParkCard from "./ParkCard";

// Styles
const ParkListCon = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const ParksList = ({ parkList, setParkList, history }) => {
  useEffect(() => {
    axios
      .get("http://park-pp.herokuapp.com/parks")
      // http://localhost:3300/parks
      .then(res => setParkList(res.data))
      .catch(error => console.log(error.message));
  }, []);

  return (
    <div>
      <ParkListCon>
        {parkList.map(park => (
          <ParkCard
            key={park.id}
            history={history}
            park={park}
            parkList={parkList}
            setParkList={setParkList}
          />
        ))}
      </ParkListCon>
    </div>
  );
};

export default ParksList;
