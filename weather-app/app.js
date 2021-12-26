const getTemperature = require('./utils/temperature');


// request({ url: url, json: true }, (error, response) => {
//   const data = response.body.current;
//   console.log(`${data.weather_descriptions[0]}. It is ${data.temperature} degrees temperature but feels like ${data.feelslike}!`);
// })


const cities = ['Narsipatnam','Hyderabad','Pune','Kashmir'];
cities.forEach(city => {
  getTemperature(city, (error, response) => {
    console.log(`Data:${city} ` + response);
  })
})


