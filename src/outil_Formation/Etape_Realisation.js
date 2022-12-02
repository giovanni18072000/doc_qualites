import { PureComponent } from 'react';
import Menu from '../navigation/Menu';
import Footer from '../navigation/Footer';

class EtapeRealisation extends PureComponent {
    
    render() {   
        return ( 
    <div  className="col-lg-12 grid-margin stretch-card">
        <Menu />
        <div class="container">
        <center>
                <h3 style={{padding:'0 0 0 50px', color:'red'}}>  ETAPE DE REALISATION DE L’AUDIT (ISO 19011)
                   (EQUIPE– AUDITEUR MANNING) INFRA</h3><br/><br/>
        </center>
                <center>
                    <img src="../../images/logo.PNG"/>
                </center><br/>
                    <h3 style={{padding:'0 0 0 30px'}}>La norme ISO 19011 version 2018 </h3>
                    <p>fournit les lignes directrices sur l'audit interne ou externe d'un système de management et l'évaluation des compétences des équipes d'audit.</p>
                    <h3 style={{padding:'0 0 0 50px',color:'red'}}>ETAPES DE REALISATION DE L’AUDIT</h3>
                    <center>
                        <img src="../../images/etape.PNG" style={{width:'100%',height:'2%'}}/>
                    </center><br/>

                    <h3 style={{padding:'0 0 0 30px',color:'red'}}> 1. Déclenchement de l’audit (6.2)</h3>
                    <p>
                        • Nomination du responsable de l’équipe d’audit<br/>
                        • Définition des objectifs, du champ et des critères de l’audit<br/>
                        • Détermination de la faisabilité de l’audit<br/>
                        • Constitution de l’équipe d’audit<br/>
                        • Etablissement du premier contact avec l’audité<br/>
                    </p>

                    <h3 style={{padding:'0 0 0 30px',color:'red'}}>2. Réalisation de la revue des documents (6.3)</h3>
                    <p>Revue des documents pertinents du système de management, y compris des enregistrements, et détermination de leur adéquation par rapport aux critères d’audit</p>

                    <h3 style={{padding:'0 0 0 30px',color:'red'}}> 3. Préparation des activités d’audit sur site (6.4)</h3>
                    <p>
                        -Préparation du plan d’audit<br/>
                        -Attribution des tâches au sein de l’équipe d’audit<br/>
                        - Préparation des documents de travail<br/>
                    </p>

                    <h3 style={{padding:'0 0 0 30px',color:'red'}}> 4. Activités d’audit sur site (6.5)</h3>
                    <p>
                        - Réunion d’ouverture<br/>
                        - Communication pendant l’audit<br/>
                        - Rôles et responsabilités des guides et des observateurs<br/>
                        - Recueil et vérification des informations<br/>
                        - Constats d’audit<br/>
                        - Préparation des conclusions d’audit<br/>
                        - Réunion de clôture<br/>
                    </p>

                    <h3 style={{padding:'0 0 0 30px',color:'red'}}>5. Préparation, approbation et diffusion du rapport d’audit (6.6)</h3>
                    <p>
                        - Préparation du rapport d’audit<br/>
                        - Approbation et diffusion du rapport d’audit<br/>
                    </p>

                    <h3 style={{padding:'0 0 0 30px',color:'red'}}>6. Clôture de l’audit (6.7)</h3>
                    <center>
                        <img src="../../images/globe.PNG" style={{width:'100%',height:'2%'}}/>
                    </center><br/>

                    <h3 style={{padding:'0 0 0 30px',color:'red'}}> 7. Suivi d’audit (6.8)</h3>
                    <p>
                        -Suivi du plan d’action d’audit<br/>
                        -Suivi des recommandations de l’Audit<br/>
                        -Rapport de suivi d’audit<br/>
                    </p><br/>

                    <center>
                            <h3 style={{color:'black'}}>
                                avec  Jean Frédéric RAMAHALEFITRA<br/>
                                Chef de Service Management Qualité et Suivi-Evaluation<br/>
                            </h3>
                    </center>

        </div>
        <Footer /> 
    </div> 
                )
            }
                      
        }
               
export default EtapeRealisation