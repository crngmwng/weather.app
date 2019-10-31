import React, { Component } from 'react';
import {connect} from 'react-redux'
import './Home.css'
import Layout from '../Layout/layout.js'


import {
    fetchTowns
  } from '../../actions'
class Home extends Component{ 
    componentDidMount() {
       this.props.fetchTowns()
    }

    renderTown(town, index) {
        return(
                <div className="col-md-3" key={index}>
                    {town.name}
                </div>
        )
    }

    render() {
        const {towns} = this.props
        console.log(towns)
        return(
            <Layout>
                
            </Layout> 
        )
    }
}

const mapStateToProps = (state) => ({
    towns: state.towns
})
  
const mapDispatchToProps = {
    fetchTowns
}

let connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home);
export default connectedComponent