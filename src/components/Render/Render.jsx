import { useState, useEffect } from "react";
import axios from "axios";

function renderPeople() {
  let newData = [];
  axios
    .get("/api/people")
    .then((response) => {
      console.log(response);
      newData = response.data;
      return newData
    })
    .catch((error) => {
      console.log("Error in GET", error);
    });
}
export default renderPeople;
