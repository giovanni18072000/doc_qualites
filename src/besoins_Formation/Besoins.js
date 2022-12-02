import { PureComponent } from 'react';
import Menu from '../navigation/Menu';
import Footer from '../navigation/Footer';

class Besoins extends PureComponent {
    
    render() {   
        return ( 
            <div  className="col-lg-12 grid-margin stretch-card">     
              <Menu />
                <div class="card">
                    <div class="card-body">
                        <div class="table-responsive pt-3">
                            <h1>Besoins</h1>
                        </div> 
                    </div>
                </div>
                <Footer />
            </div>
                )
            }
                      
        }
               
export default Besoins