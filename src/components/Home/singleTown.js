import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'


import {addToRecentlyViewed} from '../../actions'

const SingleTown = ({ onMouseEnter, onMouseLeave, town, isHovering, addToRecentlyViewed }) => {
    const temp = Math.round(town.main.temp)
    return(
        <div className="town-item col-sm-2 " 
             onMouseEnter={onMouseEnter} 
             onMouseLeave={onMouseLeave}> {town.name}
                {isHovering ? <div>

                    <div className="row block align-items-center"> 
                        <div className='col'
                             onClick={() => addToRecentlyViewed(`/hourly/${town.name}`)}><Link to={`/hourly/${town.name}`}>Hourly Weather</Link></div>
                    </div>

                    <div className="row block align-items-center"> 
                        <div className='col'
                             onClick={() => addToRecentlyViewed(`/week/${town.name}`)}><Link to={`/week/${town.name}`}>Weather for week</Link></div>
                    </div>

                </div> : <div >

                    <div className="row block align-items-center"> 
                        <div className='col'>{temp} °C</div>
                    </div>

                    <div className="row block align-items-center"> 
                        <div className='col'><img id="wicon" src={`http://openweathermap.org/img/wn/${town.weather[0].icon}@2x.png`} alt="Weather icon" ></img></div>
                    </div>

                </div>

                }
        </div>
    )
}

const mapDispatchToProps = {
    addToRecentlyViewed
}

export default connect(
    null,
    mapDispatchToProps
)(SingleTown)