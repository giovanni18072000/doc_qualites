import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
        // <div  className="col-lg-12 grid-margin stretch-card">
           
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="text-container about">
                        <h4>Acceuil</h4>
                        {/* <p class="white">We're passionate about delivering the best business growth services for companies just starting out as startups or industry players that have established their market position a long tima ago.</p> */}
                    </div> 
                </div> 
                <div class="col-md-2">
                    <div class="text-container">
                        <h4>A propos </h4>
                        <ul class="list-unstyled li-space-lg white">
                            <li>
                                <a class="white" href="#your-link">Dom</a>
                            </li>
                            <li>
                                <a class="white" href="terms-conditions.html">Besoins de Formations</a>
                            </li>
                            <li>
                                <a class="white" href="privacy-policy.html">Procédures Direction</a>
                            </li>
                        </ul>
                    </div> 
                </div> 
                <div class="col-md-2">
                    <div class="text-container">
                        <h4>Evaluation des Actions</h4>
                        <ul class="list-unstyled li-space-lg">
                            <li>
                                <a class="white" href="#your-link">Externe</a>
                            </li>
                            <li>
                               <a class="white" href="#your-link">Interne</a>
                            </li>
                        </ul>
                    </div> 
                </div> 
                {/* <div class="col-md-2">
                    <div class="text-container">
                        <h4>Partners</h4>
                        <ul class="list-unstyled li-space-lg">
                            <li>
                                <a class="white" href="#your-link">unicorns.com</a>
                            </li>
                            <li>
                                <a class="white" href="#your-link">staffmanager.com</a>
                            </li>
                            <li>
                                <a class="white" href="#your-link">association.gov</a>
                            </li>
                        </ul>
                    </div> 
                </div>  */}
            </div> 
        {/* </div>  */}
    </div>   
    


    
    <div class="copyright">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <p class="p-small">Copyright © 2022,  <a href="https://inovatik.com">Développeur Senior: Andoniaina Giovanni Elie</a></p>
                </div> 
            </div> 
        </div> 
    </div>  
    
        </div> 
    
        )
    }
}
export default Footer
