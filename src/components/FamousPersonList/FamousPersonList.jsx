import React, { useState, useEffect } from "react";
import axios from "axios";

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
      {famousPeopleArray.map((person) => {
        return (
          <div key={person.id}>{person.name}</div>
        );
      })}
    </ul>
  );
}

export default FamousPersonList