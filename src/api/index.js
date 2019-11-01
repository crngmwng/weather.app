export default async function fetchTownsApi() {
    const response = await fetch('http://www.mocky.io/v2/5dbbf0f5310000dea54c0d8d');
    return  await response.json()
    
}

// const fetchTownsApi = () => {
// fetch('https://restcountries.eu/rest/v1/all')
//     .then(response => response.json())
// }