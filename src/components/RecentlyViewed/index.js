import React from 'react'
import {connect} from 'react-redux'

import { Link } from 'react-router-dom';

import './index.css'

const RecentlyViewed = ({data}) => {
    
        const renderData = (i, index) => {
            return(
                <div
                    className='sidebarItem'
                    key={index}> <Link 
                                    className='sidebarLink'
                                    to={i}> {i} </Link></div>
            )
        }
    
    return(
        <div className='sidebar-block'>
            <h5>Recently viewed</h5>
            {data.map( (i, index)=> renderData(i, index))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    data: state.recentlyViewed.paths
})

export default connect(mapStateToProps, null)(RecentlyViewed)
