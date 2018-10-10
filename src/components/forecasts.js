function Forecasts(forecasts){
    return `
        <div id = "forecasts">
            ${forecasts.map(Forecast).join("")}
        </div>
    
    `;
}

function Forecast(forecast) {
    return `
        <div class = "forecast">
            <h4>${forecast.date}</h4>
            <p>${forecast.icon}</p>
            <p>${forecast.description}</p>
            <p>High of: ${forecast.temperature.max} &deg;C</p>
            <p>Low of: ${forecast.temperature.min} &deg;C</p>
        </div>
    
    `;
}