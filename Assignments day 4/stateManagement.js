import {useState} from "react";
import './tableDesign.css';
import WeatherCard from "./WeatherCard";

function WeatherDetails(){
const [weatherData, setWeatherData] = useState([
    { index:1, day: "Monday", condition: "Sunny", temperature: "32°C" },
    { index:2, day: "Tuesday", condition: "Rainy", temperature: "26°C" },
    { index:3, day: "Wednesday", condition: "Cold", temperature: "16°C" },
    { index:4, day: "Thrusday", condition: "Rainy", temperature: "25°C" },
    { index:5, day: "Friday", condition: "Sunny", temperature: "34°C" },
    { index:6, day: "Satirday", condition: "Cold", temperature: "18°C" },
    { index:7, day: "Sunday", condition: "Sunny", temperature: "33°C" },
    
    ]);

return (
    <div>
        <h1>Weather Details</h1>
        <table className="center">
            <thead>
            <tr className="trStyle">
                <th>Day</th>
                <th>Condition</th>
                <th>temperature</th>
            </tr></thead>
            <tbody>
            {weatherData.map( (weather,index) => (
                <WeatherCard
                key={index}
                day={weather.day}
                condition={weather.condition}
                temperature={weather.temperature}
                />
                
                
                // <tr className="tr1Style" key={weather.index}>
                //     <td className="tdStyle">{weather.day}</td>
                //     <td className="tdStyle">{weather.condition}</td>
                //     <td className="tdStyle">{weather.temperature}</td>
                // </tr>
            ))}</tbody>
        </table>
    </div>
    
);

}

export default WeatherDetails;