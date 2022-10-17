import React from "react";

const Weather = ({ weather }) => {
    if (!weather) {
        return <p>You need to allow location access...</p>;
    }
    return (
        <div>
            <header>
                <h3>
                    Location: {weather.name} / {weather.sys.country}
                </h3>
                <p>
                    {weather.coord.lat}, {weather.coord.lon}
                </p>
            </header>
            <hr />
            <div className="container">
                <div>
                    <h4>
                        Description: {weather.weather.map((data) => data.main).join(", ")}
                    </h4>
                    <h4>Temperature: {weather.main.temp}°C</h4>
                    <p>Feels Like: {weather.main.feels_like}°C</p>
                    <p>Maximum: {weather.main.temp_max}°C</p>
                    <p>Minimum: {weather.main.temp_min}°C</p>
                </div>
                <div>
                    <p>Humidity: {weather.main.humidity}</p>
                    <p>Pressure: {weather.main.pressure}</p>
                    <p>Sea Level: {weather.main.sea_level}</p>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <code>Last Update: {new Date(weather.dt * 1000).toLocaleString()}</code>
        </div>
    );
};

export default Weather;
