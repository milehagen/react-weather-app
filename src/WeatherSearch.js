import './WeatherSearch.css';
import React from "react";

export default function WeatherSearch(){
    return <div>
        <h1>Weather App</h1>
        <form className="WeatherSearch-form"> 
        <input type="search"
        autoFocus="on"
        placeholder="Enter a city..."/>
    <input type="submit"
    value="Search"/>

    </form>
    </div>
}
