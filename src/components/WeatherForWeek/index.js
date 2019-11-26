import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as R from 'ramda'


import Layout from '../Layout'
import'./index.css'

import {fetchWeatherForWeek} from '../../actions' 


class WeatherForWeek extends Component{
    componentDidMount() {
        const name = this.props.match.params.name
        this.props.fetchWeatherForWeek(name)
        

    }

    renderComponentHeader(date) {
        return(
            <tr>
                {date.map((i, index )=> <th  key={index}>{i}</th>)}
            </tr>
               
        )
    }

    render() {
        const {date, temp, weather, wind_spd, wind_cdir, precip, pop, pres} = this.props;
        const town_name = this.props.match.params.name;
        console.log(weather)
        return(
            <Layout>
                <h4>Weather for week in {town_name}</h4>

                <div className='week-info'>
                    <h5>Temperature</h5>
                    <table className="table table-hover ">
                        <thead>
                            {this.renderComponentHeader(date)}
                                
                        </thead>
                        <tbody>
                            <tr>
                                {temp.map((i, index) => <td key={index}>{Math.round(i)}°C</td>)}
                            </tr>
                        <tr> 
                            {/* {weather.map((i, index) => <td key={index}> */}
                            {/* <img src={`https://www.weatherbit.io/static/img/icons/${i.icon}.png`} alt="Weather icon" height="75" width="75" ></img></td>)}  */}
                        </tr> 
                        </tbody>
                    </table>
                </div>
                
                <div className='week-info'>
                <h5>Wind m/s</h5>
                    <table className="table table-hover ">
                        <thead>
                            {this.renderComponentHeader(date)}
                                
                        </thead>
                        <tbody>
                            <tr>
                                {wind_spd.map((i, index) => <td key={index}>{Math.round(i)} </td>)}
                                
                            </tr>
                            <tr>
                                {wind_cdir.map((i, index) => <td key={index}>{i}</td>)}
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='week-info'>
                <h5>Precipation mm</h5>
                    <table className="table table-hover ">
                        <thead>
                            {this.renderComponentHeader(date)}
                                
                        </thead>
                        <tbody>
                            <tr>
                               {pop.map((i, index) => <td key={index}>{Math.round(i)}%</td>)}
                            </tr>
                            <tr>
                               {precip.map((i, index) => <td key={index}>{Math.round(i)}</td>)}
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='week-info'>
                <h5>Pressure mb</h5>
                    <table className="table table-hover ">
                        <thead>
                            {this.renderComponentHeader(date)}
                                
                        </thead>
                        <tbody>
                            <tr>
                                {pres.map((i, index) => <td key={index}>{Math.round(i)}</td>)}
                                
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
                
            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
    date: state.week.date,
    temp: state.week.temp,
    wind_spd: state.week.wind_spd,
    wind_cdir: state.week.wind_cdir,
    precip: state.week.precip,
    pop: state.week.pop,
    weather: state.week.weather,
    description: state.week.description,
    pres: state.week.pres
})
  
const mapDispatchToProps = {
    fetchWeatherForWeek
}


export default connect(mapStateToProps, mapDispatchToProps)(WeatherForWeek);