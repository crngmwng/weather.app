import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as R from 'ramda'


import Layout from '../Layout'

import {fetchHourlyWeather} from '../../actions' 


class HourlyWeather extends Component{
    componentDidMount() {
        const name = this.props.match.params.name
        this.props.fetchHourlyWeather(name)
        

    }
    
    renderWeather(i, index) {
        const temp = Math.round(i.temp);
        const app_temp = Math.round(i.app_temp)
        const wind_spd = Math.round(i.wind_spd);
        return(
                <tr key={index}>
                    <td>{R.takeLast(2, i.datetime)}</td>
                    <td>{temp} °C</td>
                    <td>{app_temp} °C</td>
                    <td><img src={`https://www.weatherbit.io/static/img/icons/${i.weather.icon}.png`} alt="Weather icon" height="75" width="75" ></img>{i.clouds} % </td>
                    <td>{wind_spd} m/s</td>
                    <td>{i.wind_cdir}</td>
                    <td>{i.pres}</td>
                    <td></td>
                </tr>
               
        )
    }

    render() {
        const {data} = this.props;
        const weather = Object.values(data);
        const town_name = this.props.match.params.name;
        return(
            <Layout>
                <h4>Hourly weather in {town_name}</h4>
                <table className="table table-hover ">
                    <thead>
                        <tr>
                            <th>Time</th> 
                            <th>Tempriture</th>
                            <th>Feels Like</th>
                            <th>Clouds</th>
                            <th>Wind speed</th>
                            <th>Wind direction</th>
                            <th>Pressure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {weather.map((i, index )=> this.renderWeather(i, index))}
                    </tbody>
                </table>
            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.hourly
})
  
const mapDispatchToProps = {
    fetchHourlyWeather
}


export default connect(mapStateToProps, mapDispatchToProps)(HourlyWeather);