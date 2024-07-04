import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer className="text-white mt-5">
            <div className="container-fluid">
                <div className="row py-4">
                    <div className="col-md-3">
                        <h5>This Site</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://www.ups.com/track?loc=en_US&requester=ST/" className="text-white" target="_blank" rel="noopener noreferrer">Tracking</a></li>
                            <li><a href="https://www.ups.com/ship/guided/origin?tx=63325356605500017&loc=en_US" className="text-white" target="_blank" rel="noopener noreferrer">Shipping</a></li>
                            <li><a href="https://www.ups.com/us/en/support/contact-us.page" className="text-white" target="_blank" rel="noopener noreferrer">Support</a></li>
                            <li><a href="https://about.ups.com/us/en/thank-a-ups-hero.html" className="text-white" target="_blank" rel="noopener noreferrer">Recognize a UPS Employee</a></li>
                            <li><a href="https://www.ups.com/marketingpreferences?loc=en_US&id=#/enteremail" className="text-white" target="_blank" rel="noopener noreferrer">Communication Preferences</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>UPS Site</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://about.ups.com/us/en/home.html" className="text-white" target="_blank" rel="noopener noreferrer">About UPS</a></li>
                            <li><a href="https://www.jobs-ups.com/" className="text-white" target="_blank" rel="noopener noreferrer">UPS Jobs</a></li>
                            <li><a href="https://www.ups.com/us/en/ups-healthcare.page" className="text-white" target="_blank" rel="noopener noreferrer">UPS Healthcare</a></li>
                            <li><a href="https://www.ups.com/us/en/supplychain/Home.page" className="text-white" target="_blank" rel="noopener noreferrer">UPS Supply Chain</a></li>
                            <li><a href="https://www.theupsstore.com/" className="text-white" target="_blank" rel="noopener noreferrer">The UPS Stores</a></li>
                            <li><a href="https://upscapital.com/" className="text-white" target="_blank" rel="noopener noreferrer">UPS Capital</a></li>
                            <li><a href="https://developer.ups.com/?loc=en_US" className="text-white" target="_blank" rel="noopener noreferrer">UPS Developer</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>UPS Companies</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://happyreturns.com/" className="text-white" target="_blank" rel="noopener noreferrer">Happy Returns</a></li>
                            <li><a href="https://www.roadie.com/" className="text-white" target="_blank" rel="noopener noreferrer">Roadie</a></li>
                            <li><a href="https://ware2go.co/?utm_source=ups&utm_medium=referral&utm_campaign=webfooter&utm_content=SECAT" className="text-white" target="_blank" rel="noopener noreferrer">Ware2Go Fulfillment</a></li>
                            <li><a href="https://www.insureshield.com/us/en/home.html" className="text-white" target="_blank" rel="noopener noreferrer">InsureShield Shipping Insurance</a></li>
                            <li><a href="https://www.parcelpro.com/us/en/home.html" className="text-white" target="_blank" rel="noopener noreferrer">Parcel Pro®</a></li>
                            <li><a href="https://coyote.com/" className="text-white" target="_blank" rel="noopener noreferrer">Coyote Logistics</a></li>
                            <li><a href="https://deliverysolutions.co/" className="text-white" target="_blank" rel="noopener noreferrer">Delivery Solutions</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Connect with Us</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://www.facebook.com/ups" className="text-white mr-2" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i>Facebook</a></li>
                            <li><a href="https://x.com/UPS" className="text-white mr-2" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i>X</a></li>
                            <li><a href="https://www.instagram.com/ups/" className="text-white mr-2" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i>Instagram</a></li>
                            <li><a href="https://www.linkedin.com/company/ups/" className="text-white mr-2" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i>LinkedIn</a></li>
                            <li><a href="https://www.youtube.com/c/UPS" className="text-white mr-2" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i>YouTube</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <br />
            <div className="text-center py-3">
                <p className="mb-0">&copy; 1994- 2024 United Parcel Service of America, Inc. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
