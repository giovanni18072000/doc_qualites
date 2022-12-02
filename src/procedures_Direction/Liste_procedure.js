import { PureComponent } from 'react';
import Menu from '../navigation/Menu';
import Footer from '../navigation/Footer';
import { NavLink } from "react-router-dom";

class ListeProcedure extends PureComponent {
    
    render() {   
        return ( 

            <div  className="col-lg-12 grid-margin stretch-card">
        <Menu />
        <div class="container">
        <center>
            <h3 style={{color:'black'}}>DIRECTION REGIONALE ET REPRESENTATION</h3>
        </center>
            <table>
                <tr>
                    <td style={{color:'black'}}>PROCESSUS</td>
                    <td style={{color:'black'}}>PROCEDURE</td>
                    <td style={{color:'black'}}>REDIGE PAR</td>
                    <td style={{color:'black'}}>APPROUVE PAR</td>
                    <td style={{color:'black'}}>OBSERVATION</td>
                </tr>
                <tr>
                    <th rowspan="18">                       
                        Réception des dossiers 
                    </th>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title"> OCTROI DE CERTIFICAT D'APTITUDE MEDICAL</span>
                        </NavLink>
                    </td>
                    <th rowspan="18">
                        DR ET REPRESENTANT
                    </th>
                    <th rowspan="18">
                        CSMQ-SE
                    </th>
                    <th style={{color:'black'}} rowspan="18">
                        MANUEL DE PROCEDURE BOUCLE ET DIFFUSE
                    </th>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title"> DELIVRANCE DE RELEVE DE NAVIGATION</span>
                        </NavLink>
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title"> TRAITEMENT DE DEMANDE DE TITRE</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title"> EMBARQUEMENT ET DEBARQUEMENT</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">GESTION DE CAHIER DE REGISTRE</span>
                        </NavLink>                         
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">GESTION DE LITIGE ENTRE MARIN ET ARMATEUR</span>
                        </NavLink>
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">IMMATRICULATION NAVIRE</span>
                        </NavLink>
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">DEMANDE DE PERSMIS DE NAVIGATION</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">VISA D'ATTESTATION DE DESTINATION</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">ENREGISTREMENT MOUVEMENT DE NAVIRE</span>
                        </NavLink>
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">CONTRÔLE AU QUAI</span>
                        </NavLink>
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">ETABLISSEMENT DES FICHES D'ESCALE</span>
                        </NavLink>
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">GESTION DE CONTRAT DE CONCESSION</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">GESTION DE CONTRAT DE PERMISSION</span>
                        </NavLink>
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">DEMANDE DE LETTRE DE CERTIFICATION ET CERTIFICAT D'AGREMENT DE BALANCE</span>
                        </NavLink>
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">TFACTURATION DSM , DSM, DSP, DM</span>
                        </NavLink>
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title"> ENCAISSEMENT DE RECETTE</span>
                        </NavLink>
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title"> VISITE DE SECURITE</span>
                        </NavLink>
                    </td>
                </tr>
            </table><br/><br/>


            <center>
                <h3 style={{color:'black'}}>DIRECTION DE LA PROMOTION DE TRANSPORT FLUVIAL</h3>
            </center>
            <table>
                <tr>
                    <td style={{color:'black'}}>PROCESSUS</td>
                    <td style={{color:'black'}}>PROCEDURE</td>
                    <td style={{color:'black'}}>REDIGE PAR</td>
                    <td style={{color:'black'}}>APPROUVE PAR</td>
                    <td style={{color:'black'}}>OBSERVATION</td>
                </tr>
                <tr>
                    <th rowspan="8">                       
                         OPERATIONS EN MER
                    </th>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">UTILISATION DE VEDETTE</span>
                        </NavLink>
                    </td>
                    <td>
                        DOM
                    </td>
                    <td rowspan="2">
                        CSMQ-SE
                    </td>
                    <th style={{color:'black'}} rowspan="8">
                        EN COURS DE FINALISATION (Mise à jour, Normalisation et Standardisation)
                    </th>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">GESTION DU TRAFIC MARITIME</span>
                        </NavLink>
                    </td>
                    <td>
                        MRCC
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title"> GESTION DES EVENEMENTS SAR</span>
                        </NavLink> 
                    </td>
                    <td>
                        MRCC
                    </td>
                    <td>
                        DOM / CSMQ-SE
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">DECLARATION DE SURETE</span>
                        </NavLink> 
                    </td>
                    <td>
                        MTR
                    </td>
                    <td rowspan="5">
                        CSMQ-SE
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">NIVEAU DE SURETE</span>
                        </NavLink>                         
                    </td>
                    <td>
                        MTR
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">APPROBATION PFSO</span>
                        </NavLink>
                    </td>
                    <td>
                        MTR
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">RECONNAISSANCE ORGANISME DE SURETE MARITIME RSO
                            </span>
                        </NavLink>
                    </td>
                    <td>
                        MTR
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">SECURITE SUR UN ACCIDENT EN MER OU UN INCIDENT EN MER
                            </span>
                        </NavLink> 
                    </td>
                    <td>
                        COMITE AD HOC
                    </td>
                </tr>
            </table><br/><br/>

            <center>
                <h3 style={{color:'black'}}>DIRECTION DE LA PROMOTION DE TRANSPORT FLUVIAL</h3>
            </center>
            <table>
                <tr>
                    <td style={{color:'black'}}>PROCESSUS</td>
                    <td style={{color:'black'}}>PROCEDURE</td>
                    <td style={{color:'black'}}>REDIGE PAR</td>
                    <td style={{color:'black'}}>APPROUVE PAR</td>
                    <td style={{color:'black'}}>OBSERVATION</td>
                </tr>
                <tr>
                    <th rowspan="14">                       
                        PROMOTION DE TRANSPORT FLUVIAL
                    </th>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">NATURALISATION DES NAVIRES ET CERTIFICAT DE JAUGEAGE
                            </span>
                        </NavLink>
                    </td>
                    <td rowspan="4">
                        EQUIPE DR
                    </td>
                    <td rowspan="14">
                        CSMQ-SE
                    </td>
                    <td rowspan="14">
                        ATTENTE RETOUR DPTF POUR VALIDATION AVANT LA FINALISATION 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title"> HYPOTHEQUE MARITIME</span>
                        </NavLink>
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title"> DELIVRANCE DE PERMIS DE NAVIGATION</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">IMMATRICULATION</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">NATURALISATION DES MINI EMBARCATIONS</span>
                        </NavLink>                         
                    </td>
                    <td rowspan="2">
                        EQUIPE DPTF
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">MUTATION DE PROPRIETE</span>
                        </NavLink>
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">RADIATION D'IMMATRICULATION</span>
                        </NavLink>
                    </td>
                    <td>
                        EQUIPE DR
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">EXPLOITATION DE DOMAINE FUVIALE</span>
                        </NavLink> 
                    </td>
                    <td>
                        EQUIPE DAF
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">ENCADREMENT PROFESSIONNEL GESTION DE MARINIER</span>
                        </NavLink> 
                    </td>
                    <td>
                        EQUIPE DPTF
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">GESTION DE PATRIMOINE</span>
                        </NavLink> 
                    </td>
                    <td>
                        RGPPF
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">GESTION DU TRAFIC FLUVIAL</span>
                        </NavLink> 
                    </td>
                    <td>
                        RAN
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">POLICE DE LA NAVIGATION</span>
                        </NavLink> 
                    </td>
                    <td  rowspan="3">
                        EQUIPE DPTF
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">RECENSEMENT DE FLEUVE NAVIGABLE</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">DEVELOPPEMET DE SIG ET CARTE</span>
                        </NavLink> 
                    </td>
                </tr>
            </table><br/><br/>

            <center>
                <h3 style={{color:'black'}}>DIRECTION DES RESSOURCES HUMAINES</h3>
            </center>
            <table>
                <tr>
                    <td style={{color:'black'}}>PROCESSUS</td>
                    <td style={{color:'black'}}>PROCEDURE</td>
                    <td style={{color:'black'}}>REDIGE PAR</td>
                    <td style={{color:'black'}}>APPROUVE PAR</td>
                    <td style={{color:'black'}}>OBSERVATION</td>
                </tr>
                <tr>
                    <th rowspan="12">                       
                        RESSOURCES HUMAINES
                    </th>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">RECRUTEMENT D'EMBAUCHE </span>
                        </NavLink>
                    </td>
                    <td>
                        EQUIPE DAF
                    </td>
                    <td rowspan="12">
                        CSMQ-SE
                    </td>
                    <td rowspan="12">
                        MANUEL DE PROCEDURE BOUCLE ET EN ATTENTE DE VALIDATION du DRH
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">PAIE</span>
                        </NavLink>
                    </td>
                    <td>
                        EQUIPE RH
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title"> RECLASSEMENT DES AGENTS</span>
                        </NavLink> 
                    </td>
                    <td  rowspan="10">
                        EQUIPE RH
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">DEMANDE D'ATTESTATION D'EMPLOI</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">PERMISSION D'ABSENCE/SORTIE EXCEPTIONNEL</span>
                        </NavLink>                         
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">DEMANDE DE CONGE</span>
                        </NavLink>
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">CONGE DE MATERNITE / PATERNITE</span>
                        </NavLink>
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">AFFECTATION OU MUTATION DES AGENTS</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">DEMISSION DES AGENTS</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">LICENCIEMENT DES AGENTS</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">RETRAITE POUR LIMITE D'AGE</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">CNAPS</span>
                        </NavLink> 
                    </td>
                </tr>
            </table><br/><br/>

            <center>
                <h3 style={{color:'black'}}>DIRECTION DES AFFAIRES MARITIMES</h3>
            </center>
            <table>
                <tr>
                    <td style={{color:'black'}}>PROCESSUS</td>
                    <td style={{color:'black'}}>PROCEDURE</td>
                    <td style={{color:'black'}}>REDIGE PAR</td>
                    <td style={{color:'black'}}>APPROUVE PAR</td>
                    <td style={{color:'black'}}>OBSERVATION</td>
                </tr>
                <tr>
                    <th rowspan="9">                       
                        AFFAIRES MARITIMES
                    </th>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">MIES EN CONCESSION DES PORTS </span>
                        </NavLink>
                    </td>
                    <td rowspan="6">
                        EQUIPE DR
                    </td>
                    <td rowspan="9">
                        CSMQ-SE
                    </td>
                    <td rowspan="9">
                         BOUCLE ET EN ATTENTE DE VALIDATION
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">AUTORISATION D'OCCUPATION </span>
                        </NavLink>
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">HYPOTHEQUE MARITIME</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">MUTATION DE PROPRIETE</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">IMMATRICULATION</span>
                        </NavLink>                         
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">NATURALISATION ET CERTIFICAT DE JAUGEAGE</span>
                        </NavLink>
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">DELIVRANCE DE TITRE PROFESSIONNELLE MARITIMEE</span>
                        </NavLink>
                    </td>
                    <td rowspan="2">
                        EQUIPE GENS DE MER
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">DELIVRANCE DE LIVRET PROFESSIONNEL MARITIME</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">ARCHIVAGE</span>
                        </NavLink> 
                    </td>
                    <td>
                        EQUIPE ARCHIVE
                    </td>
                </tr>
            </table><br/><br/>
            
            <center>
                <h3 style={{color:'black'}}>BUREAU D'INSPECTION et ENQUETE de SECURITE</h3>
            </center>
            <table>
                <tr>
                    <td style={{color:'black'}}>PROCESSUS</td>
                    <td style={{color:'black'}}>PROCEDURE</td>
                    <td style={{color:'black'}}>REDIGE PAR</td>
                    <td style={{color:'black'}}>APPROUVE PAR</td>
                    <td style={{color:'black'}}>OBSERVATION</td>
                </tr>
                <tr>
                    <th rowspan="5">                       
                        INSPECTION ET ENQUETE DE SECURITE
                    </th>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title"> INSPECTION NAVIRE PAR L'ETAT DU PAVILLON</span>
                        </NavLink>
                    </td>
                    <td>
                        MTR
                    </td>
                    <td rowspan="5">
                        CSMQ-SE
                    </td>
                    <td rowspan="5">
                        EN COURS DE FINALISATION (Mise à jour, Normalisation et Standardisation)
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">GESTION EVENEMENT (Sécurité, urgence, détresse) </span>
                        </NavLink>
                    </td>
                    <td>
                        MTR - JUR
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">GESTION DES MOYENS SAR</span>
                        </NavLink> 
                    </td>
                    <td>
                        MTR
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">ENQUETE DE SECURITE SUR LES ACCIDENTS MARITIME</span>
                        </NavLink> 
                    </td>
                    <td>
                        CTM
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">ENQUETE SUR LES ACCIDENTS MARITIME</span>
                        </NavLink>                         
                    </td>
                    <td>
                        MTR
                    </td>
                </tr>
            </table><br/><br/>

            <center>
                <h3 style={{color:'black'}}>DIRECTION DES INFRASTRUCTURES ET GENIE CIVIL</h3>
            </center>
            <table>
                <tr>
                    <td style={{color:'black'}}>PROCESSUS</td>
                    <td style={{color:'black'}}>PROCEDURE</td>
                    <td style={{color:'black'}}>REDIGE PAR</td>
                    <td style={{color:'black'}}>APPROUVE PAR</td>
                    <td style={{color:'black'}}>OBSERVATION</td>
                </tr>
                <tr>
                    <th rowspan="8">                       
                        INFRASTRUCTURES ET GENIE CIVIL
                    </th>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">TRAVAUX PORTUAIRES</span>
                        </NavLink>
                    </td>
                    <td>
                        EQUIPE INFRA
                    </td>
                    <td rowspan="8">
                        CSMQ-SE
                    </td>
                    <td rowspan="8">
                        EN COURS DE FINALISATION(Mise à jour, Normalisation et Standardisation)
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">TRAVAUX ET REHABILITATION DE BATIMENT</span>
                        </NavLink>
                    </td>
                    <td>
                        EQUIPE ARCH
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">TRAVAUX FLUVIAUX</span>
                        </NavLink> 
                    </td>
                    <td>
                        EQUIPE INFRA
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">TRAVAUX POUR LES ETABLISSEMENTS DE SIGNALISATION MARITIME</span>
                        </NavLink> 
                    </td>
                    <td rowspan="3">
                        RAN
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">RECOLTE ET DIFFUSION DES RSM</span>
                        </NavLink>                         
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">MAINTENANCE DES ESM</span>
                        </NavLink>
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">TRAVAUX D'INFRASTRUCTURE</span>
                        </NavLink>
                    </td>
                    <td rowspan="2">
                        EQUIPE INFRA
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">TRAVAUX PORTUAIRES</span>
                        </NavLink> 
                    </td>
                </tr>
            </table><br/><br/>

            <center>
                <h3 style={{color:'black'}}>DIRECTION DES AFFAIRES FINANCIERES</h3>
            </center>
            <table>
                <tr>
                    <td style={{color:'black'}}>PROCESSUS</td>
                    <td style={{color:'black'}}>PROCEDURE</td>
                    <td style={{color:'black'}}>REDIGE PAR</td>
                    <td style={{color:'black'}}>APPROUVE PAR</td>
                    <td style={{color:'black'}}>OBSERVATION</td>
                </tr>
                <tr>
                    <th rowspan="12">                       
                        AFFAIRES FINANCIERES
                    </th>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">ACHAT DIRECT</span>
                        </NavLink>
                    </td>
                    <td  rowspan="12">
                        EQUIPE DAF
                    </td>
                    <td rowspan="12">
                        CSMQ-SE
                    </td>
                    <td rowspan="12">
                        EN COURS DE FINALISATION (Mise à jour, Normalisation et Standardisation)
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">EXPLOITATION DES RECETTES</span>
                        </NavLink>
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">ORDRE DE PAIEMENT (ORDONNANCEMENT)</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">MANDATEMENT (CAS DE DEPENSES D'INVESTISSEMENT)</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">MANDATEMENT (CAS DE DEPENSES DE FONCTIONNEMENT)</span>
                        </NavLink>                         
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">GESTION DU PARC VEHICULE</span>
                        </NavLink>
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">GESTION DE STOCKS</span>
                        </NavLink>
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">FACTURATION</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">MISSION LOCALE DES AGENTS APMF</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">REGIS D'AVANCES RENOUVELABLES</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">REGIS D'AVANCES UNIQUE ET EXCEPTIONNELLE</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">MOUVEMENT DE CREDIT (AMENAGEMENT)</span>
                        </NavLink> 
                    </td>
                </tr>   
            </table><br/><br/>

            <center>
                <h3 style={{color:'black'}}>DIRECTION DES AFFAIRES INTERNATIONALES, JURIDIQUES ET ENVIRONNEMENTALES</h3>
            </center>
            <table>
                <tr>
                    <td style={{color:'black'}}>PROCESSUS</td>
                    <td style={{color:'black'}}>PROCEDURE</td>
                    <td style={{color:'black'}}>REDIGE PAR</td>
                    <td style={{color:'black'}}>APPROUVE PAR</td>
                    <td style={{color:'black'}}>OBSERVATION</td>
                </tr>
                <tr>
                    <th rowspan="5">                       
                        AFFAIRES INTERNATIONALES, JURIDIQUES ET ENVIRONNEMENTALES
                    </th>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">PROJET D'ARRETE</span>
                        </NavLink>
                    </td>
                    <td  rowspan="5">
                        CSAJ
                    </td>
                    <td rowspan="5">
                        CSMQ-SE
                    </td>
                    <td rowspan="5">
                        ATTENTE RETOUR DAIJE POUR VALIDATION AVANT LA FINALISATION 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">PROJET DE DECRET</span>
                        </NavLink>
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">PROJET DE LOI</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">PROJET DE RATIFICATION DES CONVENTIONS</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">SUIVI DES PROJETS DE TEXTES</span>
                        </NavLink>                         
                    </td>
                </tr>
            </table><br/><br/>

            <center>
                <h3 style={{color:'black'}}>DIRECTION DES AFFAIRES INTERNATIONALES, JURIDIQUES ET ENVIRONNEMENTALES</h3>
            </center>
            <table>
                <tr>
                    <td style={{color:'black'}}>PROCESSUS</td>
                    <td style={{color:'black'}}>PROCEDURE</td>
                    <td style={{color:'black'}}>REDIGE PAR</td>
                    <td style={{color:'black'}}>APPROUVE PAR</td>
                    <td style={{color:'black'}}>OBSERVATION</td>
                </tr>
                <tr>
                    <th rowspan="5">                       
                        AFFAIRES INTERNATIONALES, JURIDIQUES ET ENVIRONNEMENTALES
                    </th>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">PROJET D'ARRETE</span>
                        </NavLink>
                    </td>
                    <td  rowspan="5">
                        CSAJ
                    </td>
                    <td rowspan="5">
                        CSMQ-SE
                    </td>
                    <td rowspan="5">
                        ATTENTE RETOUR DAIJE POUR VALIDATION AVANT LA FINALISATION 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">PROJET DE DECRET</span>
                        </NavLink>
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">PROJET DE LOI</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">PROJET DE RATIFICATION DES CONVENTIONS</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">SUIVI DES PROJETS DE TEXTES</span>
                        </NavLink>                         
                    </td>
                </tr>
            </table><br/><br/>

            <center>
                <h3 style={{color:'black'}}>DIRECTION GENERALE</h3>
            </center>
            <table>
                <tr>
                    <td style={{color:'black'}}>PROCESSUS</td>
                    <td style={{color:'black'}}>PROCEDURE</td>
                    <td style={{color:'black'}}>REDIGE PAR</td>
                    <td style={{color:'black'}}>APPROUVE PAR</td>
                    <td style={{color:'black'}}>OBSERVATION</td>
                </tr>
                <tr>
                    <th rowspan="3">                       
                        EPIC
                    </th>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">CORRESPONDANCE ADMINISTRATIVE</span>
                        </NavLink>
                    </td>
                    <td  rowspan="3">
                        CSMQ-SE
                    </td>
                    <td rowspan="3">
                        DG
                    </td>
                    <td rowspan="3">
                        CREATION (EN COURS) 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">ACCUEIL DES CLIENTS</span>
                        </NavLink>
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">REUNION DE STAFF</span>
                        </NavLink> 
                    </td>
                </tr>
            </table><br/><br/>

            <center>
                <h3 style={{color:'black'}}>DIRECTION GENERALE ADJOINT</h3>
            </center>
            <table>
                <tr>
                    <td style={{color:'black'}}>PROCESSUS</td>
                    <td style={{color:'black'}}>PROCEDURE</td>
                    <td style={{color:'black'}}>REDIGE PAR</td>
                    <td style={{color:'black'}}>APPROUVE PAR</td>
                    <td style={{color:'black'}}>OBSERVATION</td>
                </tr>
                <tr>
                    <th rowspan="4">                       
                        AMELIORATION DE LA PERFORMANCE
                    </th>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">IDENTIFICATION DES POINTS FORTS ET POINTS FAIBLES</span>
                        </NavLink>
                    </td>
                    <td  rowspan="2">
                        CSAJ
                    </td>
                    <td rowspan="4">
                        CSMQ-SE
                    </td>
                    <td rowspan="4">
                        CREATION (EN COURS)
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">IDENTIFICATION DES OPPORTUNITES ET LES MENACES</span>
                        </NavLink>
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">GESTION FONCIER</span>
                        </NavLink> 
                    </td>
                    <td>
                        CDG
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">SUIVI DU PTA</span>
                        </NavLink> 
                    </td>
                    <td>
                        ADGA
                    </td>
                </tr>
            </table><br/><br/>

            <center>
                <h3 style={{color:'black'}}>DIRECTION D'APPUI A LA GESTION ET COMMUNICATION</h3>
            </center>
            <table>
                <tr>
                    <td style={{color:'black'}}>PROCESSUS</td>
                    <td style={{color:'black'}}>PROCEDURE</td>
                    <td style={{color:'black'}}>REDIGE PAR</td>
                    <td style={{color:'black'}}>APPROUVE PAR</td>
                    <td style={{color:'black'}}>OBSERVATION</td>
                </tr>
                <tr>
                    <td rowspan="5">                       
                        INFORMATIQUE
                    </td>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">AFFECTATION ET INSTALLATION DE MATERIEL INFORMATIQUE</span>
                        </NavLink>
                    </td>
                    <td  rowspan="11">
                        EQUIPE DAGC
                    </td>
                    <td rowspan="11">
                        CSMQ-SE
                    </td>
                    <td rowspan="11">
                        ATTENTE RETOUR DAGC POUR VALIDATION AVANT LA FINALISATION 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">ACQUISITION DE TELEPHONE FLOTTE</span>
                        </NavLink>
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">GESTION DES DONNEES</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">GESTION DE MATERIEL</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">MATERIEL PREVENTIVE</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td  rowspan="3">
                        COMMUNICATION
                    </td>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">COMMUNICATION INTERNE</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">GESTION DES INFORMATIONS (ENTRANTES ET SORTANTES)</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">COMMUNICATION EXTERNE</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td  rowspan="3">
                        CONTRÔLE DE GESTION
                    </td>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">GESTION DES RECETTES</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">GESTION BUDGETAIRE</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">AUDIT INTERNE</span>
                        </NavLink> 
                    </td>
                </tr>
            </table><br/><br/>

            <center>
                <h3 style={{color:'black'}}>DIRECTION DE L'AGENCE COMPTABLE</h3>
            </center>
            <table>
                <tr>
                    <td style={{color:'black'}}>PROCESSUS</td>
                    <td style={{color:'black'}}>PROCEDURE</td>
                    <td style={{color:'black'}}>REDIGE PAR</td>
                    <td style={{color:'black'}}>APPROUVE PAR</td>
                    <td style={{color:'black'}}>OBSERVATION</td>
                </tr>
                <tr>
                    <th rowspan="4">                       
                        AGENCE COMPTABLE
                    </th>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">ADMINISTRATIVE</span>
                        </NavLink>
                    </td>
                    <td  rowspan="4">
                        EQUIPE AC
                    </td>
                    <td rowspan="4">
                        CSMQ-SE
                    </td>
                    <td rowspan="4">
                        EN COURS DE FINALISATION
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">COMPTABILISATION</span>
                        </NavLink>
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">RECOUVREMENT</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">REGLEMENT DES FACTURES</span>
                        </NavLink> 
                    </td>
                </tr>
            </table><br/><br/>

            <center>
                <h3 style={{color:'black'}}>DIRECTION DES AFFAIRES PORTUAIRES</h3>
            </center>
            <table>
                <tr>
                    <td style={{color:'black'}}>PROCESSUS</td>
                    <td style={{color:'black'}}>PROCEDURE</td>
                    <td style={{color:'black'}}>REDIGE PAR</td>
                    <td style={{color:'black'}}>APPROUVE PAR</td>
                    <td style={{color:'black'}}>OBSERVATION</td>
                </tr>
                <tr>
                    <th rowspan="8">                       
                        AFFAIRES PORTUAIRES
                    </th>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">CONCESSION DES PORTS</span>
                        </NavLink>
                    </td>
                    <td  rowspan="8">
                        EQUIPE DR
                    </td>
                    <td rowspan="8">
                        CSMQ-SE
                    </td>
                    <td rowspan="8">
                        EN COURS DE VALIDATION
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">AUTORISATION D'OCCUPATION (MAGASIN, HANGAR…)</span>
                        </NavLink>
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">HYPOTHEQUE MARITIME</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">MUTATION DE PROPRIETE</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">IMMATRICULATION</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">NATURALISATION DES NAVIRES ET CERTIFICAT DE JAUGEAGE</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">ARCHIVAGE</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">STATISTIQUE</span>
                        </NavLink> 
                    </td>
                </tr>
            </table><br/><br/>

            <center>
                <h3 style={{color:'black'}}>DIRECTION PERSONNES RESPONSABLES DES MARCHES PUBLIQUES</h3>
            </center>
            <table>
                <tr>
                    <td style={{color:'black'}}>PROCESSUS</td>
                    <td style={{color:'black'}}>PROCEDURE</td>
                    <td style={{color:'black'}}>REDIGE PAR</td>
                    <td style={{color:'black'}}>APPROUVE PAR</td>
                    <td style={{color:'black'}}>OBSERVATION</td>
                </tr>
                <tr>
                    <th rowspan="5">                       
                        MARCHES PUBLICS
                    </th>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">APPEL D'OFFRE OUVERT, CONTRÔLE A PRIORI</span>
                        </NavLink>
                    </td>
                    <td  rowspan="5">
                        EQUIPE DAF
                    </td>
                    <td rowspan="5">
                        CSMQ-SE
                    </td>
                    <td rowspan="5">
                        EN COURS DE FINALISATION
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">APPEL D'OFFRE OUVERT, CONTRÔLE A POSTEORI</span>
                        </NavLink>
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">APPEL D'OFFRE OUVERT, PAR VOIE D'AFFICHAGE</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">APPEL A LA CONCCURENCE</span>
                        </NavLink> 
                    </td>
                </tr>
                <tr>
                    <td>
                        <NavLink className="nav-link" to="/manuelProcedure">
                          <i class="icon-columns menu-icon"></i>
                            <span class="menu-title">PLANIFICATION DU PLAN DE PASSATION DE MARCHE</span>
                        </NavLink> 
                    </td>
                </tr>
            </table><br/><br/>
        </div> 
        <Footer />
    </div> 
                )
            }
                      
        }
               
export default ListeProcedure