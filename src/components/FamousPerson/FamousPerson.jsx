import React, { useState, useEffect } from "react";

function FamousPerson(props) {
    return (
      <p>
        {props.name} is famous for "{props.role}".
      </p>
    );
  }
  
  export default FamousPerson