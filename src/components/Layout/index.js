import React from 'react'

import Navbar from '../Navbar/navbar.js'
import Jumbotron from '../Jumbotron/jumbotron.js'
import Footer from '../Footer/footer.js'
import Sidebar from '../Sidebar/'

import './index.css'

const Layout = ({children}) => (
    
    <div className='page'>
        <Navbar/>
        <Jumbotron title="hello" subtitle="hi"/>
            <div className='container page-container'>
            <div className='row '> 
                <div className='col-md-2'>
                    <Sidebar/>
                </div>
                <div className='col-md-10'>
                    {children}
                </div>
            </div>
            </div>
        <Footer/>
    </div>
)

export default Layout