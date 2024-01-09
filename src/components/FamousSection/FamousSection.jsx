import React, { useState, useEffect } from "react";
import "./FamousSection.css";
import axios from "axios";

function FamousSection() {
  let [famousPersonName, setPersonName] = useState("");
  let [famousPersonRole, setPersonRole] = useState("");
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

  const addPerson = (evt) => {
    evt.preventDefault();

    axios.post('/api/people',{
      name: famousPersonName,
      role: famousPersonRole
    })
    .then(response => {
      fetchPeople();
      setPersonName('');
      setPersonRole('');
    })
    .catch((error) => {
      console.log('Error in POST', error)
    })
  };

  return (
    <section className="new-person-section">
      <form onSubmit={addPerson}>
        <label htmlFor="name-input">Name:</label>
        <input id="name-input" onChange={(e) => setPersonName(e.target.value)} value={famousPersonName} />
        <label htmlFor="role-input">Famous for:</label>
        <input id="role-input" onChange={(e) => setPersonRole(e.target.value)} value={famousPersonRole}/>
        <button type="submit" onClick={addPerson}>Done</button>
      </form>
      <p>
        {famousPeopleArray.map(person => {
          return <li key={person.id}>{person.name} is famous for "{person.role}".</li>
        })}
      </p>
      <ul>{/* TODO: Render the list of famous people */}</ul>
    </section>
  );
}

export default FamousSection;
