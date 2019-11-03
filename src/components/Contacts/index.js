import React from 'react';
import "./Contacts.css"
import Layout from '../Layout/layout.js'

const Contacts = () => {
    return(
        <div>
            <div className="page" >
                <Layout>
                    <div className='container'>
                        <div className="d-flex flex-wrap">
                            <div className="contact-form">
                            <h4>Get in Touch</h4>
                            <p>Please fill out the quick form and we will be in touch with lightning speed.</p>

                                <input type="email" className="form-control" id="email" placeholder="Email address"/>

                                <input type="password" className="form-control" id="pwd" placeholder="Password"/>

                                <textarea placeholder="Message" className="form-control"/>

                                <button type="submit" className="btn btn-outline-dark">Submit</button>
                            </div>

                            <div className="connect-with-us">
                                <h4>Connect with us</h4>
                                <p>For support or any questions: <br></br>Email us at <a href="#" target="blank">support@weather.com</a> </p>
                            </div>
                        </div>
                    </div>
                </Layout>
            </div>
        </div>
    )
}

export default Contacts 