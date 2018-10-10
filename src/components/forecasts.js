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
        </div>
    
    `;
}