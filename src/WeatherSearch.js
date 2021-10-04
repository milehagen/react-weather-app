import './WeatherSearch.css';
import React, {useState} from "react";

export default function WeatherSearch(){

const [city, setCity]=useState("");

function updateCity(event){
    setCity(event.target.value);
    console.log(event.target.value);
}

    return <div>
        <h1>Weather App</h1>
        <div className="row">
            <div className="col-6">
  <div className="input-group mb-3">
  <input type="text" class="form-control" placeholder="Enter a city..." aria-label="City name" aria-describedby="button-addon2" onchange={updateCity}/>
  <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
</div>
</div>
    </div>
    </div>
}

