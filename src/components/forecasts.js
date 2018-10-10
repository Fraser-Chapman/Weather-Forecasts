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
            <h4>${moment(forecast.date).format("ddd")}</h4>
            <p>
                <i class = "wi wi-owm-${forecast.icon}"></i>
            </p>
            <p>${forecast.description}</p>
            <p>High of: ${forecast.temperature.max} &deg;C</p>
            <p>Low of: ${forecast.temperature.min} &deg;C</p>
        </div>
    
    `;
}