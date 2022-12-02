import { PureComponent } from 'react';
import Menu from '../navigation/Menu';
import Footer from '../navigation/Footer';

class ListeInterne extends PureComponent {
    
    render() {   
        return ( 

            <div  className="col-lg-12 grid-margin stretch-card">
        <Menu />
        <div class="container">
        <h2>We Offer Some Of The Best Business Growth Services In Interne</h2>
            
        </div> 
        <Footer />
    </div> 
                )
            }
                      
        }
               
export default ListeInterne