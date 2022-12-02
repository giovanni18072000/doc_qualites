import { PureComponent } from 'react';
import Menu from '../navigation/Menu';
import Footer from '../navigation/Footer';
//import html2canvas from 'html2canvas';
import {jsPDF} from 'jspdf';
import '../engagement/engagement.css'
import PrintIcon from '@material-ui/icons/Print'
import Button from '../button/button'

class Responsable extends PureComponent {
    
    generatePDF = ()=>{
        var doc = new jsPDF("p","pt","a4");
        doc.html(document.querySelector("#content"),{
            callback:function(pdf){
                var pageCount= doc.internal.getNumberOfPages();
                pdf.deletePage(pageCount);
                pdf.save("engagement.pdf");
            }
        });
    };
    
    render() {   
        return ( 
        <div  className="col-lg-12 grid-margin stretch-card">
            <Menu />
            <div class="container" id='content'>
                    <center><br/>
                        <img src="../../images/apmf1.jfif"/>
                        <h3 style={{color:'DarkBlue'}}><em><u>Engagement de la Direction</u></em></h3> 
                    </center>

                    <p  style={{ color:'black'}}> Madagascar à travers l’A.P.M.F, veille à la mise en œuvre des Conventions del’Organisation Maritime Internationale (OMI) 
                    en matière de Sécurité, Sûreté et de protection de l’Environnement marin.<br/>
                    L’APMF a pour Missions de:</p>
                    <p style={{padding:'0 0 0 20px' ,color:'black'}}>- Gérer le système de transports maritime et
                     fluvial à Madagascar,<br/>
                    - Développer et promouvoir le sous sous-secteur,<br/>
                     - Contribuer à la sauvegarde de l'environnement marin,<br/>
                    - Veiller à l’efficacité de la sécurité et de la sûreté dew la navigation maritime et des ports.</p>

                    <p  style={{ color:'black'}}> L’APMF contribue à la réalisation des Objectifs de Développement 
                    Durable (ODD) liés ausous-secteur maritime fixés par l’Organisation des Nations Unies (ONU), ainsi que la
                    réalisation du Plan National de Développement, tout en considérant le contexte et la réalité à Madagascar, 
                    en termes de besoins et attentes des acteurs maritimes.<br/>
                    La Direction Générale a défini quatre grandes orientations et s’engage à :</p>
                <p style={{padding:'0 0 0 20px',color:'black'}}>  - Appliquer de manière effective les instruments de l’OMI <br/>
                - Pratiquer la Bonne Gouvernance;<br/>
                 - Améliorer la qualité des services publics, des infrastructures maritime et fluviale,<br/>
                - Promouvoir le sous-secteur des Transports Maritime et Fluvial</p>
                    <center>
                        <h3 style={{color:'DarkBlue'}}><em><u> La Direction Générale</u></em></h3>
                    </center>
            </div>
                <Button color='green'  function={this.generatePDF} name_of_btn="Engagement en PDF" icon={<PrintIcon />} /><br/><br/>
        <Footer />
    </div> 
                )
            }
                      
        }
               
export default Responsable