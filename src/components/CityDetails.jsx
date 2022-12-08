import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CityDetails = () => {
  const totalData = useSelector((state) => state.days.data.payload);
  const localData = JSON.parse(localStorage.getItem("data"));
  const data =localData;
  const param = useParams();
  const day = data.daily[param.id].dt * 1000 - data.timezone_offset * 1000;
  const newDate = new Date(day).toString().split(" ");
  const date = `${newDate[0]} ${newDate[1]} ${newDate[2]}`;
  const dayData = data.daily[param.id];
  const city = param.name;
  const icon = data.daily[param.id].weather[0].icon;
  const description = data.daily[param.id].weather[0].description;
  const iconAddress = `http://openweathermap.org/img/wn/${icon}.png`;
  const humidity = dayData.humidity;
  const windSpeed = dayData.wind_speed;
  const minTemp = dayData.temp.min;
  const maxTemp = dayData.temp.max;
  const dayTemp = dayData.temp.day;
  const nightTemp = dayData.temp.night;

  //   console.log(param);
  //   console.log(data);
  //   console.log(dayData);
  //   console.log(city);
  return (
    <div>
      <h1>{date}</h1>
      <div className="d-flex flex-column w-100 border rounded p-3 gap-3 justify-content-evenly align-items-center">
        <h2>{city.toUpperCase()}</h2>
        <div className="d-flex w-100 border rounded p-3  shadow gap-3 justify-content-center align-items-center">
          <span className="fw-bold fs-5">{description}</span>
          <img src={iconAddress} alt="icon" />
        </div>
        <div className="d-flex w-100 border rounded p-3  shadow gap-3 justify-content-evenly align-items-center">
          <p>
            Day Temp :<span className="fw-bold fs-5 cont">{dayTemp} °C</span>
          </p>
          <p>
            Night Temp :
            <span className="fw-bold fs-5 cont">{nightTemp} °C</span>
          </p>
        </div>
        <div className="d-flex w-100 border rounded p-3  shadow gap-3 justify-content-evenly align-items-center">
          <p>
            Max Temp :<span className="fw-bold fs-5 cont">{maxTemp} °C</span>
          </p>
          <p>
            Min Temp :<span className="fw-bold fs-5 cont">{minTemp} °C</span>
          </p>
        </div>
        <div className="d-flex w-100 border rounded p-3  shadow gap-3 justify-content-evenly align-items-center">
          <p>
            Wind Speed :
            <span className="fw-bold fs-5 cont">{windSpeed} MPH</span>
          </p>
          <p>
            Humidity :<span className="fw-bold fs-5 cont">{humidity}%</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CityDetails;
