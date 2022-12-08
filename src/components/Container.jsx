import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import City from "./City";
import { useDispatch } from "react-redux";

const api = {
  key: "2e7bd66312f7d1abe77f1c287d6363fb",
  base: "https://api.openweathermap.org/data/2.5/",
};

const Container = () => {
  const inputRef = useRef();
  const [err, setErr] = useState("");
  const [data, setData] = useState({});
  const [info, setInfo] = useState({});
  const [inputValue, setInputValue] = useState("");
  const localData = JSON.parse(localStorage.getItem("data"));
  // console.log(localData);

  const url = `${api.base}weather?q=${inputValue}&appid=${api.key}&units=metric`;

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const clickHandler = () => {
    if (inputValue) {
      axios
        .get(url)
        .then((res) => {
          setData(res.data);
          localStorage.clear();
          setErr("");
          // console.log(res.data);
        })
        .catch((res) => {
          setData(res.response.data);
          setErr("Enter a valid City...");
          // console.log(res);
        });
    }
  };

  const detailHandler = () => {
    const url = `${api.base}onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${api.key}&units=metric`;
    if (data.coord) {
      axios
        .get(url)
        .then((res) => {
          setInfo(res.data);
          localStorage.setItem("data", JSON.stringify(res.data));
          localStorage.setItem("name", inputValue);
          // console.log(res.data);
        })
        .catch((res) => {
          setInfo(res.response.data);

          // console.log(res);
        });
    }
  };

  return (
    <div className="d-flex flex-column gap-3 justify-content-center align-items-center">
      <input
        type="text"
        ref={inputRef}
        value={inputValue}
        onChange={changeHandler}
        className="p-1 fs-5"
      />
      {setErr && (
        <span className="text-danger fw-bold bg-light px-2 rounded">{err}</span>
      )}
      <button className="btn btn-warning px-4" onClick={clickHandler}>
        City Location
      </button>
      {data && data.coord && (
        <div className="d-flex justify-content-center rounded gap-3">
          <span className="span fs-5 bg-light">Lat : {data.coord.lat}</span>
          <span className="span fs-5 bg-light">Lon : {data.coord.lon}</span>
        </div>
      )}
      <button onClick={detailHandler} className="btn btn-success">
        Weather details
      </button>
      <h2>
        {data.name ||
          (localStorage.getItem("name") &&
            localStorage.getItem("name").toUpperCase())}
      </h2>
      {localData
        ? localData.daily.map((day, index) => (
            <City
              key={day.dt}
              id={index}
              name={inputValue ? inputValue : localStorage.getItem("name")}
              temp={day.temp.day}
              description={day.weather[0].description}
              icon={day.weather[0].icon}
              date={day.dt * 1000 - localData.timezone_offset * 1000}
            />
          ))
        : null}
    </div>
  );
};

export default Container;
