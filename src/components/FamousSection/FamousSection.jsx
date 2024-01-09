import React, { useState, useEffect } from "react";
import "./FamousSection.css";
import axios from "axios";
import FamousPersonForm from "../FamousPersonForm/FamousPersonForm";
import FamousPersonList from "../FamousPersonList/FamousPersonList";

function FamousSection() {
  // let [famousPersonName, setPersonName] = useState("");
  // let [famousPersonRole, setPersonRole] = useState("");
  let [famousPeopleArray, setPeopleArray] = useState([]);

  useEffect(() => {
    fetchPeople();
  }, []);

  const fetchPeople = () => {
    axios.get('/api/people')
    .then((response) => {
      setPeopleArray(response.data)
    })
    .catch((error) => {
      console.log('Error in GET', error)
    })
  };

  return (
    <section className="new-person-section">
      <FamousPersonForm />
      <FamousPersonList />
      <ul>{/* TODO: Render the list of famous people */}</ul>
    </section>
  );
}

export default FamousSection;
