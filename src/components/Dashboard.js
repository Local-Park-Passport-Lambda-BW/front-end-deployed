import React, { useState } from "react";

import DashboardNav from "./DashboardNav";
import ParkForm from "./park/ParkForm";
import ParksList from "./park/ParksList";
import { useLocalStorage } from "./hooks/useLocalStorage";

export default function Dashboard(props) {
  const [parkList, setParkList] = useState([
    {
      id: "",
      name: "",
      description: ""
    }
  ]);
  const [searchValue, setSearchValue] = useLocalStorage("");

  const handleChange = evt => {
    setSearchValue(evt.target.value);
  };

  const addNewPark = park => {
    const newPark = {
      ...park,
      id: Date.now()
    };

    setParkList([...parkList, newPark]);
  };

  const filteredParks = parkList.filter(char =>
    char.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const onLogOut = () => {
    localStorage.clear();
    props.history.push("/login");
  };

  return (
    <div className="Parks">
      <DashboardNav handleChange={handleChange} onLogOut={onLogOut} />
      <ParkForm addNewPark={addNewPark} />
      <ParksList
        parkList={filteredParks}
        setParkList={setParkList}
        history={props.history}
      />

      {/* <Route exact path="/dashboard/add-park" component={ParkForm} /> */}
      {/* we are going to pass a function down as a prop */}
      {/* <Route exact path="/dashboard/add-a-park" render={ props => {
        return <ParkForm {...props} addNewPark={addNewPark} />
      }} /> */}
    </div>
  );
}
