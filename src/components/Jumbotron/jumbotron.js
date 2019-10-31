import React from 'react';
import './jumbotron.css';

const Jumbotron = (props) => {
        return(
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className='display-5'>{props.title}</h1>
                        <p className='lead'>{props.subtitle}</p>
                    </div>
                </div>
        );
    }

export default Jumbotron