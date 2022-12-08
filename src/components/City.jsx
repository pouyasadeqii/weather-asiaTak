import React from "react";
import { Link } from "react-router-dom";

const City = ({ temp, date, icon, id, name }) => {
  const newDate = new Date(date).toString().split(" ");
  const day = `${newDate[0]} ${newDate[1]} ${newDate[2]}`;
  const iconAddress = `http://openweathermap.org/img/wn/${icon}.png`;
  return (
    <div className="d-flex w-100 border rounded p-3  shadow gap-3 justify-content-evenly align-items-center">
      <Link to={`/daydetails/${id}&${name}`}>
        <p className="mb-0 date">{day}</p>
      </Link>
      <span className="temp fw-bold">{temp} C°</span>
      <img src={iconAddress} alt="icon" />
    </div>
  );
};

export default City;
