import React, { useState, useEffect } from "react";
import axios from "axios";
import FamousPerson from "../FamousPerson/FamousPerson";

function FamousPersonList({famousPeopleArray}) {
  return (
    <ul>
        {famousPeopleArray.map(person => {
            return <FamousPerson name={person.name} role={person.role} key={person.id}/>
        })}
    </ul>
  );
}

export default FamousPersonList
