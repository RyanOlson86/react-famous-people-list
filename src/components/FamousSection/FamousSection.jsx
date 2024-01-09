import React, { useState, useEffect } from "react";
import "./FamousSection.css";
import FamousPersonForm from "../FamousPersonForm/FamousPersonForm";
import FamousPersonList from "../FamousPersonList/FamousPersonList";


function FamousSection() {


  return (
    <section className="new-person-section">
      <FamousPersonForm />
      <FamousPersonList />
    </section>
  );
}

export default FamousSection;
