import React, { useState, useEffect } from "react";
import axios from "axios";

function FamousPersonForm() {
  let [famousPersonName, setPersonName] = useState("");
  let [famousPersonRole, setPersonRole] = useState("");

  const addPerson = (evt) => {
    evt.preventDefault();

    axios.post('/api/people',{
      name: famousPersonName,
      role: famousPersonRole
    })
    .then(response => {
      setPersonName('');
      setPersonRole('');
    })
    .catch((error) => {
      console.log('Error in POST', error)
    })
  };

  return (
    <form onSubmit={addPerson}>
      <label htmlFor="name-input">Name:</label>
      <input id="name-input" onChange={(e) => setPersonName(e.target.value)} value={famousPersonName} />
      <label htmlFor="role-input">Famous for:</label>
      <input id="role-input" onChange={(e) => setPersonRole(e.target.value)} value={famousPersonRole} />
      <button type="submit" onClick={addPerson}>
        Done
      </button>
    </form>
  );
}

export default FamousPersonForm;
