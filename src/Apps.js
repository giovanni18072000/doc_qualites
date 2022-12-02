import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Besoins from './besoins_Formation/Besoins';
import Attribution from './attributions_Pers/Attribution';
import Dos from './dos/Dos';
import ListeExterne from './liste_Doc_Qau/ListeExterne';
import Evaluation_Notation from './outil_Formation/Evaluation_Notation';
import Procedures from './procedures_Direction/Procedures';
import ListeProcedure from './procedures_Direction/Liste_procedure';
import Engagement from './engagement/Engagement';
import UsersInformation from './UsersList/UsersInformation';
import Evaluation from './evaluation/Evaluation';
import ErrorPage from './navigation/ErrorPage';
import Tableau from './navigation/Tableau';
import ListeInterne from './liste_Doc_Qau/ListeInterne';
import FormationSMQ from './outil_Formation/Formation_SMQ';
import FormationAudit from './outil_Formation/Formation_Audith';
import Etape_Realisation from './outil_Formation/Etape_Realisation';
import CinqOne from './outil_Formation/5S1';
import CinqTwo from './outil_Formation/5S2';
import ManuelProcedure from './procedures_Direction/Manuel_Procedure.js';
import Discussion from './chat_message/Message'

function Apps() {
  return (

    <BrowserRouter>
        <Routes>   
            <Route exact path="/" element={<Tableau/>}/>
            <Route exact path="/tableau" element={<Tableau/>}/>
            <Route exact path="/besoins" element={<Besoins/>}/>
            <Route exact path="/attribution" element={<Attribution/>}/>
            <Route exact path="/dos" element={<Dos/>}/>
            <Route exact path="/listeInterne" element={<ListeInterne/>}/>
            <Route exact path="/evaluation" element={<Evaluation/>}/>
            <Route exact path="/listeExterne" element={<ListeExterne/>}/>
            <Route exact path="/evaluation" element={<Evaluation_Notation/>}/>
            <Route exact path="/procedures" element={<Procedures/>}/>
            <Route exact path="/engagement" element={<Engagement/>}/>
            <Route exact path="/listeProcedure" element={<ListeProcedure/>}/>
            <Route exact path="/formationSMQ" element={<FormationSMQ/>}/>
            <Route exact path="/formationAudit" element={<FormationAudit/>}/>
            <Route exact path="/etapeRealisation" element={<Etape_Realisation/>}/>
            <Route exact path="/cinqOne" element={<CinqOne/>}/>
            <Route exact path="/cinqTwo" element={<CinqTwo/>}/>
            <Route exact path="/manuelProcedure" element={<ManuelProcedure/>}/>
            <Route exact path="/UsersInformation" element={<UsersInformation/>}/>
            <Route exact path="/discussion" element={<Discussion/>}/>
            <Route exact path="*" element={<ErrorPage/>}/>
        </Routes>  
    </BrowserRouter>

  );
}

export default Apps;
