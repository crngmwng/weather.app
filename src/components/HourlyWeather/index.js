import React, {Component} from 'react'
import {connect} from 'react-redux'

import {fetchHourlyWeather} from '../../actions' 

import {getHourlyWeather} from '../../selectors'

class HourlyWeather extends Component{
    componentDidMount() {
        const name = this.props.match.params.name
        this.props.fetchHourlyWeather(name)
        

    }
    
    renderWeather(i, index) {
        return(
            <div key={index}>
                <div>
                    {i.clouds}
                </div>
                <div>
                    {i.temp}
                </div>
                <div>
                    {i.pres}
                </div>
                <hr/>
            </div>
        )
    }

    render() {
        const {data} = this.props;
        const weather = Object.values(data)
        console.log(weather)
        return(
            <div>
                {weather.map((i, index )=> this.renderWeather(i, index))}
            </div>
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