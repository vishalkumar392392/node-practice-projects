const request = require('request');

const getTemperature = (address, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=d54b2afb6724e096e29e685d38ea16a6&query=${address}&units=m`;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback(error, undefined)
    }
    const data = response.body.current;
    callback(undefined, `${data.weather_descriptions[0]}. It is ${data.temperature} degrees temperature but feels like ${data.feelslike}!`)
  })
}

module.exports = getTemperature;