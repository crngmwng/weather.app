import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import './Home.css'
import Layout from '../Layout'
import SingleTown from './singleTown.js'


import {
    fetchTowns
  } from '../../actions'

  import {getTowns} from '../../selectors'
class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isHovered: {}
        }
    }

    componentDidMount() {
        this.props.fetchTowns()
        

    }

    handleMouseEnter = index => {
        this.setState(prevState => {
          return { isHovered: { ...prevState.isHovered, [index]: true } };
        });
    };

    handleMouseLeave = index => {
        this.setState(prevState => {
            return { isHovered: { ...prevState.isHovered, [index]: false } };
        });
    };

    render() {
        const {towns} = this.props;
        const {isHovered} = this.state;
        // console.log( towns)
        return(
            <Layout>
                <div className='row justify-content-around'>
                    {towns.map((town, index) => (
                        <SingleTown
                            onMouseEnter={() => this.handleMouseEnter(index)}
                            onMouseLeave={() => this.handleMouseLeave(index)}
                            town={town}
                            isHovering={isHovered[index]}
                            key={index}

                        />
                    ))}
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