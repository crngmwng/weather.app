export default async function fetchTownsApi() {
    const response = await fetch('http://www.mocky.io/v2/5da1af3f2f00005200f41861');
    const towns = await response.json();
    return towns
}
