import React from 'react'

import Navbar from '../Navbar/navbar.js'
import Jumbotron from '../Jumbotron/jumbotron.js'
import Footer from '../Footer/footer.js'

const Layout = ({children}) => (
    
    <div className='page'>
        <Navbar/>
        <Jumbotron title="hello" subtitle="meow"/>

            {/* <div className='row'>  */}
                {/* <div className='col-md-3'> */}
                    {/* Sidebar */}
                {/* </div> */}
                {/* <div className='col-md-9'> */}
                    {children}
                {/* </div> */}
            {/* </div> */}

        <Footer/>
    </div>
)

export default Layout