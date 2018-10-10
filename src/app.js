const dom = new DOM("#root");

dom.render(`
    ${Location(DATA.location)}
    ${Forecasts(DATA.forecasts)}
`);