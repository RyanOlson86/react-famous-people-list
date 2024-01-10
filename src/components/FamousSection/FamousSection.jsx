import React, { useState, useEffect } from "react";
import "./FamousSection.css";
import FamousPersonForm from "../FamousPersonForm/FamousPersonForm";
import FamousPersonList from "../FamousPersonList/FamousPersonList";
import axios from "axios";

function FamousSection() {
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
      })};

  return (
    <section className="new-person-section">
      <FamousPersonForm fetchPeople={fetchPeople}/>
      <FamousPersonList famousPeopleArray={famousPeopleArray} />
    </section>
  );
}

export default FamousSection;