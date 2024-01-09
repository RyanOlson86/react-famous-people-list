import React, { useState, useEffect } from "react";
import axios from "axios";
import FamousPerson from "../FamousPerson/FamousPerson";

function FamousPersonList() {
  let [famousPeopleArray, setPeopleArray] = useState([]);

  useEffect(() => {
    fetchPeople();
  }, []);

  const fetchPeople = () => {
    axios
      .get("/api/people")
      .then((response) => {
        setPeopleArray(response.data);
      })
      .catch((error) => {
        console.log("Error in GET", error);
      });
  };

  return (
    <ul>
        {famousPeopleArray.map(person => {
            return <FamousPerson name={person.name} role={person.role} key={person.id}/>
        })}
    </ul>
  );
}

export default FamousPersonList
