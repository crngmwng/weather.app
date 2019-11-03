import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import './Home.css'
import Layout from '../Layout/layout.js'


import {
    fetchTowns,
  } from '../../actions'

  import {getTowns} from '../../selectors'
class Home extends Component{
    componentDidMount() {
        this.props.fetchTowns()
        

    }
    

    renderTown(town, index) {
        const temp = Math.round(town.main.temp)
        return(
            <div className="town-item col-md-2 "
                 key={index} ><Link to={`/details/${town.name}`}>{town.name} </Link>
                <div className="row block align-items-center"> 
                    <div className='col'>{temp} °C</div>
                </div>

                <div className="row block align-items-center"> 
                    <div className='col'><img id="wicon" src={`http://openweathermap.org/img/wn/${town.weather[0].icon}@2x.png`} alt="Weather icon" height="85" width="85" ></img></div>
                </div>
            </div>
        )
    }

    render() {
        const {towns} = this.props;
        // console.log( towns)
        return(
            <Layout>
                <div className='row justify-content-around'>
                    {towns.map((town, index) => this.renderTown(town, index))}
                </div>
            </Layout> 
        )
    }
}

const mapStateToProps = (state) => ({
    towns: getTowns(state)
})
  
const mapDispatchToProps = {
    fetchTowns
}

let connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home);
export default connectedComponent