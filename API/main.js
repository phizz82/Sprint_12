const API_KEY = "cdde77ac8d7a03ac7c0cb52a025705c3";


const request = url => {
    return new Promise((resolve, reject) => {
        fetch(url).then(response => {
            if(response.ok) {
                resolve(response.json());
            } else {
                reject({
                    error: 500
                });
            }
        });
    });
};

const WeatherInfo = async ( element, Weather ) => {
  try {
      let city = Weather.querySelector('#city').value;
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
      let response = await request(url);
      element.innerText = JSON.stringify(response);
    } catch(err) {
      console.log(err);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    let Weather = document.querySelector('#weather');
    Weather.addEventListener('submit', event => {
        event.preventDefault();
        WeatherInfo(document.querySelector('#results'), Weather);
    }, false);
});