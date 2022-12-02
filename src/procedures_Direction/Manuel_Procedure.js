import { PureComponent } from 'react';
import Menu from '../navigation/Menu';
import Footer from '../navigation/Footer';
import '../procedures_Direction/procedure.css'

class Manuel_Procedure extends PureComponent {
    
    render() {   
        return ( 

            <div  className="col-lg-12 grid-margin stretch-card">
        <Menu />
        <div class="container">
        <center><h3>CORRESPONDANCE ADMINISTRATIVE DE L’APMF</h3></center>
        <center><h3 style={{color:'black'}}><u>Correspondance  Administrative</u></h3></center>
        <p>C’est la manière d’écrire les documents et correspondance de toute nature, selon la forme en usage dans l’administration.<br/>
            C’est aussi l’action  par laquelle les personnes appartenant à l’administration répondent par écrit et selon certaines règles définies, aux demandes des affaires de leur compétence ou écrivent pour avoir des renseignements sur certaines questions qu’elles sont amenées à traiter.<br/>
            Cette forme de lettre est utilisée dans le cadre d’une correspondance entre 2 administrations distinctes et comportant un caractère professionnel.<br/>
            (Exemple : Un DRA répond à une demande du préfet relative à la mise en œuvre de développement de sa Région.)<br/>
        </p>
        <p>Cette forme de lettre est également utilisée dans le cadre d'une correspondance entre un émetteur et un récepteur appartenant à la même entité administrative et portant sur un objet personnel.<br/>
            (Exemple : Un agent effectue une demande de temps partiel ou sollicite un bilan de compétences à son autorité supérieure et sous couvert de son chef de service.)<br/>
        </p>
        <center><h3 style={{color:'black'}}>Modèle d’une lettre administrative en forme administrative</h3></center>
        <div><br/>
            <p style={{width:'150px',border: '1px black solid'}}><u>LOGO / ATTACHE</u></p>
                <img src="../../images/logo2.PNG" style={{width:'50px', height:'50px'}}/><br/><br/><br/>
            <p>
                NOM de l’Administration émettrice<br/>
                (Adresse complète)<br/>
                Désignation du service concerné<br/>
                Bureau<br/>
            </p>
        </div>

        <div style={{ marginLeft:'700px'}}>
            <p>Ville, le jj/mm/aaaa</p>
            <p style={{width:'150px',border: '1px black solid'}}>SUSCRIPTION</p>
            <p>Fonction de l’expéditeur</p>
            <p>à</p>
            <p>Fonction du destinataire précédée de « Monsieur »(Adresse)</p>
            <p>A l'attention de (si nécessaire) </p>
            <p>Avec respect voie hiérarchique </p>
            <p>(le cas échéant)</p>
        </div>
        <p style={{width:'150px',border: '1px black solid'}}>OBJET:</p>
        <p>(Indication sommaire de la question traitée)</p>
        <p style={{width:'150px',border: '1px black solid'}}>REFERENCE</p>
        <p>(Rappel des documents antérieurs, le cas échéant, auxquels l’affaire se rapporte)</p>

        <div>
            <h3><u>PAS DE FORMULE D’APPEL</u></h3>
        </div>

        <h3 style={{border: '1px black solid'}}>
            <center>
                INTRODUCTION (brève) / REFORMULATION (Rappel de l’affaire, contexte)
            </center>
        </h3>
        <h3 style={{border: '1px black solid'}}>
            <center>DEVELOPPEMENT <br/></center>
            <center>Avec choix d’un plan : <br/></center>
            <center>Causes – conséquences ou Conséquences – causes <br/></center>
            <center> ou<br/></center>
            <center>Faits – Idées - Actes<br/></center>
            <center>(Rappel de l’affaire, contexte)<br/></center>
        </h3>

        <div>
            <h3><u>PAS DE FORMULE DE POLITESSE</u></h3>
        </div>

        <div style={{color:'black',marginLeft:'700px'}}>
            <p >Signature<br/>
                (Prénom + Nom si symétrie avec l'émetteur indiqué en suscription)<br/>
            </p> 
        </div>
            <p>PJ : (pièces jointes, exprimées en nombre, si elles ont déjà été portées dans le corps de la lettre)</p>

            <center><h2><u>CARACTERISTIQUES  D’UN  COURRIER EN  FORME  ADMINISTRATIVE</u></h2></center>
        <div>
            <h3 style={{color:'black'}}><u>1• Le LOGO (en tête)</u></h3>
            <img src="../../images/logo2.PNG" alt="logo"/>
            <h3 style={{color:'black'}}><u>2• Le lieu et la date</u></h3>
        </div>
        <p>Cette mention doit être portée en haut et à droite de la première page du papier  (Bien mentionner le lieu en toute lettre)</p>
        
        <h3 style={{color:'black'}}><u>3• Le Numéro d’enregistrement au départ et le sigle du service d’où émane la lettre</u></h3>
        <p>Les numéros des correspondances doivent se suivre dans l’ordre croissant sans interruption entre eux.Le numéro de la lettre est suivi du sigle du sigle de l’expéditeur.<br/>
            (Exemple : N° 121-DG/DRH/CSAP) </p>
        <p>Sigle de l’APMF :</p>
        <p style={{padding:'0 0 0 70px'}}>
            •	Direction Générale (DG)<br/>
            •	Direction Générale Adjointe (DGA) <br/>
            •	Agence Comptable (AC)<br/>
            • Direction des Affaires Portuaires (DAP)<br/>
            •	Direction de Promotion de Transport Fluvial (DPTF)<br/>
            • Direction des Affaires Maritimes  (DAM)<br/>
            •	Direction des Ressources Humaines (DRH)<br/>
            • Direction des Affaires Financières (DAF)<br/>
            •	Direction de l’Infrastructure et Génie Civil (DIGC)<br/>
            •	Direction des Opération en Mer (DOM)<br/>
            •	Direction d’appui à la Gestion et à la Communication (DAGC)<br/>
            •	Direction des Affaires Internationale, Juridique et Environnementale (DAIJE)<br/>
            •	Cellule des Conseillers (CC), <br/>
            • Bureau d’Inspection et d’Enquête de Sécurité (BIES)<br/>
            •	Unité de Gestion de Passation de Marché (UGPM)<br/>
    </p>

        <p>SCDP- Service Contrôle et Développement des Ports<br/>
            SGCD- Service Gestion des Conventions et des Bases de Données Portuaires<br/>
            SSP-Service Statistiques Portuaires<br/>
            SGAN-Service Gestion Administrative des Navires<br/>
        </p>

        <p>SAP-Service Aménagement Portuaire<br/>
            SGC-Service  Génie Civil<br/>
            SPB-Service  Phares et Balises<br/>
        </p>

        <p>SOF-Service  Ouvrage Fluvial<br/>
            SSM-Service Sureté Maritimes<br/>
            SRSM-Service Recherche et Sauvetage Maritimes<br/>
            SGTM-Service  Gestion du Trafic Maritime <br/>
            SACG-Service  Appui, Contrôle de Gestion <br/>
            SIT-Service  Informatique et Télécommunication<br/>
            SCI-Service  Communication et Information<br/>
            SAI-Service  d’Audit Interne<br/>
        </p>

        <p>SEP-Service  Etudes et  Prospection<br/>
            SGTP-Service Gestion des Trafics et Police de la Navigation <br/>
            SRAL-Service Relations avec les Autorités Locales et  Normalisation<br/>
        </p>
        
        <p>SAE-Service Affaires Environnementales<br/>
            SAE-Service Affaires Environnementales<br/>
            SCAJ-Service Conseils et Avis Juridiques<br/>
            SLC-Service Législation et Contentieux<br/>
        </p>
        
        <p>SAGP-Service Administration et Gestion du Personnel<br/>
            SMQ-SE-Service  Management  de la Qualité, Suivi-Evaluation <br/>
            SGFP-Service  Gestion des Formations et Partenariat<br/>
            SPI- Service  Paie, IRSA, <br/>
        </p>

        <p>SCO-Service Comptabilité Ordonnateur<br/>
            SAG-Service Administration Générale<br/>
            SLGP-Service Logistique et Gestion du Patrimoine<br/>
            SE-Service Exploitation<br/>
        </p>

        <p>SCGM-Service  Carrière des Gens de Mer<br/>
            SFQG-Service Formation et Qualification des Gens de Mer<br/>
            SSMPU-Service Suivi des Exploitations et Maintenance des Petites Unités<br/>
        </p>

        <p>SCompt- Service  de la Comptabilité<br/>
            SRec- Service des recettes<br/>
            SD- Service des dépenses<br/>
            SReco-Service des Recouvrements<br/>
        </p>

        <h3 style={{color:'black'}}><u>4• L’identification de l’expéditeur et du destinataire</u></h3>
        <p>Cette indication doit figurer lisible et compréhensible  au-dessous de la date, au milieu de la page.L’expéditeur et le destinataire sont indiqués par leur qualité et leur titre mais non pas par leur nom 
            Le propre nom du destinataire n’est indiqué que lorsqu’il s’agit d’une affaire le concernant personnellement.</p>
        
        <h3 style={{color:'black'}}><u>5• L’objet</u></h3>
        <p>Il permet de renseigner le destinataire sur l’importance de l’affaire traitée. C’est la mention en quelques mots de ce qui est exposé dans la correspondance.<br/>
            (Exemple : Objet: avance sur salaire)
        </p>

        <h3 style={{color:'black'}}><u>6• Les références</u></h3>
        <p>L’indication des références aux correspondances antérieures est portée au-dessous de l’objet. <br/>
            Cette partie a pour but :</p>
        <p style={{padding:'0 0 0 70px'}}>
            -	d’indiquer au destinataire les correspondances se rapportant à l’affaire traitée ;<br/>
            -	de permettre de retrouver rapidement dans le dossier correspondant les documents rappelés en référence ;<br/>
            -	de suivre dans le temps de déroulement de l’affaire traitée<br/>
            (Exemple : Objet : avance sur salaire  Référence : Circulaire N° 121-DG/DRH/CSAP)<br/>
        </p>
       
        <h3 style={{color:'black'}}><u>7• L’indication des pièces jointes</u></h3>
        <p>- rappelle à la personne chargée de l’expédition du courrier qu’il doit joindre les documents cités<br/>
            - permet au service destinataire de constater immédiatement la présente ou l’absence des documents annoncés<br/>
        </p>
        <p>Lorsque des documents sont envoyés en même temps que la lettre, on indique généralement dans la marge et en abrégé, qu’il y a des pièces jointes avec indication de leur nombre et de leur nature.</p>

        <h3 style={{color:'black'}}><u>8• Le corps de la lettre </u></h3>
        <p>Quelle soit de forme administrative ou personnelle, la lettre obéit aux règles de rédaction</p>

        <p style={{color:'black'}}>L’introduction : </p>
        <p style={{padding:'0 0 0 70px'}}>
            -	présente le sujet, la question ou le problème que l’on va traiter de façon rapide et complète, résume les idées essentielles de la demande<br/>
            -	doit toujours reprendre l’ensemble des éléments nécessaires à la parfaite compréhension du problème posé, mais aussi brièvement que possible<br/>
        </p>
        <p style={{padding:'0 0 0 50px',color:'black'}}>(Présentation ou rappel de l’affaire, de la question ou du problème posé / Résumé de l’ensemble des éléments utiles à la compréhension du problème)</p>
        
        <p style={{color:'black'}}>Le développement :</p>
        <p style={{padding:'0 0 0 70px'}}>
            -examine sur le fond, le sujet, l’affaire, la question ou le problème traité. C’est-à-dire l’importance de l’argumentation qui s’appuiera sur les textes et législatifs mais aussi sur les faits réels<br/>
            -expose les faits et les arguments de manière progressive (c’est-à-dire des moins importants à ceux qui justifient la décision),<br/>
            -	est équilibré entre ses différentes parties, séparées par transitions qui permettent de respecter l’unité et la progression.<br/>
            -	Respecte la lettre des cinq « C » ; clair, complet, concis, convaincant (objectifs), correct (poli, d’une bonne lecture).<br/>
        </p>
        <p style={{color:'black'}}>La Conclusion :</p>
        <p style={{padding:'0 0 0 70px'}}>
            -	est l’aboutissement logique de l’introduction et du développement,<br/>
            -	fait connaitre, d’une manière précise et sans ambiguïté possible, la décision de l’administration (que la réponse soit affirmative, négative ou d’attente).<br/>
        </p>
        <p>Les expressions « vouloir bien » et « bien vouloir » sont souvent employées dans les formules de conclusion.<br/>
            Il est bon de préciser que :</p>
        <p style={{padding:'0 0 0 70px'}}>
            -	l’expression « bien vouloir » donne une idée de référence de courtoisie. Elle est utilisée par le subordonné s’adressant à son supérieur,<br/>
            -	« vouloir bien » est un commandement caché. Celui qui l’utilise veut obtenir gain de cause.<br/>
        </p>

        <p> Ainsi, c’est le supérieur qui l’emploi en s’adressant à un subordonné. En effet, l’adverbe « bien » suivant le verbe accentue la signification de celui-ci.</p>
        <center>
            <h3 style={{color:'black'}}><u>I-	LA LETTRE ADMINISTRATIVE </u></h3>
            <p>(y compris la lettre circulaire)</p>
            <table>
                <tr>
                    <td>Formes(Eléments)</td>
                    <td>Administrative</td>
                    <td>Personnelle</td>
                </tr>
                <tr>
                    <td>Logo</td>
                    <td>
                        - Lors d'échanges de correspondance entre des structures administratives<br/>
                        - à destination de toute personne appartenant à l'administration
                    </td>
                    <td>
                        - à destination de toute personne appartenant à l'administration	- à destination de toute personne n'appartenant pas à l'administration<br/>
                        - entre deux services si on veut insister sur le caractère personnalisé et courtois du courrier
                    </td>
                </tr>
                <tr>
                    <td>Lieu et date</td>
                    <td>
                        - angle supérieur droit <br/>
                        -Ville, suivie de la date  d'expédition (en entier)
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>Adresse Suscription émetteur</td>
                    <td>
                        - sous le lieu et la date<br/>
                        - indication de l'autorité qui adresse la lettre<br/>
                        - intitulé et adresse du destinataire (autorité responsable et non une personne privée) <br/>
                        - faire apparaître la marque de la voie hiérarchique
                    </td>
                    <td>
                        - sous le lieu et la date<br/>
                        - ou en bas, à gauche de la page<br/>
                        - prénom, nom du destinataire<br/>
                        - sa fonction ou sa qualité adresse (numéro, rue, code postal et ville)
                    </td>
                </tr>
                <tr>
                    <td>Objet</td>
                    <td>
                        - figure à gauche<br/>
                        - mention succincte de la question traitée<br/>
                        (un objet par lettre)<br/>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>Référence</td>
                    <td>
                        - sous l'objet<br/>
                        - rappel des documents antérieurs auxquels se reporte le rédacteur
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>Pièces jointes</td>
                    <td>
                        - leur nombre est porté au bas de la première<br/>
                        page du texte à gauche<br/>
                        - elles sont jointes en annexe
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>Formule d'appel</td>
                    <td></td>
                    <td>
                        Ce sont celles du courrier privé<br/>
                        Madame, Mademoiselle, Monsieur,<br/>
                        Monsieur Le Directeur
                    </td>
                </tr>
                <tr>
                    <td>Formule de politesse</td>
                    <td></td>
                    <td>
                        Elle reprend nécessairement, dans son libellé, la formule d'appel. <br/>
                        Ex : Veuillez agréer, Mademoiselle, Madame, Monsieur, l'expression de ma considération distingué<br/>
                    </td>
                </tr>
            </table>
        </center>

        <h3 style={{color:'black'}}><u>9• La signature et le cachet</u></h3>
        <p>Apposée, en général, au bas du document, à droite, par le détenteur de l'autorité ou un autre signataire.<br/>
            Toute correspondance non signée n’a aucune valeur et n’engage personne : elle ne devrait pas prise en considération.  <br/>
            La signature est accompagnée de l’apposition d’un cachet rond officiel indiquant le service d’où émane la lettre. La signature engage la responsabilité de la personne qui a la qualité pour signer la lettre, même si celle-ci a 
            été signée par un subordonné, suite à une délégation de signature.<br/>
        </p>
            <p style={{padding:'0 0 0 70px'}}>
                - signature par délégation: pouvoir prévu par un arrêté pour une durée déterminée ou permanente,<br/>
                - signature par autorisation : pouvoir donné à une personne désignée pour une catégorie de pièces (lettres, bordereaux...) relevant de son service,<br/>
                - signature par ordre: fonctionnaire qui signe à la place de son chef direct, momentanément empêché.<br/>
            </p>
            <p>Dans tous les cas, les indications de titre et de patronyme du signataire par délégation, autorisation ou ordre, doivent apparaître.</p>
        
        <h3 style={{padding:'0 0 0 40px',color:'black'}}><u>a-	L’autorisation de signature </u></h3>
        <p>Décision officieuse et informelle, donnée de manière permanente ou provisoire, par le titulaire de la signature. Dans la rédaction de votre lettre, vous la présenterez de la manière suivante : </p>
        <p> Pour le Directeur Régional <br/>
            Et par ordre ou P/ordre ou p/o, <br/>
            Le chef du service Gens de Mer<br/>
            RABENJA Paulin<br/>
        </p>

        <h3 style={{padding:'0 0 0 40px',color:'black'}}><u>b-	La délégation de signature</u></h3>
        <p>Acte officiel et formalisé, permettant à une autorité (le Directeur par exemple) de désigner un collaborateur (le SP ou un Chef de Service), lequel pourra signer certaines décisions administratives comme les pièces comptables. La délégation de signature ne se présume pas. Dans la rédaction de votre lettre,
             vous la présenterez de la manière suivante :</p>
        <p>Pour le Directeur Régional <br/>
            Et par ordre ou P/ordre ou p/o, <br/>
            Le chef du service Gens de Mer<br/>
            RABENJA Paulin<br/>
        </p>

        <h3 style={{color:'black'}}><u>10• PJ et la mention « copie à »</u></h3>
        <p>Lorsque des documents sont envoyés en même temps que la lettre. On indique généralement dans la marge et en abrégé, qu'il y a des pièces jointes avec indication de leur nombre et de leur nature. Cette indication a deux justifications : </p>
        <p style={{padding:'0 0 0 70px'}}>
            •	elle rappelle à la personne chargée de l'expédition du courrier qu'elle doit joindre les documents cités,<br/>
            •	elle permet au service destinataire de constater immédiatement la présence ou l'absence des documents annoncés,<br/>
        </p>
        <p>Exemple: Pièces jointes : 3 dossiers.</p>
        <p>Il est inutile de donner des détails des pièces jointes.</p>
        <p>Copie à : </p>
        <p style={{padding:'0 0 0 70px'}}>
            •	C’est l’indication de ou des personnes à qui le courrier est également transmis <br/>
            •	Alignée à gauche en dessous des PJ<br/>
        </p>
        <p>Une lettre adressée à destinataire est parfois aussi adresser à d’autres personnes et à d'autres services, soit parce que l’affaire qui est traitée les concerne, soit parce qu'il y a intérêt à les confier du contenu de la lettre. Dans ce cas, on mentionne à la suite du texte et en bas de la page, à gauche, le nom des personnes ou les Services à 
            qui une copie de la lettre est envoyée, soit en indiquant "diffusion" ou "destinataires" soit en indiquant "ampliation" ou "copie ". </p>

            <h3 style={{color:'black'}}><u>11• L'utilisation des mentions spéciales </u></h3>
            <p>Pour hâter l'acheminement des correspondances administratives et inviter les destinataires et répondre d'une part, et pour permettre de connaître les correspondances qui doivent être lues par un nombre limité de personnes et les conserver en un lieu sûr d'autre part, il est porté sur les correspondances et les enveloppes qui doivent les contenir, 
                des mentions spéciales. Ces mentions sont indiquées à la main, à la machine à écrire ou à l'aide d'un cachet en haut et à gauche sur l'original de la correspondance ainsi que sur l'enveloppe.</p>
            <p style={{padding:'0 0 0 50px'}}>•	Les mentions eu vue de faciliter ou hâter l'acheminement: </p>
            <p style={{padding:'0 0 0 70px'}}>
                -	"URGENT" ou "TRES URGENT" (Ces mentions indiquent que la correspondance doit être acheminée rapidement avant les correspondances ordinaires et que le destinataire doit répondre sans retard.)<br/>
                -	"PRIORITE" ou "PRIORITE ABSOLUE" (Ces mentions sont plus fortes que les précédentes et sont réservées pour les télégrammes officiels qui sont eux-mêmes des correspondances utilisées lorsqu'il y a urgence pour traiter une affaire.)<br/>
                -	"CONFIDENTIEL" (Cette mention est faite lorsque le contenu de la correspondance ne doit pas être divulgué.)<br/>
                -	"SECRET" (Cette mention est employée quand la correspondance contient des indications qui ne doivent être connues que du destinataire sous peine d'entraîner de gros inconvénients à l'Administration, il est interdit d'établir des copies de tout ou partie d'un document classé "secret")<br/>
            </p>
            
            
            <h3 style={{color:'black'}}><u>La  Structure  de  la  rédaction Du  corps  de  la  lettre </u></h3>
            <p>• Méthode PPA : Passé, Présent, Avenir </p>
            <p style={{padding:'0 0 0 50px'}}>
                - Passé : reformulation précise de la demande ou de la situation (problématique)  <br/>
                - Présent : réponse à la demande précise et motivée (base juridique : règlements, décrets, lois…) et personnalisée en fonction des éléments (argumentaire) <br/>
                - Avenir : décision et/ou proposition (solution)<br/>
             </p>

            <h3 style={{color:'black'}}>La  Structure  de  la  rédaction Du  corps  de  la  lettre </h3>
            <p style={{padding:'0 0 0 70px'}}>
                • Formules d’introduction <br/>
                •Formules de demandes <br/>
                •Formules d’exposition <br/>
                • Formules énumératives <br/>
                • Autres locutions <br/>
                • Formules de conclusions<br/>
            </p>

            <h3 style={{color:'black'}}>A-1-Formules d’introduction</h3>
            <p style={{color:'black'}}><u>• Par référence à un élément antérieur :</u></p>
            <p style={{padding:'0 0 0 70px'}}>
                –	Par courrier en date du... <br/>
                –	En réponse à... <br/>
                –	J'ai l'honneur d'accuser réception de... <br/>
                –	Comme suite à (et non « suite à »)<br/>
            </p>

            <p style={{color:'black'}}><u>• Sans référence à un élément antérieur :</u></p>
            <p style={{padding:'0 0 0 70px'}}>
                –	 J'ai l'honneur de vous faire connaître (de supérieur à subordonné) <br/>
                –	 J'ai l'honneur de porter à votre connaissance (de subordonné à supérieur)<br/>
                –	 J’ai l’honneur de vous rendre compte (de subordonné à supérieur)<br/>
                –	 J’ai l’honneur de vous adresser (de supérieur à subordonné)<br/>
            </p>
        
            <h3 style={{color:'black'}}>A-2-Formules de demandes</h3>
            <p style={{padding:'0 0 0 70px'}}>
                –   J’ai l’honneur de vous demander de bien vouloir (de subordonné à supérieur) <br/>
                –   J’ai l’honneur de vous demander vouloir bien (de supérieur à subordonné) <br/>
                –   Je vous serai reconnaissant de (injonctif) <br/>
                –   Je vous serais reconnaissant de (courtois) <br/>
                –   Je vous saurai gré de (injonctif)<br/>
                –   Je vous saurais gré de (courtois)<br/>
            </p>
        
        
            <h3 style={{color:'black'}}>A-3-Formules d’exposition </h3>
            <p style={{padding:'0 0 0 50px'}}>
                • Je constate que… <br/>
                • J’ajoute que… <br/>
                • J’observe que <br/>
                • Je souligne que… <br/>
                • A l’infinitif :<br/>
            </p>
            <p style={{padding:'0 0 0 70px'}}>
                –je me permets de… <br/>
                –constater que… <br/>
                –ajouter que… <br/>
                –souligner que…<br/>
            </p>

            <h3 style={{color:'black'}}>A-4-Formules d’exposition  </h3>
            <p style={{padding:'0 0 0 50px'}}>
                • Je constate que… <br/>
                • J’ajoute que… <br/>
                • J’observe que <br/>
                • Je souligne que… <br/>
                • A l’infinitif :<br/>
            </p>
            <p style={{padding:'0 0 0 70px'}}>
                –je me permets de… <br/>
                –constater que… <br/>
                –ajouter que… <br/>
                –souligner que…<br/>
            </p>

            <h3 style={{color:'black'}}>A-5-Formules énumératives </h3>
            <p style={{padding:'0 0 0 50px'}}>
                • En premier lieu…en second lieu <br/>
                • D’une part…d’autre part <br/>
                • Tout d’abord…ensuite…enfin<br/>
                • Par ailleurs<br/>
                • En outre<br/>
             </p>

            <h3 style={{color:'black'}}>A-6-Autres locutions atives </h3>
            <p style={{padding:'0 0 0 50px'}}>• Locutions d’ordre temporel : </p>
            <p style={{padding:'0 0 0 70px'}}>
                – Pour l’heure…  <br/>
                – D’ores et déjà…  <br/>
                – Sans délai…  <br/>
                – Sans tarder… <br/>
            </p>

            <p style={{padding:'0 0 0 50px'}}>• Locutions permettant de mettre l’accent sur un point :  </p>
            <p style={{padding:'0 0 0 70px'}}>
                – à titre principal…   <br/>
                – À titre exceptionnel…  <br/>
                – À titre secondaire…  
            </p>

            <p style={{padding:'0 0 0 50px'}}>• Locutions restrictives : </p>
            <p style={{padding:'0 0 0 70px'}}>
                – À l’exception de…  <br/>
                – En dépit de… <br/>
                – Sous réserve que… <br/>
            </p>

            <h3 style={{color:'black'}}>A-7-Formules de conclusion </h3>
            <p style={{padding:'0 0 0 50px'}}>
                • Il convient de… <br/>
                • Il y a lieu de…  <br/>
                • Il vous appartient de…<br/>
                • Je vous prie de…<br/>
                • Je vous invite à… <br/>
                • Je vous saurai(s) gré de…  <br/>
                • J’ai décidé que<br/>
            </p>

            <h3 style={{color:'black'}}><u>B- Les formules et le principe hiérarchique</u></h3>
            <p style={{padding:'0 0 0 50px'}}>
                • De subordonné à supérieur : conditionnel <br/>
                • De supérieur à subordonné : le présent de l’indicatif ou le futur (injonctif)<br/>
            </p>

            <center> <div style={{border: '1px black solid'}}> 
                <h3 style={{color:'black'}}><u>En conclusion</u></h3>
                <p style={{padding:'0 0 0 50px'}}>
                    • Avant de rédiger, trier et hiérarchiser les informations utiles au courrier<br/>
                    • Ne pas segmenter votre rédaction : la lettre est un tout logique<br/>
                    • Utiliser un langage simple, précis, clair et concis : une idée par phrase.<br/>
                    • Relisez votre lettre, relisez votre lettre, relisez votre lettre et n’hésitez pas à la faire relire<br/>
                </p>
            </div> </center><br/>

            <center>
            <h3 style={{color:'black'}}>LOGIGRAMME  DU  COURRIER  INTERNE</h3>
                <img src="../../images/log.PNG" style={{width:'1150px', height:'600px'}}/>
            </center><br/>
            <center>
            <h3 style={{color:'black'}}>LOGIGRAMME  DU  COURRIER  EXTERNE</h3>
                <img src="../../images/log2.PNG" style={{width:'1150px', height:'600px'}}/>
            </center><br/><br/>

            <center>
                <h3 style={{color:'black'}}><u>II-	AUTRES SUPPORTS DE LA REDACTION ADMINISTRATIVE </u></h3>
                <p style={{padding:'0 0 0 70px'}}>
                    • LA NOTE<br/>
                    • LA CIRCULAIRE<br/>
                    • LA CONVOCATION<br/>
                    • LE BORDEREAU D’ENVOI<br/>
                </p>
            </center>

            <h3 style={{color:'black'}}><u>a-LA NOTE </u></h3>
            <h3 style={{color:'black'}}><u>DEFINITION </u></h3>
            <p>Document de correspondance courant et utilisé à l'intérieur d'un même service ou d'une même administration entre deux fonctionnaires et portant sur une problématique d'ordre professionnel. 
                La note se caractérise par sa brièveté et sa concision. </p>
            <p>Document d’information interne qui s’adresse soit :</p>
            <p style={{padding:'0 0 0 70px'}}>
                – À un supérieur hiérarchique ou à un autre service <br/>
                – À un subordonné pour donner des instructions, des consignes<br/>
            </p>
        
            <h3 style={{color:'black'}}><u>LA NOTE DE CORRESPONDANCE OU NOTE DE DOSSIER  </u></h3>
            <p>Plus communément appelée note dans l'administration, elle peut être: </p>
            <p style={{padding:'0 0 0 70px'}}>
                −	une note de synthèse: de portée plus générale, elle est construite sur une analyse et/ou une synthèse ;<br/>
                −	une note administrative ou note hiérarchique de portée plus technique, elle est construite sur une analyse et/ou une synthèse d'un problème (affaire, dossier), pour aider un supérieur hiérarchique à la décision.<br/>
             </p>
            <p>Elle comporte rarement la formulation de propositions.</p>

            <h3 style={{color:'black'}}><u>PRESENTATION</u></h3>
       <p>Proche de la lettre administrative en forme administrative et contient la mention: </p>
       <p style={{padding:'0 0 0 70px'}}>
            − Pour une note adressée à un supérieur hiérarchique : “ Note à l'attention de M . . ....” <br/>
            − Pour une note adressée à un collègue : “ Note à M . . . . . . . .” <br/>
            − Pour une note adressée à un subordonné : “ Note pour M . . . . . . . .”<br/>
        </p>
       
       <p>Le destinataire sera identifié par Monsieur ou Madame + sa fonction. <br/>
            Le corps de la note peut être agrémenté de titres, sous-titres, alinéas ...</p>
        
       <h3 style={{color:'black'}}><u>b-LA CIRCULAIRE  </u></h3>
        <p>• Document en forme administrative<br/>
            • Cible descendante, puis horizontale<br/>
            • Large public<br/>
        </p>

       <h3 style={{color:'black'}}><u>c-LA CONVOCATION  </u></h3>
       <p>
            • Document destiné à convier une ou plusieurs personnes à une réunion <br/>
            • Rédigée en forme personnelle <br/>
            • Doit comporter les indications:<br/>
        </p>
       <p style={{padding:'0 0 0 70px'}}>
            – De l’objet <br/>
            – De l’objet <br/>
            – De la date et l’heure <br/>
            – Du lieu exact<br/>
        </p><br/><br/>

       <center>
            <h2 style={{color:'black'}}><u>PRESENTATION  D’UNE  NOTE  ADMINISTRATIVE OU  NOTE  HIERARCHIQUE</u></h2>
        </center>

        <div>
            <img src="../../images/logo2.PNG" style={{width:'100px', height:'100px'}}/>    
        </div>

        <div>
            <p style={{width:'150px', marginLeft:'800px',border: '1px black solid'}}>Lieu et date</p>
        </div>

        <center>
            <div style={{width:'150px',width:'300px',border: '1px black solid'}}> 
                <p>NOTE<br/>
                    A L’ATTENTION DE M…………….... <br/>
                    A L’ATTENTION DE M…………….... <br/>
                    ou <br/>
                    POUR ………….... <br/>
                    ou <br/>
                    A ………………….<br/>
                </p>
            </div> 
        </center><br/>

        <center>
            <div style={{width:'150px',width:'500px',border: '1px black solid'}}> 
                <p>Objet : (exemple : mise en œuvre actions prioritaires 2021) </p>
                <p>Réf : (les textes utilisés pour rédiger la présente note) </p>
                <p>A L’ATTENTION DE M…………….... </p>
                <p> P.J : (ou en bas dans la marge)</p>
            </div> 
        </center><br/>

        <center>
            <div style={{width:'150px',width:'500px',border: '1px black solid'}}> 
                <p>INTRODUCTION </p>
                <p>(Elle présente le sujet et rappelle le contexte) </p>
            </div> 
        </center><br/>


        <center>
            <div style={{width:'150px',width:'500px',border: '1px black solid'}}> 
                <p>DEVELOPPEMENT </p>
                <p>(Les paragraphes sont plutôt courts, en évitant les titres, sous-titres, numéros, et soulignements)</p>
            </div> 
        </center><br/>

        <center>
            <div style={{width:'150px',width:'500px',border: '1px black solid'}}> 
                <p>CONCLUSION  </p>
                <p>(Elle n’est pas obligatoire) </p>
            </div> 
        </center><br/>
        
        <center>
            <div style={{width:'150px',width:'500px',border: '1px black solid'}}> 
                <p>PAS DE FORMULE DE POLITESSE </p>
            </div> 
        </center><br/>
        
        <center>
            <div style={{width:'150px',width:'200px', marginLeft:'700px',border: '1px black solid'}}> 
                <p>
                    SIGNATURE <br/>
                    Fonction<br/>
                    Prénom + Nom<br/>
                </p>
            </div> 
        </center><br/><br/>

        <center>
            <div style={{width:'150px',width:'600px'}}> 
                <h3><u>LA REGLE D’OR </u></h3>
                <h3>Faire comprendre au destinataire du courrier un maximum de choses en lui <br/>
                    prenant le minimum de temps<br/>
                </h3>
            </div> 
        </center><br/><br/>

        <h3 style={{color:'black'}}><u>a-	LE BORDEREAU DE TRANSMISSION OU BORDEREAU D'ENVOI  </u></h3>
        <p>Document destiné à l'acheminement de pièces au sein de l'administration (entre deux services administratifs), dès lors que cette transmission n'implique pas de
             commentaires qui justifieraient la rédaction d'une lettre administrative d'accompagnement.<br/>
            Le bordereau reprend les mentions habituelles de la correspondance administrative (timbre, suscription...) et comporte un tableau composé de trois colonnes : 
        </p>
        <p style={{padding:'0 0 0 70px'}}>
            •	Colonne gauche : objet et désignation des pièces transmises ; <br/>
            •	Colonne centrale : nombre de pièces transmises ; <br/>
            •	Colonne droite : observations qui peuvent être les suivantes : <br/>
        </p>
        <p style={{padding:'0 0 0 50px'}}>-	« Pour Information » (ou à toutes fins utiles) : le destinataire n'est pas acteur mais spectateur et bien qu'il n'ait pas à intervenir. 
            Lorsque le document est adressé au destinataire pour qu'il en prenne connaissance. <br/>
            -	« Pour Attribution » (ou pour action) : le destinataire devient acteur et plusieurs cas se présentent alors : </p>
        <p style={{padding:'0 0 0 70px'}}>
            •	Pour attribution et pour suite à donner : le destinataire doit donner une suite (réponse à rédiger, réunion à organiser...) sans rendre compte à l'expéditeur ; <br/>
            •	Pour attribution et pour avis : le destinataire doit retourner un avis motivé sur le dossier que lui soumet l'expéditeur ;  <br/>
            •	Pour attribution et pour éléments de réponse : le destinataire doit fournir sous forme de notre ou de lettre les informations nécessaires à l'expéditeur afin que celui-ci, ensuite, puisse traiter l'affaire ;<br/>
            •	Pour attribution et pour retour des pièces après (signature, correction...) avec, le cas échéant, un délai précisé.<br/>
        </p>
        <p style={{padding:'0 0 0 50px'}}>
            -	« Pour Visa » lorsqu'on désire avoir l'avis d'une personne sur une affaire<br/>
            -	« Pour Approbation » lorsqu'il s'agit de l’envoi d'un document à l’autorité qui est habilitée à l'approuver<br/>
            -	« Pour notification » : dans les transmissions directes, c'est-à-dire dans le cas de l'envoi d'un document à une personne dans le but déterminé. Lorsque le document intéresse directement le destinataire. <br/>
            - « Pour exécution » : lorsque le document transmis invite son destinataire à faire telle ou telle chose. <br/>
            - « Pour la suite à donner » ou « aux fins demandées » : lorsque le document transmis appelle de la part du destinataire la prise de certaines mesures ou des certaines décisions,  <br/>
            - "Pour compétence" lorsque e l'expéditeur a reçu ni document qu'il n'a pas qualité à traiter et l'envoie à la personne compétence, (on dit "pour compétence" lorsqu'on s'adresse à un Supérieur et "pour attribution" à un Subordonné.) <br/>
            -"Pour information- "Pour compte-rendu" lorsqu'on veut informer un Supérieur d'une décision prise ou une mesure adoptée. <br/>
            - "Pour élude" ou "Pour examen" lorsqu'il s'agit d'une affaire importante ou compliquée qu'on adresse à une personne qualifiée pour qu'elle fasse connaître son point de vue après l'avoir examinée<br/>
            - "Pour renseignements" lorsqu'on désire avoir des informations, des éclaircissements sur l'affaire objet de la correspondance transmise. <br/>
            - "Pour éléments de réponse" lorsqu'on demande des renseignements utiles et nécessaires pour préparer une réponse à une correspondance reçue. Cette formule est utilisée en générale par une Autorité Supérieur qui a la qualité de prendre une décision au sujet d’une affaire. <br/>
            -	"Pour décision" lorsque les documents transmis appellent une décision et qu'il appartient au destinataire du « Soit transmis » de prendre cette décision. <br/>
            -	"Pour visa" ou "Pour visa sauf observations" lorsqu'un document doit recevoir avant sa signature l'accord de certaines autorités. <br/>
            - "Pour archives" lorsque le document doit être classé par le destinataire de la transmission. <br/>
            - " Transmis " ou " Soit transmis en communication " à Monsieur Le .... .....lorsque le document est transmis à une personne qui doit le renvoyer après en avoir pris connaissance ou l'avoir visé ou approuvé.<br/>
        </p>
        <p>   Dans les transmissions établies à l'occasion du renvoie d'un document à l'expéditeur, on emploie la formule "Transmis en retour" ou "Soit Transmis en retour" ou encore "Fait retour" à ........que l'on fait suivre d'une mention appropriée telle que :  <br/>
            " Après approbation " " Sans observation " " Après visa " '' Visa différé " Non visé " " Après nécessaires faits " " Après en avoir pris connaissance ", etc... <br/>
        </p>
        <p style={{padding:'0 0 0 50px'}}>-	"Demande Irrecevable" lorsque la transmission a rapport avec une correspondance reçue précédemment ou envoyée précédemment. I1 doit indiquer la référence de la correspondance précédente.</p>
                
        
        <center>
            <h2 style={{color:'black'}}><u>Trame  type  DE  BORDEREAU OU  DE  TRANSMISSION</u></h2>
        </center>
        
        <div> 
            <img src="../../images/logo2.PNG" alt="logo"/><br/><br/><br/>
                <p style={{padding:'0 0 0 10px'}}>  AGENCE PORTUAIRE</p>
                <p>MARITIME ET FLUVIALE</p>
                <p  style={{padding:'0 0 0 50px'}}>----------</p> 
                <p>DIRECTION GENERALE</p>
                <p  style={{padding:'0 0 0 50px'}}>----------</p> 
                <p> DIRECTION DES AFFAIRES </p>
                <p style={{padding:'0 0 0 10px'}}> FINANCIERES</p>
                <p  style={{padding:'0 0 0 50px'}}>----------</p> 
                <p>N° 0016 -APMF/DG/DAF/21 </p>
        </div> 

        <div  style={{ marginLeft:'500px'}}> 
            <p>Antananarivo le, 02 janvier 2021<br/>
                LE DIRECTEUR GENERAL</p>
            <p style={{padding:'0 0 0 70px'}}>A</p>
            <p>Monsieur LE MINISTERE DE L’ECONOMIE </p>
            <p style={{padding:'0 0 0 70px'}}> ET DES FINANCES<br/>
                ANTANANARIVO  </p>
        </div> 

        <center>
            <h2 style={{color:'black'}}><u>BORDEREAU D'ENVOI OU DE TRANSMISSION</u></h2>
        <table>
                <tr>
                    <td>DESIGNATION DES PIECES</td>
                    <td>NOMBRE</td>
                    <td>OBSERVATIONS</td>
                </tr>
                <tr>
                    <td>
                        -	Délibération n°…….-APMF/CA/2020 portant ……………..<br/>
                        -	PJ copie PV N°…….. du Conseil d’Administration du 29.11.2019 …………….<br/>
                                    TOTAL …….  
                    </td>
                    <td>
                        02<br/>
                        01<br/>
                        ____<br/>
                        03
                    </td>
                    <td>
                    « POUR VISA  et POUR APPROBATION »
                    </td>
                </tr>
            </table>
            </center><br/>
            <center>
                <h2 style={{color:'black'}}><u>Trame  type  DE   SOIT  TRANSMIS</u></h2>
            </center>
            <div> 
            <img src="../../images/logo2.PNG" alt="logo"/><br/><br/><br/>
                <p style={{padding:'0 0 0 10px'}}>  AGENCE PORTUAIRE</p>
                <p>MARITIME ET FLUVIALE</p>
                <p  style={{padding:'0 0 0 50px'}}>----------</p> 
                <p>DIRECTION GENERALE</p>
                <p  style={{padding:'0 0 0 50px'}}>----------</p> 
                <p> DIRECTION DES AFFAIRES </p>
                <p style={{padding:'0 0 0 10px'}}> FINANCIERES</p>
                <p  style={{padding:'0 0 0 50px'}}>----------</p> 
                <p>N° 0016 -APMF/DG/DAF/21 </p>
        </div> 

        <div  style={{ marginLeft:'500px'}}> 
            <p>Antananarivo le, 02 janvier 2021</p>
            <p>LE DIRECTEUR GENERAL</p>
            <p style={{padding:'0 0 0 70px'}}>A</p>
            <p>Monsieur LE MINISTERE DE L’ECONOMIE </p>
            <p style={{padding:'0 0 0 70px'}}> ET DES FINANCES</p>
            <p style={{padding:'0 0 0 70px'}}> ANTANANARIVO  </p>
        </div> 

        <center>
            <h2 style={{color:'black'}}><u>BORDEREAU D'ENVOI OU DE TRANSMISSION</u></h2>
        <table>
                <tr>
                    <td>DESIGNATION DES PIECES</td>
                    <td>NOMBRE</td>
                    <td>OBSERVATIONS</td>
                </tr>
                <tr>
                    <td>
                        -	Délibération n°…….-APMF/CA/2020 portant ……………..<br/>
                        -	PJ copie PV N°…….. du Conseil d’Administration du 29.11.2019 …………….<br/>
                                    TOTAL …….  
                    </td>
                    <td>
                        02<br/>
                        01<br/>
                        ____<br/>
                        03
                    </td>
                    <td>
                    « POUR VISA  et POUR APPROBATION »
                    </td>
                </tr>
            </table>
            </center><br/>
            <center>
                <h3 style={{color:'black'}}><u>III-	LE PROCES VERBAL (P.V) DE REUNION </u></h3>
            </center>
            <h3 style={{color:'black'}}>A/ Définition </h3>
            <p>C’est un document administratif relatant officiellement ce qui a été dit ou fait dans une réunion, une assemblée.
                 C’est le « compte rendu » formalisé d’une assemblée statutaire ou réglementaire qui constitue alors une preuve, 
                 et de ce qui a été dit, et du respect des formalités obligatoires (quorum, majorité, notes…). Il est rédigé de façon 
                 rigoureuse selon des règles strictes. Son objectif est de servir de référence, son rôle est de « faire foi ».</p>

            <h3 style={{color:'black'}}>B/ Quand rédiger un procès-verbal ?</h3>    
            <p>Le P.V. est obligatoirement rédigé après toutes les réunions « officielles », c'est-à-dire celles qui sont prévues par des 
                textes (réglementaires), ou pour relater les séances des instances ayant un pouvoir de décision. </p>
            <p> Exemples : </p>
            <p style={{padding:'0 0 0 70px'}}>
                − Réunions paritaires : Commissions,…<br/>
                − Autres réunions : Directions, Staff APMF… <br/>
            </p>
        
            <h3 style={{color:'black'}}>C/ Qui signe le procès-verbal ? </h3>
            <p>Le P.V. est toujours signé du DG et établi par un secrétaire ou secrétaire de séance. Celui-ci est désigné parmi les participants de la
                 réunion et peut-être la/le secrétaire, l’assistant(e) du DG, invité(e) pour l’occasion.</p>
            <p>Présentation type : </p>

            <p style={{ marginLeft:'400px'}}>
                 Le secrétaire (de séance)<br/>
                (Signature)  <br/>
            </p>                                                             
            <p style={{ marginLeft:'700px'}}>
                 Le Directeur Général  <br/>
                (Signature)  <br/>
            </p> 

            <p>Pour des réunions paritaires, un secrétaire adjoint, pour respecter la parité, est désigné par l’ensemble des participants à la réunion. Il y 
                aura donc 3 personnes qui signeront le procès-verbal.</p>
            <p style={{color:'black'}}><u>Présentation type :  </u></p>
            <p style={{ marginLeft:'400px'}}>
                 Le secrétaire (de séance)<br/>
                (Signature)  <br/>
            </p>                                                             
            <p style={{ marginLeft:'700px'}}>
                 Le Directeur Général<br/>
                (Signature)  <br/>
            </p> 
            <p style={{ marginLeft:'400px'}}> Le Directeur adjoint <br/>
                (Signature)  <br/>
            </p> 

            <h3 style={{color:'black'}}>D/ Comment est approuvé le procès-verbal ?</h3>
            <p>Dans la plupart des cas, pour être valable, le procès-verbal doit être approuvé par l’ensemble des participants, à la majorité absolue, généralement
                 lors de la séance suivante.</p><br/><br/>

            <center>
                <h3 style={{color:'black'}}><u>Trame type d’un procès-verbal de réunion</u></h3>
            </center>

            <img src="../../images/logo2.PNG"/><br/><br/><br/>
            <p style={{ marginLeft:'700px'}}>
                PROCES-VERBAL DE (LA REUNION, LA SEANCE)  <br/>
                du (date) <br/>
                de (LA COMMISSION, LE COMITE, LE STAFF…)<br/>
            </p>
            <p style={{padding:'0 0 0 70px'}}>Le (date) à (horaire) s’est tenue à (lieu), sous la présidence de M. (nom et fonction) le/la (objet) …</p>
            <p> Ou  </p>
            <p style={{padding:'0 0 0 70px'}}>Le (date) à (horaire) se sont réunis à (lieu) les membres du/de (instance), sous la présidence de M. (nom et fonction).  </p>
            <p style={{color:'black'}}>Présents : </p>
            <p style={{ padding:'0 0 0 70px'}}>
                - M. (nom et fonction) <br/>
                - M. … <br/>
            </p>
            <p>Ou  </p>
            <p style={{color:'black'}}>Représentants de l’Administration : </p>
            <p style={{ padding:'0 0 0 70px'}}>
                − M. (nom et qualité) <br/>
                − M. … <br/>
                − M. …<br/>
            </p>
            <p style={{color:'black'}}>Représentants des syndicats : </p>
            <p style={{ padding:'0 0 0 70px'}}>
                − M. (nom et qualité) <br/>
                − M. …  <br/>
            </p>
            <p style={{color:'black'}}>Excusés : </p>
            <p style={{ padding:'0 0 0 70px'}}>-M. (nom et fonction) </p>
            <p>M. (le Président de la séance) souhaite la bienvenue à tous les membres (le cas échéant). Après avoir vérifié que le quorum est atteint (si besoin de calculer le quorum), 
                il ouvre la séance. <br/>
                Avant la lecture de l’ordre du jour, M. (nom et qualité ou fonction) sollicite l’attention de l’auditoire pour …. (Préciser l’objet), le cas échéant.  <br/>
                M. (nom) est désigné secrétaire par les membres de la réunion, le cas échéant.  <br/>
                M. (nom) est nommé secrétaire adjoint par les membres / les représentants du personnel, le cas échéant.  <br/>
            </p>
            <h3>APPROBATION DU PROCES VERBAL, séance du (préciser la date)  </h3>
            <p>M. (nom) soumet à approbation ce procès-verbal qui est adopté à l’unanimité.   <br/>
                M. (nom) est désigné secrétaire par les membres de la réunion, le cas échéant.   <br/>
                M. (nom) est nommé secrétaire adjoint par les membres / les représentants du personnel, le cas échéant.   <br/>
                L’ordre du jour est le suivant :   <br/>
            </p>
            <p style={{ padding:'0 0 0 70px'}}>- point A  <br/>
                - point B <br/>
                - point C <br/>
                - …  <br/>
                - Questions diverses <br/>
            </p>

            <h3 style={{color:'black'}}>DEVELOPPEMENT: </h3>
            <p>Chacun des points de l’ordre du jour est repris dans l’ordre (plan chronologique) et développé. </p>

            <h3 style={{color:'black'}}>CONCLUSION: </h3>
            <p>Dans les procès-verbaux, comme dans les comptes rendus de réunion, il s’agit souvent d’une phrase type rappelant que tous les points de l’ordre du jour ont été abordés.<br/>
                L’ordre du jour étant épuisé<br/>
                Ou<br/>
                Plus aucune autre question n’étant soulevée, la séance est levée à (horaire).<br/>
                La prochaine réunion aura lieu le, (date) à (heure) à… (Endroit).<br/>
            </p>
            <p style={{ marginLeft:'700px'}}>Le secrétaire  <br/> 
                Le Directeur Général  <br/>
            </p>
            <p style={{ marginLeft:'400px'}}>Le secrétaire-adjoint </p>

            <p style={{ padding:'0 0 0 70px',color:'black'}}>Nota bene </p>
            <p style={{ padding:'0 0 0 90px'}}>
                − Le secrétaire est la personne qui est chargée de rédiger le procès-verbal;   <br/>
                − Il est appelé également secrétaire de séance  <br/>
            </p>

            <center>
                <h3 style={{color:'black'}}><u>IV-	LE COMPTE RENDU DE REUNION </u></h3>
            </center>
            <h3 style={{ color:'black'}}><u>Définition</u></h3>
            <p>C’est un document administratif synthétique qui ne compile que les idées essentielles. IL est rédigé de façon simple, sans règles précises, mais peut faire l’objet d’une présentation type « procès-verbal ». <br/>
                Il peut être exhaustif ou sélectif, c’est alors un relevé de conclusion (ou d’informations ou de décisions).<br/>
            </p>
            <center>
                <h3 style={{color:'black'}}><u>Trame type d’un compte rendu de réunion</u></h3>
            </center>
            <img src="../../images/logo2.PNG"/><br/><br/><br/>
            <p style={{ marginLeft:'700px'}}>
                COMPTE – RENDU<br/>
                de la réunion du (objet) relative <br/>
            </p>
            <p style={{ marginLeft:'750px'}}>à ….</p>
            <p style={{padding:'0 0 0 70px'}}>Le (date) à (horaire) s’est tenue à (lieu), sous la présidence de M. (nom et fonction) le/la (objet) …</p>
            <p style={{color:'black'}}>Présents : </p>
            <p style={{ padding:'0 0 0 70px'}}>
                - M. (nom et fonction), <br/>
                − M. … <br/>
                − M. …<br/>
            </p>
            <p style={{color:'black'}}>Excusés (le cas échéant)</p>
            <p style={{ padding:'0 0 0 70px'}}>
                − M. (nom et fonction) <br/>
                − M. … <br/>
            </p>
            <h3 style={{color:'black'}}>DEVELOPPEMENT </h3>
            <p>(Ordre chronologique ou logique) <br/>
                L’ordre du jour étant épuisé, la séance est levée à (horaire) <br/>
                Une prochaine réunion est fixée le (date) à (horaire).<br/>
            </p>
            <center>
                <p>SIGNATURE</p>
            </center>
            <center>
                <h3 style={{color:'black'}}>LOGIGRAMME D’UNE REUNION</h3>
                <img src="../../images/reu2.PNG" style={{width:'1150px', height:'600px'}}/><br/><br/><br/>
            </center>
           
            <center>
                <h3 style={{color:'black'}}>LOGIGRAMME D’UN PROCES VERBAL DE REUNION</h3>
                <img src="../../images/reu3.PNG" style={{width:'1150px', height:'600px'}}/><br/><br/><br/>
            </center><br/>
        
            <center>
                <h3 style={{color:'black'}}><u>V-	COMPARAISON PROCES VERBAL ET COMPTE RENDU</u></h3>
            </center>
            <h3 style={{color:'black'}}>A/ Points communs et différences </h3>
            <table>
                <tr>
                    <td style={{color:'black'}}>PROCES VERBAL</td>
                    <td style={{color:'black'}}>COMPTE RENDU</td>
                </tr>
                <tr>
                    <td>
                        - Très précis <br/>
                        - Document d’ordre interne/externe <br/>
                        - Relate des constatations matérielles ou des paroles  <br/>
                        - Il a une valeur officielle indiscutable (jusqu’à preuve du contraire). <br/>
                        - Il a un caractère contradictoire.
                        - Son développement est variable. Mais sa rédaction ne doit porter que sur des éléments concrets, sans appréciations ou observations<br/>
                        - L’objectivité doit être sa qualité essentielle   <br/>
                        - On doit pouvoir le communiquer à toute autorité compétente et aux intéressés en cas de litige.  <br/>  
                        - Etat de présences, excusés, absences <br/>
                        - Indication du président de séance      <br/>     
                        - Quorum (pour réunions paritaires)<br/>
                        - Ouverture de la séance par le Président  <br/>
                        - Nomination d’un secrétaire de séance + un secrétaire adjoint (personnel) <br/>
                        - Feuille émargement + délégation de pouvoirs <br/>
                        Approbation du précédent PV Respect <br/>
                        de l’ordre du jour <br/>
                        Clôture de la séance (date et heure) <br/>
                        Signé et daté du jour <br/>
                        Signé par le Président, le secrétaire, <br/>
                        le secrétaire adjoint <br/>
                        Pièces jointes -- annexes <br/>
                        Neutralité du ton <br/>
                        Rédigé au présent de l’indicatif <br/>
                        Les intervenants sont identifiés,<br/>
                        Vocabulaire précis <br/>
                        Reproduction très fidèle (constatations) <br/>
                        Pas de transitions ni d’articulations<br/>
                    </td>
                    <td>
                        - Moins précis <br/>
                        - Document d’ordre interne à la structure <br/>
                        - Destiné à informer les personnes non-présentes à la réunion ou à rappeler aux personnes présentes ce qui s’est passé <br/>
                        - Sa valeur officielle n’est que relative. <br/>
                        - Il n’est pas contradictoire. <br/>
                        - Il est plus ou moins bref, plus ou moins détaillé. Il peut comporter lui aussi des déclarations. <br/>
                        - Il peut, en certains cas, être accompagné d’appréciations ou d’observations d’ordre interne. - Sa diffusion est laissée à l’appréciation du responsable de la réunion. <br/>
                        - Etat de présences, voire excusés et absences <br/>
                        - Indication éventuelle du Président de séance <br/>
                        -Pas de quorum <br/>
                        - Pas d’ouverture de séance obligatoire <br/>
                        - Pas de formalisme sur le preneur de notes <br/>
                        - Feuille d’émargement <br/>
                        Pas de formalisme <br/>
                        Clôture facultatif de la séance <br/>
                        Signé, voire daté, lors de sa réalisation Signé par le Président de séance <br/>
                        Pièces jointes -- annexes <br/>
                        Neutralité du ton <br/>
                        Utilisation facultative du présent <br/>
                        Les intervenants ne sont pas forcément nommés <br/>
                        Reproduction fidèle <br/>
                        Transitions, mots de liaisons<br/>
                    </td>
                </tr>
            </table><br/><br/>

            <h3 style={{color:'black'}}>B/ Vocabulaire utilisé pour la rédaction du C.R. et du P.V.</h3><br/>
            <table style={{width:'1150px', height:'600px'}}>
                <tr>
                    <td style={{color:'black'}}>Pour mettre en valeur une opinion, un point de vue</td>
                    <td style={{color:'black'}}>Pour exprimer des craintes</td>
                </tr>
                <tr>
                        <td>
                            Souligner <br/>
                            Préciser, ajouter <br/>
                            Faire apparaître que <br/>
                            Mettre en lumière <br/>
                            Faire remarquer <br/>
                            Noter <br/>
                            Dégager <br/>
                            Suggérer<br/>
                        </td>
                        <td>
                            Emettre des réserves quant à.. <br/>
                            Suggérer<br/>
                            Regretter que.. <br/>
                            S’inquiéter de.. <br/>
                            Déplorer<br/>
                        
                        </td>
                </tr>
                <tr>
                    <td style={{color:'black'}}>Pour traduire l’accord et plus	Pour traduire l’opposition</td>
                    <td style={{color:'black'}}>Pour traduire l’opposition</td>
                </tr>
                <tr>
                        <td>
                            Confirmer  <br/>
                            Appuyer  <br/>
                            Donner son assentiment  <br/>
                            Témoigner de l’intérêt pour  <br/>
                            Acquiescer <br/>
                            Approuver  <br/>
                            Exprimer sa préférence : privilégier  <br/>
                            Plaider pour <br/>

                        </td>
                        <td>
                            Nier <br/>
                            Rétorquer <br/>
                            Réfuter <br/>
                            Désapprouver <br/>
                            Marquer son désaccord<br/>
                            Infirmer <br/>
                            Objecter <br/>
                            Contester<br/>
                        </td>
                </tr>
            </table><br/>


            <h3 style={{color:'black'}}>C/ Récapitulatif du compte rendu et du procès-verbal</h3><br/>
            <table style={{width:'1150px', height:'600px'}}>
                <tr>
                    <td></td>
                    <td style={{color:'black'}}>Le compte-rendu</td>
                    <td style={{color:'black'}}>Le procès-verbal</td>

                </tr>
                <tr>
                        <td  style={{color:'black'}}>
                            Objectif 
                        </td>
                        <td>
                            informer
                        </td>
                        <td>
                            « faire foi de »
                        </td>
                </tr>
                <tr>
                        <td  style={{color:'black'}}>
                            Méthode
                        </td>
                        <td>
                            Document sélectif : résumé
                        </td>
                        <td>
                            Document exhaustif
                        </td>
                </tr>
                <tr>
                        <td  style={{color:'black'}}>
                            Structure
                        </td>
                        <td>
                        Plan logique (par thème)<br/>
                        Ou chronologique
                        </td>
                        <td>
                            Plan chronologique
                        </td>
                </tr>
                <tr>
                        <td  style={{color:'black'}}>
                            Forme  
                        </td>
                        <td>
                            Emprunt de souplesse 
                        </td>
                        <td>
                            Très rigoureuse
                        </td>
                </tr>
                <tr>
                        <td  style={{color:'black'}}>
                            Mentions obligatoires  
                        </td>
                        <td>
                            Date<br/>
                            Heure<br/>
                            Liste des participants<br/>
                        </td>
                        <td>
                            Date/heure<br/>
                            Liste des participants<br/>
                            Signature du Président et du <br/>
                            secrétaire de la séance<br/>
                        </td>
                </tr>
            </table><br/><br/>
            <center>
                <h3 style={{color:'DodgerBlue'}}><u>Apports  de  langage</u></h3><br/>
            </center>

            <h3 style={{color:'black'}}>A/ Petit lexique de vocabulaire </h3><br/>
            <p>ABROGATION : abolition d’une disposition législative ou réglementaire ; </p>
            <p>ACTE ADMINISTRATIF : décision prise par l'Administration et créant des droits et obligations à l’égard des administrés. </p>
            <p> ADOPTER : approuver, voter ; </p>
            <p> AFFERENT : qui se rapporte à ; </p>
            <p> AGENT : terme général désignant la personne employée dans une administration ; </p>
            <p>AJOURNER : reporter un jugement ou une décision à une date ultérieure ; </p>
            <p>AMENDER : modifier un projet de texte ; </p>
            <p> AMPLIATION : copie authentique d’un acte, dont l’original est conservé par le service émetteur ; </p>
            <p>ANNEXES : pièces jointes à un document administratif ; </p>
            <p>ARRETE : décision écrite d’une autorité administrative (ministre, préfet, maire) ; </p>
            <p> ASSUJETTIR : soumettre à une taxe ou un impôt, </p>
            <p>AVENANT : acte modifiant les clauses d’un contrat. </p>
            <p>BORDEREAU : imprimé servant de lettre d’envoi de documents entre services administratifs ;</p> 
            <p>CI-JOINT : signifie « joint à ceci », s'accorde avec son complément lorsque celui-ci est placé avant, autrement invariable ; les documents ci-joints ; </p>
            <p>COMMISSION ADMINISTRATIVE PARITAIRE (CAP) : commission dans laquelle l'Administration et le personnel sont représentés par moitié et statuant sur les situations statutaires des personnels ; </p>
            <p>COMMUNIQUER, COMMUNICATION : être en relation (échanger) ou transmettre (par exemple un document), à charge de retour ; </p>
            <p>COMPETENCE : droit d’une autorité à connaître d’une action, «cette affaire est de la compétence du préfet » ; COMPTE RENDU : exposé, relation, rapport d’un événement, d’une situation, d’une réunion ; </p>
            <p>CONTRESEING : deuxième signature apposée sur un acte pour authentifier la première ou indiquer un engagement solidaire ; </p>
            <p>COPIE CONFORME : concordance de la copie avec l’original, sans pour autant la rendre authentique ; DECENTRALISATION : transfert de compétences à des collectivités territoriales autonomes, avec un contrôle à postériori par le préfet.</p> 
            <p> DECONCENTRATION : délégation du pouvoir de décision à des autorités administratives déconcentrées (la DDCS par exemple), mais restant soumises au pouvoir hiérarchique de l'État (et son représentant le préfet).</p>
            <p>DELEGATION DE SIGNATURE : transfert de pouvoir(s) permettant à un fonctionnaire d’agir au lieu et place d’un autre fonctionnaire ; </p>
            <p>DELIBERATION : examen d’une question par un groupe de personnes et suivi d'une décision ; </p>
            <p>DEROGATION : exception par rapport à ce qui est prévu par la réglementation ; </p>
            <p>DESSAISIR : retirer à un juge ou à une autorité administrative une affaire préalablement soumise à sa décision ; </p>
            <p>DISPOSITION : point qui règle un texte législatif ou réglementaire ; </p>
            <p>ERREMENTS : manière habituelle d’agir (≠ erreurs, fautes) ; </p>
            <p>EXERCICE : durée dans laquelle s’inscrit normalement une procédure ; </p>
            <p>EXONERER : dispenser d’un paiement ou d’une obligation de faire ; </p>
            <p>EXPOSER : expliquer, faire connaître ; </p>
            <p>FONCTIONS : activités et tâches exercées par un agent ; </p>
            <p>GRE : savoir gré = être reconnaissant ; </p>
            <p>HIERARCHIE : subordination des fonctionnaires les uns aux autres ; </p>
            <p>INCIDENCE : effet, conséquence ; </p>
            <p>INSTRUCTION(S) : prescription(s) donnée(s) par l’autorité supérieure relative à l’interprétation et à l’application d’une loi, d’un règlement ; </p>
            <p>INTERPRETATION : donner une signification, une explication à un texte ; </p>
            <p>JUSTIFIER : prouver le bien fondé ; </p>
            <p>LIQUIDER : calculer ; </p>
            <p>MANDATER : payer ; </p>
            <p>MESURE : décision prise par une autorité administrative ; </p>
            <p>MODALITES : terme courant désignant la forme d’un acte, d’un fait et les circonstances qui s’y rapportent ; </p>
            <p>MOYEN : argument juridique invoqué à l’appui d’une demande ou d’une défense en justice ; </p>
            <p> NOTIFIER : porter une décision à la connaissance de l’intéressé ; </p>
            <p>OBJET : « nature de la demande », terme très courant désignant ce sur quoi porte une affaire, une décision, un droit, une obligation, une démarche, une conversation… ; </p>
            <p>PRENDRE ACTE DE : prendre bonne note de, (ex : « je prends acte de votre décision ») ; </p>
            <p> PRENDRE L’ATTACHE DE : se rapprocher de, prendre contact avec ; </p>
            <p>PROCES VERBAL : compte rendu officiel et écrit de ce qui a été dit ou fait au cours d’une réunion; </p>
            <p>REFERENCE : indication des documents ou évènements antérieurs auxquels se rapporte l'affaire traitée, placée sous l’objet dans une lettre administrative ; </p>
            <p>RELATIF A : terme très courant signifiant « se rapportant à » ; </p>
            <p>REQUETE : demande verbale ou écrite : adresser une requête ;</p> 
           <p> RESERVE : restriction ; sous réserve de ; sous condition de ;</p>
           <p> SAISIR : demander à une autorité ou à un juge de se prononcer ; </p>
           <p> SOUMETTRE : adresser pour examen, pour décision ; </p>
           <p>STATUER : prendre une décision sur une affaire, un cas ; se prononcer </p>
           <p>SURSEOIR : interrompre momentanément les effets d’un texte ; </p>
           <p>SUSCRIPTION : identification de l’autorité émettrice et du destinataire dans une forme impersonnelle et dans une lettre en forme administrative ; </p>
           <p> SUSPENDRE : interrompre les effets d’un texte réglementaire, d’une décision ; </p>
           <p>TIMBRE : informations sur le service émetteur à l'origine du courrier, placées en haut et à gauche dans une lettre administrative ; </p>
           <p>VISER : attester par une signature, que l’on a pris connaissance d’un document, se référer à ; </p>
           <p>VOIE HIERARCHIQUE : succession des autorités administratives intermédiaires placées entre l’expéditeur (émetteur) et le destinataire (récepteur) d'une lettre administrative ;</p>

           {/* <p>
                ABROGATION : abolition d’une disposition législative ou réglementaire ; <br/>
                ACTE ADMINISTRATIF : décision prise par l'Administration et créant des droits et obligations à l’égard des administrés. <br/>
                ADOPTER : approuver, voter ; <br/>
                AFFERENT : qui se rapporte à ; <br/>
                AGENT : terme général désignant la personne employée dans une administration ; <br/>
                AJOURNER : reporter un jugement ou une décision à une date ultérieure ; <br/>
                AMENDER : modifier un projet de texte ; <br/>
                AMPLIATION : copie authentique d’un acte, dont l’original est conservé par le service émetteur ; <br/>
                ANNEXES : pièces jointes à un document administratif ; <br/>
                ARRETE : décision écrite d’une autorité administrative (ministre, préfet, maire) ; <br/>
                ASSUJETTIR : soumettre à une taxe ou un impôt, <br/>
                AVENANT : acte modifiant les clauses d’un contrat. <br/>
                BORDEREAU : imprimé servant de lettre d’envoi de documents entre services administratifs ;<br/> 
                CI-JOINT : signifie « joint à ceci », s'accorde avec son complément lorsque celui-ci est placé avant, autrement invariable ; les documents ci-joints ; <br/>
                COMMISSION ADMINISTRATIVE PARITAIRE (CAP) : commission dans laquelle l'Administration et le personnel sont représentés par moitié et statuant sur les situations statutaires des personnels ; <br/>
                COMMUNIQUER, COMMUNICATION : être en relation (échanger) ou transmettre (par exemple un document), à charge de retour ; <br/>
                COMPETENCE : droit d’une autorité à connaître d’une action, «cette affaire est de la compétence du préfet » ; COMPTE RENDU : exposé, relation, rapport d’un événement, d’une situation, d’une réunion ; <br/>
                CONTRESEING : deuxième signature apposée sur un acte pour authentifier la première ou indiquer un engagement solidaire ; <br/>
                COPIE CONFORME : concordance de la copie avec l’original, sans pour autant la rendre authentique ; DECENTRALISATION : transfert de compétences à des collectivités territoriales autonomes, avec un contrôle à postériori par le préfet.<br/> 
                DECONCENTRATION : délégation du pouvoir de décision à des autorités administratives déconcentrées (la DDCS par exemple), mais restant soumises au pouvoir hiérarchique de l'État (et son représentant le préfet).<br/>
                DELEGATION DE SIGNATURE : transfert de pouvoir(s) permettant à un fonctionnaire d’agir au lieu et place d’un autre fonctionnaire ; <br/>
                DELIBERATION : examen d’une question par un groupe de personnes et suivi d'une décision ; <br/>
                DEROGATION : exception par rapport à ce qui est prévu par la réglementation ; <br/>
                DESSAISIR : retirer à un juge ou à une autorité administrative une affaire préalablement soumise à sa décision ; <br/>
                DISPOSITION : point qui règle un texte législatif ou réglementaire ; <br/>
                ERREMENTS : manière habituelle d’agir (≠ erreurs, fautes) ; <br/>
                EXERCICE : durée dans laquelle s’inscrit normalement une procédure ; <br/>
                EXONERER : dispenser d’un paiement ou d’une obligation de faire ; <br/>
                EXPOSER : expliquer, faire connaître ; <br/>
                FONCTIONS : activités et tâches exercées par un agent ; <br/>
                GRE : savoir gré = être reconnaissant ; <br/>
                HIERARCHIE : subordination des fonctionnaires les uns aux autres ; <br/>
                INCIDENCE : effet, conséquence ; <br/>
                INSTRUCTION(S) : prescription(s) donnée(s) par l’autorité supérieure relative à l’interprétation et à l’application d’une loi, d’un règlement ; <br/>
                INTERPRETATION : donner une signification, une explication à un texte ; <br/>
                JUSTIFIER : prouver le bien fondé ; <br/>
                LIQUIDER : calculer ; <br/>
                MANDATER : payer ; <br/>
                MESURE : décision prise par une autorité administrative ; <br/>
                MODALITES : terme courant désignant la forme d’un acte, d’un fait et les circonstances qui s’y rapportent ; <br/>
                MOYEN : argument juridique invoqué à l’appui d’une demande ou d’une défense en justice ; <br/>
                NOTIFIER : porter une décision à la connaissance de l’intéressé ; <br/>
                OBJET : « nature de la demande », terme très courant désignant ce sur quoi porte une affaire, une décision, un droit, une obligation, une démarche, une conversation… ; <br/>
                PRENDRE ACTE DE : prendre bonne note de, (ex : « je prends acte de votre décision ») ; <br/>
                PRENDRE L’ATTACHE DE : se rapprocher de, prendre contact avec ; <br/>
                PROCES VERBAL : compte rendu officiel et écrit de ce qui a été dit ou fait au cours d’une réunion; <br/>
                REFERENCE : indication des documents ou évènements antérieurs auxquels se rapporte l'affaire traitée, placée sous l’objet dans une lettre administrative ; <br/>
                RELATIF A : terme très courant signifiant « se rapportant à » ; <br/>
                REQUETE : demande verbale ou écrite : adresser une requête ;<br/> 
                RESERVE : restriction ; sous réserve de ; sous condition de ;<br/>
                SAISIR : demander à une autorité ou à un juge de se prononcer ; <br/>
                SOUMETTRE : adresser pour examen, pour décision ; <br/>
                STATUER : prendre une décision sur une affaire, un cas ; se prononcer <br/>
                SURSEOIR : interrompre momentanément les effets d’un texte ; <br/>
                SUSCRIPTION : identification de l’autorité émettrice et du destinataire dans une forme impersonnelle et dans une lettre en forme administrative ; <br/>
                    SUSPENDRE : interrompre les effets d’un texte réglementaire, d’une décision ; <br/>
                TIMBRE : informations sur le service émetteur à l'origine du courrier, placées en haut et à gauche dans une lettre administrative ; <br/>
                VISER : attester par une signature, que l’on a pris connaissance d’un document, se référer à ; <br/>
                VOIE HIERARCHIQUE : succession des autorités administratives intermédiaires placées entre l’expéditeur (émetteur) et le destinataire (récepteur) d'une lettre administrative ;<br/>
        </p> */}

           <h3 style={{color:'black'}}>B/ Expressions et tournures administratives </h3><br/>
           <p style={{color:'black'}}> <u>1)Concernant l’introduction</u></p>

           <p style={{color:'black'}}>1-1-	Pour répondre ou faire suite à (lettre de réponse):</p>
           <p> - Comme suite à (et non « suite à ») en début de correspondance; <br/>
            - Par lettre du, par lettre ci-dessus référencée, en réponse à votre lettre du; <br/>
            - Par communication (conversation) téléphonique du… (S’il y a déjà eu un échange sur la question traitée, il sera utile d’y faire référence, même s’il n’y a pas de trace écrite);<br/> 
            - Vous avez appelé (attiré) mon attention sur, vous souhaitez connaître.</p> 

            <p style={{color:'black'}}>1-2-	Pour attirer l'attention du destinataire, poser une problématique, demander :</p>
           <p> - Dans le cadre de, lors d'un … (on rappelle le contexte); <br/>
                - En poste à ... (on rappelle sa situation); <br/>
                - Le décret relatif à …….précise que … (on introduit 1 réglementation).<br/>
                </p> 

            <p style={{color:'black'}}> <u>2)Concernant le développement </u></p>
            <p style={{color:'black'}}>2-1- Pour introduire le développement, concourir à l’analyse:</p>
            <p>- « J’ai l’honneur de porter à votre connaissance les informations suivantes »; <br/>
            - « Je constate, je note, je prends note, j’observe, j’ajoute, je précise, je souligne, je rappelle, je considère, je signale », <br/>
            - « Au vu des éléments portés à ma connaissance, au vu de votre dossier, sous réserve de »; <br/>
            - « Il apparaît que, il semble que»;<br/>
            - « Cette situation appelle les observations suivantes ». </p>

            <p style={{color:'black'}}>2-2- Pour conclure le développement, pour prendre position </p>
            <p>- « J’ai l’honneur de porter à votre connaissance, de vous faire savoir que»;<br/>
                - « Il s'avère que, il convient de, il y a lieu de, il apparaît nécessaire que » (notion de conseil); <br/>
                - « Il est impératif que… » (Notion d’obligation et /ou d’urgence) ; <br/>
                - « Il vous revient de, il vous appartient de» ; <br/>
                - « Je vous prie de bien vouloir /de vouloir bien (plus injonctif) ; <br/>
                - « Je prends la décision de, je confirme, je vous demande» ; <br/>
                - « Je vous invite à, je suggère, je vous engage, je vous prie de » ; <br/>
                - « Je vous saurai(s) gré de (attention : savoir gré et non pas être gré !) ; <br/>
                - « Je vous serai(s) obligé (être), reconnaissant de ».</p>
                
            <p style={{color:'black'}}> <u>Nota bene: </u></p>
            <p style={{color:'black'}}> L’expression, très administrative, « j’ai l’honneur », bien que contestée et moins utilisée, continue malgré tout de caractériser
             la correspondance administrative, en apportant une certaine solennité.</p>

             <p style={{color:'black'}}> <u>3)	Concernant la conclusion-fin de lettre </u></p>
             <p>- « Je vous prie d’agréer, Madame, Monsieur, l’expression de ma considération distinguée », (pour une lettre en forme personnelle); <br/>
            - « Vous me tiendrez informé de la réalisation de l’ensemble de vos obligations », (pour une lettre en forme administrative); <br/>
            - « Je reste à votre disposition pour toute information complémentaire », (pour une lettre en forme administrative).</p>

            <p style={{color:'black'}}> <u>RAPPEL :  </u></p>
            <p style={{color:'black'}}> En tant que rédacteur, vous devez toujours faire en sorte que le destinataire de votre courrier, qui est aussi votre lecteur, soit en
             mesure de comprendre et d’apprécier la ou les démarches qui lui incombent, les informations que vous lui communiquer. <br/>
                Par conséquent, vous veillerez à utiliser un langage le plus clair possible, en évitant le verbiage administratif et les formulations surannées.</p>
            <center>
                <h3 style={{color:'DodgerBlue'}}><u>Mots de liaison, articulations et autres connecteurs</u></h3><br/>
                <h3 style={{color:'black'}}>A. Pour introduire une explication </h3>
                <p>- Car,<br/>
                - C'est-à-dire,<br/>
                - En effet (s’utilise après une affirmation démontrée immédiatement).</p>
                <h3 style={{color:'black'}}>B .Pour introduire un exemple </h3>
                <p>- Ainsi,<br/>
                - Par exemple,<br/>
                - Notamment.</p>
                <h3 style={{color:'black'}}>C. Pour introduire une reformulation (pour clarifier l’information)</h3>
                <p>- Autrement dit,<br/>
                - Dans votre situation,<br/>
                - En ce qui vous concerne,<br/>
                - En d’autres termes.</p>
                <h3 style={{color:'black'}}>D. Pour introduire une argumentation, développer une même idée, énumérer</h3>
                <p> -Aussi (avec inversion du sujet),<br/>
                - D’abord, ensuite, enfin,<br/>
                - En premier lieu, en second lieu,<br/>
                - D’une part, d’autre part,<br/>
                - A titre principal, à titre subsidiaire,<br/>
                - Par ailleurs,<br/>
                - En outre,<br/>
                - De plus,<br/>
                - Enfin.</p>
                <h3 style={{color:'black'}}>E. Pour enchaîner avec un paragraphe précédent</h3>
                <p>- Par suite,<br/>
                - De ce fait,<br/>
                - En dépit de.</p>
                <h3 style={{color:'black'}}>F. Pour lier une idée qui se rapporte à une autre</h3>
                <p>- relatif à,<br/>
                - concernant,<br/>
                - ayant trait à,<br/>
                - dans le cadre de,<br/>
                - dans le but de,<br/>
                - en vue de.</p>
                <h3 style={{color:'black'}}>G. Pour citer un argument précis, particulier</h3>
                <p>- Notamment,<br/>
                - Particulièrement, en particulier,<br/>
                - A cet égard, à ce sujet,<br/>
                - Entre autre,<br/>
                - En l’objet,<br/>
                - Précisément.</p>
                <h3 style={{color:'black'}}>H. Pour appuyer un argument, objectiver une décisionn </h3>
                <p>- En application de ou par application de,<br/>
                - Conformément à,</p>
                <h3 style={{color:'black'}}>I. Pour introduire une restriction, contraster avec une idée, un paragraphe précédent </h3>
                <p>- Or,<br/>
                - En revanche,<br/>
                - Au contraire,<br/>
                - Cependant,<br/>
                - Mais,<br/>
                - Néanmoins,<br/>
                - Pourtant,<br/>
                -Toutefois,<br/>
                - A l’exception de, à l’exclusion de,<br/>
                - Sous réserve que, pour autant que, dans la mesure où.</p>
                <h3 style={{color:'black'}}>J. Pour introduire une conclusion, une conséquence (du développement)</h3>
                <p>- Donc,<br/>
                - En conséquence,<br/>
                - En définitive,<br/>
                - Dans ces conditions……compte tenu de,<br/>
                - Pour toutes ces raisons,<br/>
                - En conclusion,<br/>
                - En résumé,<br/>
                - Par suite,<br/>
                - Pour ces motifs, à cet effet.</p>
            </center><br/><br/>
            <center>
                <h3 style={{color:'DodgerBlue'}}><u>Rédaction des courriels</u></h3>
            </center>
            <h3 style={{color:'black'}}>A-DEFINITION </h3>
            <p> Le courriel est l’appellation du courrier électronique (message + messagerie électronique), qui se substitue au mail et à l’e-mail 
                (abréviation de « electronic mail »)</p>
            <h3 style={{color:'black'}}>1-	Cadre juridique  </h3>
            <p>Dorénavant, l’écrit sur support électronique est admis en preuve au même titre que l’écrit sur support papier, sous réserve que puisse être dûment identifiée
                 la personne dont l’écrit émane et qu’il soit établi et conservé dans des conditions de nature à en garantir l’intégrité ». <br/>
            De plus, la signature électronique a la même valeur juridique que la signature manuscrite, sous réserve que le procédé de signature électronique soit fiable ». <br/>
            Autrement dit, la norme a défini les conditions à respecter pour que ces procédés puissent être considérés comme sécurisés et bénéficier de la présomption de fiabilité. </p>
            <h3 style={{color:'black'}}>2-	Confidentialité du courriel  </h3>
            <p>Celle-ci reste limitée. En effet, un message expédié est relayé par divers ordinateurs vers un serveur de courrier où il est entreposé jusqu’à ce qu’il soit lu. <br/>
            Tout au long du trajet, il peut avoir été copié par des opérations automatiques visant à faire des copies de sécurité.</p>
        
            <h3 style={{color:'black'}}>B-	REDACTION </h3>
            <h3 style={{color:'black'}}>1-	Objet du message :  </h3>
            <p>L’objet doit décrire clairement le message. <br/>
                Exemple : Annulation réunion du STAFF du 08/03/21      et pas :      c’est annulé </p>

            <h3 style={{color:'black'}}>2-	CC et CCI/BCC :</h3>
            <p> Liste de destinataires auxquels une copie d’un courriel est envoyée. <br/>
                - CC : copie conforme. <br/>
                La liste des destinataires est visible par tous les récepteurs du courriel et chaque destinataire sait ainsi à quelles personnes le courriel a été envoyé. <br/>
                - CCI ou BCC : copie conforme invisible. <br/>
                La liste des destinataires est invisible de tous les récepteurs.</p>

            <h3 style={{color:'black'}}>3-	Respect de la voie hiérarchique : </h3>
            <p> Le respect de la voie hiérarchique s’effectue par l’information de l’autorité supérieure, à l’aide du « Cc ».<br/>
                IL est donc important de rester très vigilant sur le respect de cette étape, la messagerie électronique n’offrant pas les mêmes possibilités de relecture et de correction que le support papier.</p>
            
            <h3 style={{color:'black'}}>4-	Contenu d’un message : </h3>
            <p>-Introduction courte et brève ; <br/>
            <p style={{color:'black'}} > Exemple : « en réponse à …. Vous trouverez les éléments de réponse … » </p>
                -Message : privilégier la clarté et la concision sans négliger la syntaxe ; <br/>
                -Majuscules : les phrases ou mots en lettres majuscules sont exclus de la culture Internet. Utiliser une majuscule en début de phrase et au début des noms propres seulement ;<br/>
                -Taille et couleur des caractères : ne pas abuser de ce qu’offre les logiciels, tenir compte du contenu et du destinataire du message ; <br/>
                -Orthographe : utiliser le correcteur d’orthographe, le cas échéant, tout en sachant que toutes les fautes ne seront pas forcément corrigées (erreurs grammaticales, mots oubliés …) ; <br/>
                -Date : écrire la date en format jour/mois/année. <br/>
            <p style={{color:'black'}} > Exemple : 10 novembre 2011 et non pas en format numérique 10/11/2011    (Est-ce le 11 octobre ou le 10 novembre ?)</p></p>
         
            <h3 style={{color:'black'}}>5-	Longueur du message </h3>
            <p>- Eviter les messages trop longs (de préférence moins de 100 mots) ; <br/>
            - Privilégier la concision et éviter les informations inutiles ou non demandées, en supprimant tout ce qui est hors contexte ; <br/>
            - Lorsque le message est long, prévenir le destinataire dans la zone objet pour l’informer du temps nécessaire à sa lecture et sa compréhension. </p>

            <h3 style={{color:'black'}}>6-	Politesse et signature  </h3>
            <p> -Salutation : commencer le message en saluant le destinataire (Bonjour) et terminer le message en le saluant à nouveau (Bonne journée, cordialement, à bientôt…) <br/>
            -Merci : il est de mise de remercier un correspondant lorsqu’on lui demande un service, même dans un courriel ; <br/>
            -Signature : inscrire son nom complet à la fin des messages. En effet, certains relais de courrier enlèvent le nom de l’expéditeur pour n’afficher que l’adresse de courriel ; <br/>
            -Ne pas diffuser une adresse électronique sans l’autorisation de l’intéressé ; <br/>
            -Créer un fichier de signature court (maximum 7 lignes). Cette signature sera automatiquement insérée lorsque sera envoyé un message ; </p>
            
            <p style={{color:'black'}} > Exemple : </p>
            <center>
                <p>   M. Jean Frédéric RAMAHALEFITRA<br/>
                    Chef de Service Management Qualité et Suivi-Évaluation<br/>
                    Direction Générale de L’A.P.M.F<br/>
                    (Agence Portuaire Maritime et Fluviale)<br/>
                    _______________________________<br/>
                    Mobile Office :   + 261 32 11 258  66<br/>
                    Mobile perso :   + 261 (32 / 33 / 34)  02  537  57<br/>
                    Email : lefitra@apmf.mg / lefitra@yahoo.fr </p>
            </center>
        
            <h3 style={{color:'black'}}>7-	Pièce(s) jointe(s)</h3>
            <p>Envoyer les pièces jointes enregistrées en format .doc ou .rtf, pour être sûr qu’elles puissent être lues sans difficultés, notamment lorsque les ordinateurs ou systèmes sont différents. Vérifier le format 
                et le poids des images, au-delà de 2 Mo, elles ont plus de mal à passer et les sauvegarder au format .jpg ou .gif au besoin ;  </p>

            <h3 style={{color:'black'}}>8-	Réponse à un message </h3>
            <p>-S’assurer avant de répondre que l’on est bien le bon destinataire du message (pour action et non pas pour information), en vérifiant si l’on est le destinataire principal ou à titre de Cc ; <br/>
            -Placer la réponse après le message original, ou insérer les éléments de réponse dans les paragraphes correspondants contenant les questions ou suscitant les réponses, mais alors en utilisant par exemple les caractères gras pour faciliter leur identification; <br/>
            -Répondre directement au message plutôt que d’envoyer un nouveau courriel. Ainsi, le destinataire saura de quoi il s’agit et les deux messages pourront être conservés dans le même fichier ; <br/>
            -Si l’on ne dispose pas du temps nécessaire pour répondre à un courriel important, accuser réception du message s’il n’est pas paramétré et signaler à l’expéditeur que l’on va y répondre plus tard ;</p>
            <h3 style={{color:'black'}}>9-	Classement des messages</h3>
            <p>-Pour gérer les courriels d’une BAL volumineuse, ouvrir des dossiers et archiver les messages importants; <br/>
                -Supprimer les messages sans importance présents dans les dossiers Messages reçus, Messages envoyés et Messages supprimés.</p>
        
            <h3 style={{color:'black'}}>A/ LES FORMULES DE POLITESSE destinées aux autorités supérieures (personnalités politiques et élus)</h3>
            <p style={{color:'black'}} >1)	Ambassadeurs, parlementaires, présidents Conseil général et Conseil régional :  </p>
            <p>Je vous prie d’agréer, Monsieur…………………….., l’expression de ma haute considération ;</p>
            <p style={{color:'black'}} >2)	Conseillers généraux, conseillers régionaux, maires, officiers supérieurs et présidents chambres consulaires : </p>
            <p>Je vous prie d’agréer, M…………………….., l’expression de ma considération la plus distinguée ;</p>
            <p style={{color:'black'}} > 3)	Dames ou demoiselles : </p>
            <p>Je vous prie de croire, M……………………………….., en l’assurance de ma considération distinguée ou Je vous prie d’agréer, M………………………….., l’expression de mes respectueux hommages.</p>

            <h3 style={{color:'black'}}>B/ LA RECONNAISSANCE DE LA HIERACHIE </h3>
            <p> L'administration étant une structure pyramidale, elle se caractérise par un respect de la hiérarchie.</p>
            <p style={{color:'black'}} >1) Incidences sur le style administratif et les formules utilisées</p>

            <table style={{width:'1150px', height:'600px'}}>
                <tr>
                    <td style={{color:'black'}}>Le supérieur</td>
                    <td style={{color:'black'}}>Le subordonné</td>
                </tr>
                <tr>
                    <td>
                        Informe <br/>
                        Fait savoir à <br/>
                        Fait connaître à <br/>
                        Fait observer à <br/>
                        Fait remarquer à<br/>
                        Note <br/>
                        Observe <br/>
                        Constate <br/>
                        Précise <br/>
                        Rappelle <br/>
                        Demande l’avis de <br/>
                        Demande à<br/>
                        Prie <br/>
                        Prescrit, ordonne à <br/>
                        Enjoint à <br/>
                        Signale à <br/>

                    </td>
                    <td>
                        Rend compte<br/>
                        Expose<br/>
                        Porte connaissance à <br/>
                        Se permet de faire observer à<br/>
                        Se permet de faire remarquer à<br/>
                        Ne peut que noter<br/>
                        Se permet de constater<br/>
                        Se permet de préciser<br/>
                        Se permet de rappeler<br/>
                        Sollicite l’avis de<br/>
                        Sollicite de<br/>
                        est reconnaissant à<br/>
                        Propose à<br/>
                        Suggère à, invite à<br/>
                        Croit devoir signaler à<br/>

                    </td>
                </tr>
            </table><br/><br/>

            <table style={{width:'1150px', height:'600px'}}>
                <tr>
                 <th colspan="2" style={{color:'black'}}><center>Et j’ai l’honneur de</center></th>
                </tr>
                <tr>
                    <td>
                        de vous faire remarquer <br/>
                        de vous faire observer <br/>
                        de vous faire savoir <br/>
                        de vous faire connaître <br/>
                    </td>
                    <td>
                        de vous rendre compte <br/>
                        d’appeler votre attention sur<br/>
                        de porter à votre connaissance<br/>
                        de vous proposer<br/>
                    </td>
                </tr>
            </table><br/><br/>

            <p style={{color:'black'}} >2/ Incidences sur la nécessité de faire apparaître sur toute correspondance en forme administrative la voie hiérarchique, 
            c’est-à-dire le passage du document par les autorités concernées. </p>
            <p>Cette exigence répond à deux nécessités : </p>
            <p>
                - Celle de tenir informées toutes les autorités hiérarchiques concernées ; <br/>
                - Celle de leur permettre de formuler, le cas échéant, des avis ou observations. Le principe hiérarchique veut que l’on écrive au responsable de l’Administration destinataire et non directement à l’un de ses services ou bureaux.</p>
        
            <h3 style={{color:'black'}}>C/ INCORRECTIONS DE LANGAGE (néologismes et anglicismes)</h3>
            <table style={{width:'1150px', height:'600px'}}>
                <tr>
                    <td style={{color:'black'}}>Incorrect</td>
                    <td style={{color:'black'}}>Correct</td>
                </tr>
                <tr>
                    <td>
                        Générer <br/>
                        Clôturer <br/>
                        Solutionner une question <br/>
                        S’avérer faux <br/>
                        Réajuster <br/>
                        Positionner <br/>
                        Nous avons convenu de <br/>
                        Ressortir de la compétence <br/>
                        Parution <br/>
                        Contacter <br/>
                        Réceptionner <br/>
                        S’attendre à ce que <br/>
                        Demander à ce que <br/>
                        Suite à <br/>
                        Vous n’êtes pas sans ignorer <br/>
                        Pallier à <br/>
                        Dans le but de <br/>
                        Convenir de <br/>
                        Préjuger de la suite à donner <br/>
                        Baser sur <br/>
                        Par contre <br/>
                        En termes de <br/>
                    </td>
                    <td>
                        Engendrer  <br/>
                        Clore <br/>
                        Résoudre une question  <br/>
                        Se révéler faux  <br/>
                        Rajuster  <br/>
                        Mettre en place  <br/>
                        Nous sommes convenus de <br/>
                        Ressortir à la compétence  <br/>
                        Publication  <br/>
                        Prendre contact  <br/>
                        Recevoir  <br/>
                        S’attendre que  <br/>
                        Demander que  <br/>
                        Comme suite à  <br/>
                        Vous n’ignorez pas  <br/>
                        Pallier  <br/>
                        Afin de  <br/>
                        Etre convenu de  <br/>
                        Préjuger la suite à donner  <br/>
                        Fonder sur  <br/>
                        En revanche  <br/>
                        Quant à, en matière de <br/>
                    </td>
                </tr>
            </table><br/><br/>

            <h3 style={{color:'black'}}>D/ PRINCIPAUX PLEONASMES</h3>
            <table style={{width:'1150px', height:'600px'}}>
                <tr>
                    <td>
                        Par courrier en date du <br/>
                        Le but final  <br/>
                        Achever complètement  <br/>
                        Revenir à nouveau  <br/>
                        Voire même  <br/>
                        Comme, par exemple  <br/>
                        Collaborer ensemble  <br/>
                        Deux alternatives  <br/>
                        Car, en effet  <br/>
                        Puis encore  <br/>
                        Prévoir d’avance  <br/>
                        Et puis ensuite  <br/>
                        Abolir totalement  <br/>
                        Ajouter en plus  <br/>

                    </td>
                    <td  style={{color:'black'}}>
                        pour
                    </td>
                    <td>
                        Par courrier du<br/>
                        Le but<br/>
                        Achever<br/>
                        Revenir <br/>
                        Voire ou même <br/>
                        Comme ou par exemple <br/>
                        Collaborer <br/>
                        Deux situations ou les alternatives<br/>
                        Car ou en effet <br/>
                        Puis ou encore <br/>
                        Prévoir<br/>
                        Ensuite <br/>
                        Abolir <br/>
                        Ajouter<br/>
                    </td>
                </tr>
            </table><br/><br/>

            <h3 style={{color:'black'}}>E/ NE PAS CONFONDRE </h3>
            <p>« voici » : annonce ce qui va suivre ; « voici ce que je souhaiterais… » <br/>
            « voilà » : résume ce qui vient d’être dit ; « voilà ce que je voulais vous dire » <br/>
            « ceci » : résume ce qui va suivre ; « ceci va peut-être vous surprendre » <br/>
            « cela » : Rappelle ce qui précède ; « cela étant », « cela dit » <br/>
            « celui-ci » : fait référence à l’élément le plus proche dans la phrase ; <br/>
            « celui-là » : Fait référence à l’élément le plus éloigné. <br/>
            « Acception » : signification ou préférence ; <br/>
            « Acceptation » : fait d’accepter. <br/>
            « Intervenir » : on intervient dans une action en cours ;<br/>
            « Conclure » : un accord a été conclu. <br/>
            « Au niveau de » : implique une comparaison ; au niveau régional, au niveau local ; <br/>
            « En ce qui concerne » : pour ce qui est de la région ou du point de vue régional.</p>

            <h3 style={{color:'black'}}>F/ ACCORD DU PARTICIPE PASSE </h3>
            <p style={{color:'black'}} >1/ Conjugué avec l’auxiliaire « être » ou avec un verbe d’état, ou employé comme adjectif </p>
            <p >Le participe passé des verbes non pronominaux s’accorde comme un adjectif. </p>
            <p style={{color:'black'}} >Exemples : Elle est arrivée ; Elles semblent agacées, des documents reliés; des stagiaires dissipés.  </p>
            <p>En revanche, les participes approuvé, attendu, certifié, communiqué, entendu, excepté, passé, lu reçu, supposé, vu, ainsi que non compris, y compris, étant donné, 
            excepté que, ci-joint, etc., placés immédiatement avant le nom précédé ou non d’un article, sont invariables. </p>
            <p style={{color:'black'}} >Exemples : Toutes ses demandes sont validées, excepté la plus récente, mais Toutes ses demandes sont validées, la plus récente exceptée.  </p>

            <p style={{color:'black'}} >2/ Employé avec l’auxiliaire « avoir » </p>
            <p>Le participe passé s’accorde en genre et en nombre avec le complément d’objet direct quand cet objet le précède.</p>
            <p style={{color:'black'}} >Exemple : Les heures de travail qu’il a effectuées.  </p>
            <p>Si le complément d’objet direct le suit ou s’il n’y a pas de complément d’objet direct, il ne varie pas. </p>
            <p style={{color:'black'}} >Exemples : Il a effectué des heures de travail. Elle a travaillé.  </p>
            <p>Le participe des verbes intransitifs, transitifs indirects et impersonnels, n’ayant pas de C.O.D. mais un complément d’objet indirect (COI) 
            reste toujours invariable.  </p>
            <p style={{color:'black'}} >Exemple : Ces livres nous ont beaucoup plu, nous avons beaucoup souri à leur lecture. </p>
            <p style={{color:'black'}} >Enfin, la plupart des cas considérés comme particuliers relèvent en fait de cette règle : il est seulement plus difficile de repérer leur C.O.D.  </p>
            <p style={{color:'black'}} >Les participes passés comme couru, coûté, régné, valu, vécu sont invariables quand ils sont employés au sens propre, car leur complément est alors un complément
            de mesure et non un C.O.D. </p>
            <p style={{color:'black'}} >Exemples : Pendant le quart d’heure que nous avons couru ; les 87 ans qu’elle a vécu. </p>
            <p style={{color:'black'}} >Mais ils peuvent varier au sens figuré, où ils deviennent transitifs. </p>
            <p style={{color:'black'}} >Exemples : Les dangers que nous avons courus ; la folle époque qu’elle a vécue</p>

            <h3 style={{color:'black'}}>G/ TABLEAU SYNOPTIQUE DES DIFFERENTS DOCUMENTS PRODUITS PAR L’ADMINISTRATION</h3>
            <table style={{width:'1150px', height:'600px'}}>
                <tr>
                    <td style={{color:'black'}}>DOCUMENTS</td>
                    <td style={{color:'black'}}>BUTS</td>
                    <td style={{color:'black'}}>FOND</td>
                    <th style={{color:'black'}} >DOCUMENTS INTERNE</th>
                    <th style={{color:'black'}} >DOCUMENTS EXTERNE</th>
                </tr>
                <tr>
                    <td>
                        Loi
                    </td>
                    <td>
                        Acte juridique matérialisant les décisions du pouvoir législatif
                    </td>
                    <td>
                        De portée générale, la loi fixe des règles et des principes.
                    </td>
                    <td></td>
                    <td>
                        OUI
                    </td>
                </tr>
                <tr>
                    <td>
                        Décret
                    </td>
                    <td>
                        Acte juridique matérialisant les décisions du pouvoir exécutif
                    </td>
                    <td>
                        De portée générale, il favorise l’application de la loi.
                    </td>
                    <td></td>
                    <td>
                        OUI
                    </td>
                </tr>
                <tr>
                    <td>
                        Arrêté
                    </td>
                    <td>
                        Acte juridique matérialisant les décisions de l’exécutif (Etat et collectivités locales)
                    </td>
                    <td>
                        Fonction de l’affaire Crée des droits et des obligations
                    </td>
                    <td></td>
                    <td>
                        OUI
                    </td>
                </tr>
                <tr>
                    <td>
                        Délibération
                    </td>
                    <td>
                        Acte juridique matérialisant les décisions des assemblées territoriales
                    </td>
                    <td>
                        Reflet exact de la discussion et de la décision intervenue
                    </td>
                    <td></td>
                    <td>
                        OUI
                    </td>
                </tr>
                <tr>
                    <td>
                        Rapport
                    </td>
                    <td>
                        - Compte-rendu détaillé d’une affaire <br/>
                        - Etude d’une question
                    </td>
                    <td>
                        Fonction du dossier :<br/>
                        - analyse, <br/>
                        - synthèse, <br/>
                        - propositions<br/>
                    </td>
                    <td>
                        OUI
                    </td>
                    <td>
                        OUI
                    </td>
                </tr>
                <tr>
                    <td>
                        Note (simple ou assortie de propositions)
                    </td>
                    <td>
                        Avoir une connaissance précise et complète d’une affaire
                    </td>
                    <td>
                        Fonction du dossier : <br/>
                        - analyse, <br/>
                        - synthèse, éventuellement, dans certains cas : <br/>
                        - propositions<br/>
                    </td>
                    <td>
                        OUI
                    </td>
                    <td>
                        OUI
                    </td>
                </tr>
                <tr>
                    <td>
                        Note de service Circulaire Instruction
                    </td>
                    <td>
                        préciser un point particulier, <br/>
                        - fixer une réunion, <br/>
                        - provoquer une décision<br/>
                    </td>
                    <td>
                        Note de service Circulaire Instruction	préciser un point particulier, 
                        - fixer une réunion, 
                        - provoquer une décision	Fonction du dossier : 
                        - analyse, 
                        - synthèse, 
                        - conclusion (cf buts)	
                    </td>
                    <td>
                        OUI
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        Lettre en forme administrative
                    </td>
                    <td>
                        Etablir un contact direct avec une autre administration ou au sein d’une même administration
                    </td>
                    <td>
                        Fonction du dossier
                    </td>
                    <td>
                        OUI
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                         Lettre en forme personnelle
                    </td>
                    <td>
                        Etablir un contact direct avec un particulier, une société ou une collectivité territoriale (élu)
                    </td>
                    <td>
                        Fonction du dossier 
                    </td>
                    <td></td>
                    <td>
                        OUI
                    </td>
                </tr>
                <tr>
                    <td>
                        Procès – Verbal
                    </td>
                    <td>
                        Reproduire aussi fidèlement que possible les détails d’une réunion « Faire foi de »	
                    </td>
                    <td>
                        Fonction de la réunion - analyse / synthèse rigoureuses Document exhaustif
                    </td>
                    <td>
                        OUI
                    </td>
                    <td>
                        OUI
                    </td>
                </tr>
                <tr>
                    <td>
                        Compte rendu
                    </td>
                    <td>
                        De caractère juridique moins accentué que le procès-verbal, son objectif est d’informer
                    </td>
                    <td>
                        Fonction de la réunion - synthèse, voire analyse fidèles Document sélectif
                    </td>
                    <td>
                        OUI
                    </td>
                    <td>
                        OUI
                    </td>
                </tr>
                <tr>
                    <td>
                        Bordereau
                    </td>
                    <td>
                    	Assure l’accompagnement de documents entre services administratifs	
                    </td>
                    <td>
                    Se justifie quand l’établissement d’une lettre n’est pas nécessaire.
                    </td>
                    <td>
                        OUI
                    </td>
                    <td>
                        NON
                    </td>
                </tr>
            </table><br/><br/>

            <center>
                <h3 style={{color:'black'}}><u>VI-	LE RAPPORT (EN GENERAL) </u></h3>
            </center>
            <h3 style={{color:'black'}}>A/ Définition</h3>
            <p>Document de correspondance utilisé à l'intérieur d'un même service ou d'une même administration, 
            entre un collaborateur ou un agent et son supérieur ou responsable hiérarchique.</p>

            <h3 style={{color:'black'}}>B/ Contenu</h3>
            <p>Document permettant le compte rendu détaillé ou l'étude d'un problème (affaire ou dossier). Il contient une analyse critique, 
            une synthèse et des propositions se traduisant par une prise de positions du rédacteur (différence avec la note hiérarchique). C'est donc un outil de travail au service d'un responsable hiérarchique pour l'aider à prendre une décision « à froid »,
                c'est-à-dire avec le recul et la réflexion nécessaires. Il doit être précis, complet, solidement construit et argumenté.</p>

            <h3 style={{color:'black'}}>C/ Points de Vigilance</h3>
            <p>− Absence de parti pris : l'objectivité et la neutralité doivent prévaloir, sans jugements de valeur ; <br/>
                − Absence de passivité : le rédacteur doit s'impliquer en étant source de propositions ; <br/>
                − Absence de servilité : la recherche de solutions dans l'intérêt du collectif doit prévaloir et dépasser les intérêts individuels.</p>

            <h3 style={{color:'black'}}>D/ Présentation </h3>
            <p>− Proche de la lettre administrative en forme administrative et contient la mention :  <br/>
		     Rapport à l'attention de M  ………       sur   ……… <br/>
                − Plan préalablement annoncé (chronologique, logique …) et document comportant une introduction, un développement et une conclusion.  <br/>
                − Exposition de faits objectifs avec communication des sources d'information ;  <br/>
                − Style administratif..</p>

                <h3 style={{color:'black'}}>E/ Plan </h3>
                <p style={{color:'black'}} >1/ Introduction  </p>
                <p>Rôle: situer la problématique dans son contexte général et/ou historique </p>
                <p style={{color:'black'}} >2/ Développement </p>
                <p>  Rôle: valoriser un élément ou un argument:  <br/>
                    - choix des observations retenues ;  <br/>
                    - réflexions critiques. </p>
                <p style={{color:'black'}} >3/ Conclusion </p>
                <p>Rôle: engager le rédacteur (témoin et juge) en terme de bilan.</p>

            <center>
                <h3 style={{color:'black'}}><u>VII-	LE RAPPORT DE MISSION</u></h3>
            </center>
            <p>Ce rapport de mission est mentionné comme éléments de sortie, dans le « PROCESSUS MISSION LOCALE », ci-après, déterminant les procédures à suivre pour une réalisation d’une mission.  <br/>
                Des formulaires (en version électronique) sont disponibles au Service Management Qualité et Suivi évaluation : « Demande d’ordre de Mission (DOMI-02» et « Rapport de Mission (RAP-MI-02»   </p>
            
            <center>
                <h3 style={{color:'black'}}><u>PROCESSUS MISSION LOCALE AGENT APMF</u></h3>
            </center>
            <h3 style={{color:'black'}}>1.SOMMAIRE</h3>
            <center>
                <img src="../../images/dif.PNG" style={{width:'1150px', height:'800px'}}/><br/><br/>
            </center>
            <h3 style={{color:'black'}}>2-LOGIGRAMME</h3>
            <center>
                <img src="../../images/far.PNG" style={{width:'1150px', height:'600px'}}/><br/><br/>
            </center>
            <h3 style={{color:'black'}}>3.	EXPLICATIONS</h3>

            <table style={{width:'1150px', height:'600px'}}>
                <tr>
                    <td style={{color:'black'}}>ELEMENTS</td>
                    <td style={{color:'black'}}>EXPLICATIONS</td>
                    <td style={{color:'black'}}>ENREGISTREMENTS</td>
                </tr>
                <tr>
                    <td>
                        DUREE DE MISSION
                    </td>
                    <td>
                        La durée d’une mission locale ne peut dépasser 15jours sauf une descente de formation et sensibilisation continue selon la nécessité de Service
                    </td>
                    <td>
                        Ordre de mission
                    </td>
                </tr>
                <tr>
                    <td>
                         VALIDATION DIRECTEUR OU CHEF DE SERVICES
                    </td>
                    <td>
                        Toute prévision de mission doit avoir l’aval de son supérieur
                    </td>
                    <td>
                        visa
                    </td>
                </tr>
                <tr>
                    <td>
                        REMPLIR FICHE DE DEMANDE DE VEHICULE
                    </td>
                    <td>
                        Une fiche de demande de véhicule est jointe avec l’ordre de mission 
                    </td>
                    <td>
                        Fiche de demande de véhicule
                    </td>
                </tr>
                <tr>
                    <td>
                        VALIDATION AC – OP -  DECAISSEMENT 
                    </td>
                    <td>
                        Le traitement total de ces phases est en moyenne de 05jours
                        L’agent missionnaire récupère les frais de mission auprès du caissier de l’AC (si moins de 600 000 Ar)
                        Pour une meilleure préparation, les frais de mission devraient être disponibles au moins 24h avant départ
                    </td>
                    <td>
                        Ordre de paiement
                    </td>
                </tr>
                <tr>
                    <td>
                        VERIFIER DISPONIBILITE VEHICULE
                    </td>
                    <td>
                        En cas d’indisponibilité de véhicule, l’agent peut partir en taxi brousse si la mission est jugée prioritaire.
                    </td>
                    <td>
                        Planning car
                    </td>
                </tr>
                <tr>
                    <td>
                        OBLIGATION DE RAPPORT DE MISSION
                    </td>
                    <td>
                        Tout missionnaire doit remettre son rapport de mission au plus tard 05jours après son retour
                        Mettre en copie DG, CG, DAF, ADG  et CSMQ-SE
                        L’absence de rapport est sanctionnée d’interdiction de mission ainsi que le non-paiement du 50% restant
                    </td>
                    <td>
	                    Canevas rapport de mission
                    </td>
                </tr>
                <tr>
                    <td>
                        RETOUR PIECES JUSTIFICATIVES
                    </td>
                    <td>
                        Tout missionnaire doit rendre les pièces justificatives nécessaires à la régularisation de son compte
                    </td>
                    <td>
                        Pièces justificatives
                    </td>
                </tr>
            </table><br/><br/>

            <h3 style={{color:'black'}}>4.	MAITRISE DES RISQUES</h3>
            <p>4.1.	EVALUATION DES RISQUES</p>
            <center>
                <img src="../../images/tabe.PNG" style={{width:'1150px', height:'300px'}}/><br/><br/>
            </center>
            <p>4.2.	GRILLE D’EVALUATION DES RISQUES</p>
            <table style={{width:'1150px', height:'400px'}}>
                <tr>		
                    <td style={{color:'black'}}>Niveau</td>
                    <td style={{color:'black'}}>Gravité</td>
                    <td style={{color:'black'}}>Fréquence</td>
                </tr>
                <tr>
                    <td>
                        5
                    </td>
                    <td>
                        Peut engendrer des pertes financières importantes ou atteinte directe à la sûreté et à la sécurité
                    </td>
                    <td>
                        Une (01) fois par mois
                    </td>
                </tr>
                <tr>
                    <td>
                        4
                    </td>
                    <td>
                    	Ne respecte pas la règlementation en vigueur
                    </td>
                    <td>
                        Une fois tous les trois (03) mois
                    </td>
                </tr>
                <tr>
                    <td>
                        3
                    </td>
                    <td>
                        Nuit à la réputation de l’Administration
                    </td>
                    <td>
                        Une fois tous les six (06) mois
                    </td>
                </tr>
                <tr>
                    <td>
                       2
                    </td>
                    <td>
                        Une fois tous les six (06) mois
                    </td>
                    <td>
                        Une fois tous les ans
                    </td>
                </tr>
                <tr>
                    <td>
                        1
                    </td>
                    <td>
                        Engendre de petites pertes financières 
                    </td>
                    <td>
                        Une fois tous les trois (03) ans
                    </td>
                </tr>
            </table><br/><br/>

            <h3 style={{color:'black'}}>5.	MAITRISE DES ENREGISTREMENTS</h3>
            <center>
                <img src="../../images/tabee.PNG" style={{width:'1150px', height:'200px'}}/><br/><br/>
            </center>

            <h3 style={{color:'black'}}>6.	HISTORIQUES DE MODIFICATIONS</h3>

            <table style={{width:'1150px', height:'200px'}}>
                <tr>					
                    <td style={{color:'black'}}>Date</td>
                    <td style={{color:'black'}}>Version</td>
                    <td style={{color:'black'}}>Modifications</td>
                    <td style={{color:'black'}}>Qui ?</td>
                </tr>
                <tr>
                    <td>
                        09/09/2016
                    </td>
                    <td>
                        1.0
                    </td>
                    <td>
                        Rédaction
                    </td>
                    <td>
                    EQUIPE DAF
                    </td>
                </tr>
                <tr>
                    <td>
                        02/01/2021
                    </td>
                    <td>
                        1.2
                    </td>
                    <td>	
                        Logigramme, Sigle, Appellation, Sanction
                    </td>
                    <td>
                        CSMQ-SE
                    </td>
                </tr>
            </table><br/><br/>

        </div> 
        <Footer />
    </div> 
                )
            }
                      
        }
               
export default Manuel_Procedure