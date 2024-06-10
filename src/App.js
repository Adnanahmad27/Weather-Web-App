import React,{ useState } from 'react';
import './App.css';
import {Search, MapPin, Wind , Droplet,ToggleLeft} from 'react-feather';
import dateFormat from 'dateformat';
import Axios from 'axios';

const apiKey = '538a99868a3f41554ad31ceae0530231';

function App() {

  const [city,setCity] = useState("");
  const [weather,setWeather] = useState({});
  const [mode,setMode] = useState('dark');
  const [message,setMessage] = useState("Know Weather of your city")
  const getWeatherbyCity = async () => {
    try{
      const response = await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`,
      );
      setWeather(response.data);
    }catch(err){
      setWeather({});
      setCity("");
      setMessage("Please Enter Correct Place!");
    }
    
  };
  const toggleMode = () => {
    setMode(prev => prev === "light" ? "dark" : "light");
  }
  const themeClassName = mode === 'light' ? 'light' : '';
  const renderDate = () => {
    let now = new Date();
    return dateFormat(now, "dddd, mmmm dS, h:MM TT");
  }

  return (
    <div className={`main ${themeClassName}`}>
    <div className={`app ${themeClassName}`}>
      
      <button className={`mode ${themeClassName}`} onClick={()=>toggleMode()}>
          <ToggleLeft></ToggleLeft>
      </button>
      <h1 >Weather App</h1>
      
      <div className="input-wrapper">
        <input type="text" value={city} onChange={(e) => {setCity(e.target.value)}} 
        placeholder='Enter City Name!' />
        <button className={themeClassName} onClick={()=>getWeatherbyCity()}>
          <Search></Search>
        </button>
      </div>

      {weather && weather.weather && 
      <div className="content">
        
        <div className="location d-flex">
          <MapPin></MapPin>
          <h2>{weather.name} <span>, {weather.sys.country}</span></h2>
        </div>
        <p className="datetext">{renderDate()}</p>

        <div className="weatherdesc d-flex flex-c">
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
          <h3>{weather.weather[0].description}</h3>
        </div>

        <div className="tempstats d-flex flex-c">
          <h1>{Math.floor(weather.main.temp)} <span>&deg;C</span></h1>
          <h3>Feels Like {weather.main.feels_like} <span>&deg;C</span></h3>
        </div>
        <div className="humiditystats d-flex">
          <Droplet></Droplet>
          <h3>Humidity {weather.main.humidity}</h3>
        </div>
        <div className="windstats d-flex">
          <Wind></Wind>
          <h3>Wind is {weather.wind.speed} Knots in {weather.wind.deg}&deg;</h3>
        </div>

      </div>
      }
      {!weather.weather && <div className="content">
        <h4>{message}</h4>
      </div>}
    </div>
    </div>
  );
}

export default App;
