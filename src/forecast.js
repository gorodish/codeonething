const key = 'HQcWlQ8GJP6oyD3P5EA4mB413YYAgM7Q';

// get weather information
const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

// get city information
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';

    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};

getCity('glasgow')
    .then(data => {
        return getWeather(data.Key)
    }).then(data => {
        console.log(data);
    }).catch(data => err => console.log(err));

    getWeather("328226");