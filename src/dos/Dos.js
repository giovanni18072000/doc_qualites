import { PureComponent } from 'react';
import Menu from '../navigation/Menu';
import Footer from '../navigation/Footer'; 
import '../dos/animate.css'
import {jsPDF} from 'jspdf';

class Dos extends PureComponent {

    generatePDF = ()=>{
        var doc = new jsPDF("p","pt","a4");
        doc.html(document.querySelector("#content"),{
            callback:function(pdf){
                var pageCount= doc.internal.getNumberOfPages();
                pdf.deletePage(pageCount);
                pdf.save("dos.pdf");
            }
        });
    };

render() {   
 return (
    <div className="col-lg-22 grid-margin stretch-card">
        <Menu />
        <div className="container"><br/>
                <h2>
                    <center>
                        DOCUMENT D’ORIENTATION STRATEGIQUE Agence Portuaire Maritime et Fluviale – A.P.M.F <br/>
                    </center>
                    <center>Vers un secteur maritime et fluvial moderne, pilier du développement économique de Madagascar </center>
                    {/* <center>
                        <img src="../../images/apmf1.jfif"/>
                    </center> */}
                    </h2><br/>
                    <center>
                        <h2>
                        {/* <p className='bg-info text-whit' style={{border: '1px',backgroundColor:'#48ccc3', marginRight:'1100px',width:'500px',height:'300px', padding:'100px opx 100px 0px' }}> */}
                        <p> 
                            <u>SOMMAIRE</u><br/>    
                                LE MOT DU DIRECTEUR GENERAL<br/>
                                INTRODUCTION<br/>
                                STRUCTURE DU DOCUMENT D’ORIENTATION STRATEGIQUE<br/>
                                POLITIQUE GENERALE <br/>
                                MISSIONS <br/>
                                VISION<br/>
                                VALEURS DE BASE<br/>
                                MATRICE DE L’ORIENTATION STRATEGIQUE DE L’APMF<br/>
                        </p>
                                {/* ................................................... */}
                                <p style={{color:'blue',padding:'0 0 0 20px'}}>
                                VOLET STRATEGIQUE I : GOUVERNANCE RESPONSABLE, EFFICACE ET EFFICIENTE</p>
                                <p style={{color:'blue',padding:'0 0 0 20px'}}>VOLET STRATEGIQUE II : TRANSPORT MARITIME MODERNISÉ ET COMPETITIF, AU SERVICE DE DEVELOPPEMENT DURABLE<br/>
                                {/* ................................................... */}
                                </p>
                                {/* <p className='bg-info text-whit' style={{border: '1px ',backgroundColor: '#706b64', marginRight:'600px',width:'500px',height:'300px', padding:'100px opx 100px 0px' }} > */}
                                <p>
                                PORT <br/>
                                NAVIRES <br/>
                                TRANSPORT MARITIME <br/>
                                GENS DE MER <br/>
                                VOLET STRATEGIQUE III : TRANSPORT FLUVIAL INNOVÉ, MOTEUR DE DEVELOPPEMENT DES ZONES ENCLAVÉES <br/>
                                CONCLUSION<br/>  
                                </p>     
                        </h2>   
                    </center>
                    <div>  
                        {/* <p className='bg-info text-whit' style={{border: '1px',backgroundColor: '#706b64',
                         marginLeft:'800px', padding:'20px', textAlign:'center',width:'500px',height:'500px'}}> */}
                        <p>
                            <u>
                                LISTE DES ABREVIATIONS
                            </u><br/>
                            
                                    APMF : Agence Portuaire, Maritime et Fluviale<br/>
                                    CNTTM : Conseil National Tripartite du Travail Maritime<br/>
                                    EPIC : Etablissement Public à Caractère Industriel et Commercial<br/>
                                    FSC : Flag State Control<br/>
                                    ISPS : International Ship Port Securitty<br/>
                                    ITC : International Tonnage Convention<br/>
                                    MOU : Memorundum Of Understanding<br/>
                                    OMI : Organisation Maritime Internationale<br/>
                                    ODD : Objectifs de Développement Durable<br/>
                                    PIM : Pieces d’Identite des Marins<br/>
                                    PPP : Partenariat Public Privé<br/>
                                    STCW : Standard Of Training Certification And Watchkeeping For Seafarers <br/>
                            </p> 
                    </div>
                    <h2><br/>
                <center style={{color:'blue'}}>
                    VERS UN SOUS-SECTEUR PORTUAIRE, MARITIME ET FLUVIAL MODERNE;
                    PILIER DE DÉVELOPPEMENT ECONOMIQUE DE MADAGASCAR
                </center>
            </h2><br/><br/>
                <h3  style={{color:'Cyan'}}>LE MOT DU DIRECTEUR GENERAL</h3>
                <section>
                        <p>
                            <img src="../../images/dir2.PNG" width="600px" height="400px"/>
                        </p>  
                    
                        <p> L’economie de base de Madagascar est tributaire du transport maritime. De ce fait le sous-secteur portuaire,
                        maritime et fluvial fonctionne jour et nuit, sans interruption, de manière efficace, à contribuer à faire tourner l'économie et
                        offrir à la population une vie décente.</p>
                    
                </section>  

                    <p style={{padding:'0 0 0 20px'}} > D'après le secrétariat de la Conférence des Nations Unies sur le Commerce et le Développement (CNUCED), près
                    de 80 % du commerce mondial en volume et plus de 70 % de sa valeur financière transitent par la mer et les ports, qui est
                    une réalité irréprochable pour Madagascar en tant qu’îles de l’Océan Indien.<br/>
                    Le transport maritime est le seul moyen véritablement économique et viable à long terme qui permet d'assurer les
                    échanges commerciaux. De nos jours les navires assurent l’approvisionnement du pays en produits de base, carburants,
                    denrées alimentaires et autres biens dont nous avons besoin. Le sous-secteur maritime est la clé de voûte des échanges
                    internationaux et de l'économie d’un pays. Au cours des cinquante dernières années, le monde a connu une croissance sans
                    précédent du volume des échanges aussi bien commerciaux que culturels au niveau international. En conséquence,
                    l’économie-monde se caractérise de plus en plus par des relations d'interdépendance.<br/>
                    Ce phénomène de mondialisation, a été rendu possible par le démantèlement progressif des barrières
                    commerciales et la mobilité des capitaux, ainsi que par le progrès technologique et la baisse régulière du coût des
                    transports, des communications et de l'informatique. Les avantages potentiels sont clairs : la croissance peut être accélérée et
                    la prospérité plus largement étendue ; le savoir-faire et la technologie peuvent être également repartis, et les pays peuvent
                    tirer profit de possibilités économiques.<br/>
                    Réalisons-nous que Madagascar est une île de 5600 kilomètres de côtes, d’un million deux cent mille kilomètrescarrés de zone économique exclusive, de 18 ports maritimes dont cinq (5) sont ouverts au trafic international, d’une
                    imposante flotte maritime et de plusieurs millions de gens de mer actifs. La grande île se trouve de surcroît, au carrefour de
                    la grande autoroute maritime du sud de l’océan indien. Le sous-secteur portuaire, maritime et fluvial peut être un levier de
                    développement économique de ce pays qui a tous les atouts pour prospérer.<br/>
                    Telle est notre vision à la réalisation de laquelle nous vous invitons à nous joindre. Ensemble, nous parviendrons plus
                    facilement à mettre ce sous-secteur à la vraie place qu’elle mérite dans la chaîne de développement de Madagascar.
                </p><br/>
                <h3  style={{color:'Cyan'}}>INTRODUCTION</h3>
                <p style={{padding:'0 0 0 20px'}}>
                    <p style={{padding:'0 0 0 20px'}}>En seize années (16 ans) d’exercice, nombreuses sont les actions et réformes initiées par l’Agence Portuaire, Maritime et Fluviale (APMF). Des obligations envers les usagers et</p>
                    l’administration public sont immenses. Alors que dans le principe de globalisation, le sous-secteur transport maritime demeure éloigné des standards internationaux et des performances
                    attendues par l’administration publique, par les usagers.
                    Ce constat laisse déjà apparaître les défis et les chantiers titanesques qui attendent l’APMF. Les missions et activités de l’Agence s’en trouvent interminables.
                    Motivée par ses engagements, l’APMF a conçu un document de référence de régulation et de promotion des transports maritimes et fluviaux à Madagascar, d’où le présent
                    Document d’Orientation Stratégique (DOS). Il fait apparaître nos objectifs et nos stratégies ainsi que notre détermination à réussir coûte que coûte nos missions. Ce document cadre met en
                    avant, en particulier, la cohérence et la rationalité des actions à entreprendre.
                    Ce document se base sur cinq éléments-clés : remise aux normes, technicité, modernisation, partenariat et développement équitable. Plus que jamais, l’APMF ambitionne de
                    moderniser le sous-secteur portuaire, maritime et fluvial pour contribuer au développement économique de la Grande Ile. Cette vision élaborée pour la période de 2020 à 2035 se
                    décline en chiffre ci-dessous : 
                </p><br/>
                        <center>
                            <img src="../../images/strateg.PNG" width="1100px" height="400px"/>
                        </center><br/><br/>
                    <h3 style={{color:'Cyan'}}>STRUCTURE DU DOCUMENT D’ORIENTATION STRATEGIQUE</h3>
                        <center>
                            <img src="../../images/struct.PNG" width="1100px" height="400px"/>
                        </center><br/><br/>

                        <h3 style={{color:'Cyan'}}>POLITIQUE GENERALE</h3>

                        <p> Madagascar, une île forte de plus de 5600km de côte, de par sa position
                        stratégique particulière, s’est attaché à développer son sous-secteur portuaire, maritime
                        et fluvial suivant la Politique Générale de l’État et les recommandations de la Banque
                        Mondiale sur la politique de désengagement de l’État. L’Agence Portuaire Maritime et
                        Fluviale ou A.P.M.F, est née de cette volonté en 2004, sous la tutelle des Ministères
                        chargé des Transports et celui du Budget.
                        </p>

                    <h3 style={{color:'DimGray'}}>MISSIONS</h3>

                     <p> L’A.P.M.F, par son statut révisé N°2012-391, est un Etablissement Public à caractère
                    Industriel et Commercial (EPIC) et une Autorité déléguée ayant pour missions de :<br/>
                    - Gérer le système de transports maritimes et fluvial à Madagascar,<br/>
                    - Développer et promouvoir le sous-secteur,<br/>
                    - Contribuer à la sauvegarde de l'environnement marin et,<br/>
                    - Veiller à l’efficacité de la sécurité et de la sûreté de la navigation maritime et des
                    ports.<br/>
                    Madagascar à travers l’A.P.M.F, veille à la mise en œuvre des Conventions de
                    l’Organisation Maritime Internationale (OMI) en matière de Sécurité, de Sûreté et de
                    protection de l’Environnement marin. L’Agence contribue également à la réalisation des
                    Objectifs de Développement Durable (ODD) liés au sous-secteur maritime et qui sont
                    fixés par l’Organisation des Nations Unies (ONU).
                    Elle participe aussi à la réalisation du Plan D’Émergence de Madagascar, tout en
                    considérant le contexte et la réalité à Madagascar, en termes de besoins et attentes des
                    acteurs maritimes.</p>

                    <h3 style={{color:'DarkBlue '}}>VISION</h3>
                    <p style={{color:'CornflowerBlue'}}>« Vers un sous-secteur portuaire, maritime et fluvial moderne, pilier de
                    développement économique de la grande île »</p>

                    <p>Telle est la Vision de la Direction Générale pour cadrer l’agence
                    De cette Vision, la Direction Générale a défini quatre grandes orientations et
                    s’engage à:<br/>
                        1. Respecter la pratique de la Bonne Gouvernance ;<br/>
                        2. Appliquer de manière effective les instruments de l’OMI<br/>
                        3. Améliorer la Qualité des services publics, des infrastructures maritimes et fluviales,<br/>
                        4. Promouvoir au Standard International le sous-secteur des TransportsMaritimes et Fluviaux</p>

                    <h3 style={{color:'DimGray'}}>VALEURS DE BASE</h3>
                    <p>L’A.P.M.F priorise les valeurs de bases ci-après pour mener à bien ses missions :
                    <p style={{color:'Black'}}>- RESPONSABILITE :</p>
                        • de l’APMF envers les acteurs du sous-secteur et envers Madagascar et
                        la population malagasy ;<br/>
                        • de son Personnel envers l’Agence par le Respect de la structure en
                        place, la Transparence dans les méthodes de travail et l’intégrité pour lutter
                        contre la corruption ;<br/>
                    <p style={{color:'Black'}}>- COMPETENCES :</p>
                        • Par la compétence individuelle à travers la technicité et l’expertise du
                        métier de chaque collaborateur ;<br/>
                        • Par la compétence collective à travers la coordination et l’esprit
                        d’équipe priorisant l’intérêt général de l’Agence<br/>
                    <p style={{color:'Black'}}>- EFFICACITE ET EFFICIENCE :</p> des méthodes de travail améliorées, une culture de
                    résultats tout en optimisant les coûts pour atteindre les objectifs préalablement définis.<br/>
                    <p style={{color:'Black'}}>- QUALIUTÉ :</p>
                        • Qualité de service pour la satisfaction des usagers et des
                            partenaires et pour mieux répondre aux attentes du sous-secteur.<br/>
                        • Un service Management Qualité est mise en place des Systèmes pour
                            assurer le suivi de la Vision et des Missions de l’Agence. A cet effet, elle va
                            mobiliser tous les moyens disponibles et prendra les mesures nécessaires pour
                        atteindre ses Objectifs.<br/>
                        • L’Agence mise sur la technicité et se veut être une Administration Forte,
                            Compétente et pour un sous-secteur portuaire, maritime et fluvial développé et
                            durable.<br/>
                    </p><br/><br/>

                    <h1 style={{color:'DimGray'}}>MATRICE D’ORIENTATION STRATEGIQUE DE L’APMF</h1>
                        <center>
                            <img src="../../images/tab.PNG"width="1100px" height="400px"/>
                        </center><br/>
                        <center>
                            <img src="../../images/resp.PNG" width="1100px" height="400px"/>
                        </center><br/>
                        <p>L’APMF a défini l’objectif de bonne gouvernance et la technicité, garantissant une reconnaissance de l’administration publique Malagasy auprès des usagers, des acteurs publics et privés
                        du développement. Cette qualité administrative est la condition sine qua non de la reconnaissance de son expertise dans le domaine du transport maritime international et auprès des
                        usages et acteurs publics et privés des ports et du transports maritime et fluviale. La délégation tiendra compte de pouvoir aux antennes régionales dans l’administration portuaire, du
                        transport maritime et fluvial et dans la représentation de la direction générale aux instances administratives, juridiques et financiers.</p><br/><br/>

                        <center>
                            <img src="../../images/voli.PNG" />
                            <img src="../../images/mer.PNG" style={{padding:'0 0 0 130px'}}/>
                            <img src="../../images/zoulou.PNG" style={{padding:'0 0 0 40px'}}/>
                        </center><br/>

                        <p style={{ background:'Gainsboro '}}>FINALITE : UNE GOUVERNANCE FIABLE POUR UN SERVICE PUBLIC DE QUALITÉ</p>
                        <p style={{ background:'Gainsboro '}}>REALITE ACTUELLE</p>
                        <p style={{padding:'0 0 0 20px'}}>
                            • Manque de transparence de gestion ;<br/>
                            • Insuffisance de recouvrement et de sécurisation de recettes;<br/>
                            • Gouvernance centraliste<br/>
                            • Insuffisance de gestion de patrimoine<br/>
                            • Manque de compétence administrative et technique du personnel;<br/>
                        </p>
                        <p style={{ background:'Gainsboro '}}> OUTILS DE GESTION</p>
                        <p style={{padding:'0 0 0 20px'}}>
                            • Conventions internationales<br/>
                            • Code du travail<br/>
                            • Statut APMF<br/>
                            • Règlement général du personnel<br/><br/>
                        </p>
                        <h1 style={{color:'DarkBlue',border: '1px blue solid'}}> OBJECTIF 1 : ADMINISTRATION RESPONSABLE,EFFICACE ET EFFICIENTE</h1>

                        <h style={{color:'Cyan',padding:'0 0 0 20px'}}>STRATEGIE 1 : INSTAURER L’ÉTAT DE DROIT ET L’AUTORITE DE L’ÉTAT POUR PROGRESSER L’EFFICACITER DE L’EPIC</h>
                        <p style={{padding:'0 0 0 40px'}}>
                            1. Assurer que le statut de l’APMF soit cohérent avec sa mission<br/>
                            2. Assurer une transparence de gestion à travers des audits et contrôles réguliers<br/>
                            3. Appliquer la politique qualité<br/>
                            4. Assurer la transparence de passation de marché publique<br/>
                            5. Déléguer le pouvoir en renforçant les ressources mises à disposition aux directions et représentations régionales<br/>
                            6. Renforcer les cadres juridiques pour le développement du secteur<br/>
                            7. Appliquer l’E-gouvernance pour la gestion numérique des documents et des ressources disponibles<br/>
                        </p>

                        <h style={{color:'Cyan',padding:'0 0 0 20px'}}>STRATEGIE 2 : ASSURER LE BON RECOUVREMENT DES RECETTES
                            POUR MIEUX CONTRIBUER AU DÉPLOIMENT DU SECTEUR ET DE LA CAISSE DE L’ETAT
                        </h>
                        <p style={{padding:'0 0 0 40px'}}>8. Optimiser les dépenses de fonctionnement et d’investissement de l’agence
                            9. Sécuriser les recettes par la numérisation du système et par la remise à niveau
                            de la performance des systèmes portuaires<br/>
                            10. Renforcer les systèmes spécifiquement dédiés aux contrôles et évaluations de
                            recettes<br/>
                            11. Optimiser les dépenses de fonctionnement et d’investissement de l’agence<br/>
                        </p>
                        <h style={{color:'Cyan',padding:'0 0 0 20px'}}>STRATEGIE 3 : SECURISER ET OPTIMISER LA GESTION DES PATRIMOIRES</h>
                        <p style={{padding:'0 0 0 40px'}}>
                            12. Inventorier régulièrement et sécuriser systématiquement les patrimoines del’APMF<br/>
                            13. Gérer efficacement les propriétés bâties<br/>
                            14. Gérer et assurer le bon fonctionnement des matériels roulants et flottants
                            affectés aux activités de l’Agence<br/>
                        </p>

                        <h style={{color:'Cyan',padding:'0 0 0 20px'}}>STRATEGIE 4 : DEVELOPPER UN PARTENARIAT EQUITABLE POUR
                        LE DEVELOPPEMENT DU SECTEUR</h>
                        
                        <p style={{padding:'0 0 0 40px'}}>
                            15. Participer aux ateliers et formations internationales relative au développement du secteur<br/>
                            16. Ratifier et appliquer les conventions internationales<br/>
                            17. Applique et gérer de manière effective les instruments et les projets de l’OMI<br/>
                            18. S’intégrer aux partenariats institutionnels régionaux et internationaux pour la
                            sécurisation et le développement du secteur<br/>
                            19. Développer des partenariat technique et financier pour le développement des
                            projets portuaires et ses dérivés, pour des projets sur les navires, pour les
                            formations internationales et pour la sécurité à la navigation<br/>
                            20. Concrétiser des partenariats publiques-privés pour la gestion des patrimoines<br/>
                        </p><br/>
                        
                        <h1 style={{color:'DarkBlue',border: '1px blue solid'}}>OBJECTIF 2 : CAPITAL HUMAIN COMPETENT ET INTEGRE</h1>
                        <h style={{color:'Cyan',padding:'0 0 0 20px'}}>STRATEGIE 5 : RENFORCER LA QUALITE ET LA PERFORMANCE
                        TECHNIQUE ET ADMINISTRATIVE POUR LA PROFESSIONALISATION DU METIER</h>
                        
                        <p style={{padding:'0 0 0 40px'}}>21. Mettre en place un système de gestion prévisionnelle des emplois et
                                compétences (GEPC)<br/>
                            22. Élaborer et proposer des perspectives/plans d’évolution de carrière<br/>
                            23. Gérer avec transparence le recrutement et la formation interne<br/>
                            24. Promouvoir les promotions internes<br/>
                            25. Mettre en place un système d’écoute et de communication interne efficace pour
                                impliquer l’ensemble du personnel<br/>
                            26. Réaliser des teams building pour créer une bonne ambiance en milieu de travail<br/>
                            27. Développer un système d’évaluation du personnel<br/>
                            28. Solliciter l’amélioration continue de soi par un système de récompense<br/>
                            29. Mettre en place des corps d’agents d’administration portuaire, maritime et
                        fluvial<br/>
                        </p>

                        <center>
                            <img src="../../images/bate.PNG" width="1100px" height="400px"/>
                        </center><br/>

                        <p>L’APMF vise à faire du transport maritime un secteur économique porteur, pourvoyeur d’emplois décents et d’opportunités d’affaires ; avec une faible empreinte environnementale Le
                        volet stratégique transport maritime est subdivisé en 3 axes dont :</p>
                        <p style={{padding:'0 0 0 20px'}}>
                            - Le port<br/>
                            - Les navires<br/>
                            - Le transport et service maritime<br/>
                            - Les gens de mer
                        </p>
                        <h1 style={{color:'DimGray'}}>PORT</h1><br/>
                        <p>
                            Un port est par définition un endroit géographique par lequel transitent des marchandises et/ou des passagers. Un port maritime est un lieu de rendez-vous entre des navires et divers
                            modes de transport terrestre. Le port est en conséquence un relais d’échanges économiques maritimes et terrestres. Disposer de ports sûrs, sécuritaires, de grande capacité d’accueil et
                            nantis de services de qualité donne confiance aux armateurs, rendant ainsi les ports de Madagascar attractifs et compétitifs.</p>
                        <p style={{ background:'Gainsboro '}}>FINALITE : LES PORTS MODERNES, PROPULSEURS DES ÉCHANGES ÉCONOMIQUES</p>
                        <p style={{ background:'Gainsboro '}}> REALITE ACTUELLE</p>
                        <p style={{padding:'0 0 0 20px'}}>
                            • 17 ports à Madagascar dont cinq (05) ouverts au trafic international<br/>
                            • Malgré les réhabilitations, les infrastructures existantes ne parviennent pas à satisfaire les besoins du transport maritime actuel<br/>
                            • Les ports ouverts à l'international ne sont pas adaptés à l'évolution du transport maritime mondial<br/>
                            • La réforme institutionnelle des ports est en cours<br/>
                            • Les ports secondaires sont en état vétuste et n’assurent pas pleinement les<br/>
                            • Échanges économiques locaux<br/>
                            </p>
                        <p style={{ background:'Gainsboro '}}> OUTILS DE DEVELOPPEMENT</p>
                        <p style={{padding:'0 0 0 20px'}}>
                            • Schéma National Directeur des Ports<br/>
                            • Veille anticipative du sous-secteur<br/>
                            • Veille sur les secteurs de production<br/><br/>
                        </p>
                        <center>
                            <img src="../../images/bate2.PNG" width="1100px" height="200px"/>
                        </center><br/>
                        
                        <h1 style={{color:'DarkBlue',border: '1px blue solid'}}>OBJECTIF 3 : PORTS AUX NORMES ET COMPETITIFS</h1>
                        <h style={{color:'Cyan',padding:'0 0 0 20px'}}>STRATEGIE 6 : OUVERTURE DE L’EXPLOITATION PORTUAIRE AU
                            CAPITAL PRIVE TOUTE EN MAINTENANT LE ROLE REGALIEN DE L’ETAT</h><br/>
                        <p style={{padding:'0 0 0 50px'}}>
                            30. Assurer et maintenir le rôle d’autorité de la capitainerie du Port<br/>
                            31. Inciter aux investissements portuaires et activités dérivées<br/>
                            32. Céder les activités de services publics portuaires aux partenaires privés sous
                            formes de concession et de permission d’outillage privé<br/>
                            33. Appuyer la connexion des projets économiques locaux avec les ports<br/>
                        </p>
                        <h style={{color:'Cyan',padding:'0 0 0 20px'}}>STRATEGIE 7 : GESTION DES PORTS OPTIMISÉS</h><br/>
                        <p style={{padding:'0 0 0 50px'}}>
                            34. Mettre à jour les textes de bases sur les statuts des ports conformément à la  politique de développement de Madagascar<br/>
                            35. Élaborer des règlements particuliers pour chaque port<br/>
                            36. Numériser les bases de données portuaires<br/>
                            37. Mise en place de base de données<br/>
                            38. Mise en œuvre du schéma nationale directeur de port pour les projets portuaires<br/>
                            39. Assurer le respect des cahiers des charges exigeant l'acquisition progressive d'équipements répondant à l'évolution des opérations dans le Port<br/>
                            40. Dématérialiser les services<br/>
                            41. Renforcer la technicité des ressources humaines répondant à la modernisation<br/>
                            42. Mettre en place un guichet unique des opérations portuaires en vue de la
                            dématérialisation et de l’allègement des procédures<br/>
                            43. Mise en place d’un système de suivi et de contrôle<br/>
                        </p>
                        <h style={{color:'Cyan',padding:'0 0 0 20px'}}> STRATEGIE 8 : ENTRETIEN ET DEVELOPPEMENT DES INFRASTRUCTURES PORTUAIRES</h><br/>
                        <p style={{padding:'0 0 0 50px'}}>
                            44. Réhabiliter et mettre aux normes les infrastructures existantes<br/>
                            45. Mettre en place un système de contrôle et de suivi autonome des infrastructures  portuaires<br/>
                            46. Augmenter la capacité d'accueil par de nouvelles constructions ou extensions  des ports<br/>
                            47. Mettre en place un système de dragage permanent<br/>
                            48. Doter l’administration de base de données hydrographiques, bathymétriques et
                            techniques pour améliorer les prises de décision aux investissement portuaires et du transport maritime<br/>
                        </p>
                        <h style={{color:'Cyan',padding:'0 0 0 20px'}}>STRATEGIE 9 : MISE AUX NORMES ISPS DES PORTS</h><br/>
                        <p style={{padding:'0 0 0 50px'}}>
                            49. Doter les ports d’équipements modernes et performants<br/>
                            50. Mettre en place un système de coordination, de suivi et d’évaluation
                            permanente<br/>
                            51. Intégrer les usagers des ports et les partenaires privés dans la mise en place du
                            code ISPS<br/>
                            52. Renforcer la capacité des agents et étoffer l’équipe dans la mise en œuvre du
                            code ISPS<br/>
                            53. Clôturer et sécuriser tous les ports<br/>
                            54. Assurer l’éclairage des domaines portuaires<br/>
                        </p>
                        <h style={{color:'Cyan',padding:'0 0 0 20px'}}>STRATEGIE 10 : ENVIRONNEMENT PORTUAIRE PROPRE</h><br/>
                        <p style={{padding:'0 0 0 50px'}}> 
                            55. Doter des ports des installations portuaires de réception et de traitement des déchets<br/>
                            56. Mettre en place un système de contrôle environnemental des ports et des navires aux quais<br/>
                            57. Doter des ports internationaux des laboratoires d’analyses environnementales<br/>
                            58. Renforcer la capacité des PSCO en gestion de l’environnement<br/>
                            59. Étoffer l’équipe de PSCO en gestion de l’environnement<br/>
                            60. Collaborer avec les institutions de recherche et de gestion environnementale pour la préservation du milieu marin<br/>
                        </p><br/><br/>
                        <h1 style={{color:'DarkBlue',border: '1px blue solid'}}>OBJECTIF 4 : PORTS SECONDAIRES, UN MOYEN DE DESENCLAVEMENT DES REFIONS ET UN VECTEUR DE DEVELOPPEMENT</h1>
                        <h style={{color:'Cyan',padding:'0 0 0 20px'}}>STRATEGIE 11 : CONTRIBUER AU DEVELOPPEMENT ECONOMIQUE DES REGIONS</h>
                        <p style={{padding:'0 0 0 50px'}}>
                            61. Appuyer et favoriser les activités portuaires connexes (logistiques pétroliers, pêches, port franc)<br/>
                            62. Favoriser le recrutement local<br/>
                            63. Développement des partenariats institutionnels et prives pour accroitre les retombés économiques des ports<br/>
                        </p>
                        <h1 style={{color:'DimGray'}}>NAVIRES</h1><br/>
                        <p style={{ background:'Gainsboro '}}> FINALITE : NAVIRES MODERNISÉS ET PERFORMANTS</p>
                        <p style={{ background:'Gainsboro '}}>REALITE ACTUELLE</p>
                        <p style={{padding:'0 0 0 50px'}}> 
                            • Règlementation des chantiers navals insuffisante<br/>
                            • Structure insuffisante dans la gestion des navires<br/>
                            • Contrôles des navires irréguliers<br/>
                        </p>
                       <p style={{ background:'Gainsboro '}}>OUTILS DE REGULATION</p>
                       <p style={{padding:'0 0 0 50px'}}>
                           • Conventions internationales<br/>
                           • Code maritime malagasy<br/>
                           • Textes réglementaires<br/>
                       </p><br/><br/>
                       <h1 style={{color:'DarkBlue',border: '1px blue solid'}}>OBJECTIF 5 : NAVIRES RESPECTANT LES NORMES DE SECURITES</h1>
                       <h style={{color:'Cyan',padding:'0 0 0 20px'}}>STRATEGIE 12 : AMELIORATION DE L’ADMINISTRATION DE LA FLOTTE SOUS PAVILLON MALAGASY</h><br/>
                       <p style={{padding:'0 0 0 50px'}}> 
                            64. Numériser la base de données administrative et technique des navires<br/>
                            65. Renforcer le pool d'inspecteurs des affaires maritimes (IAM)<br/>
                            66. Appliquer le flag state control (FSC)<br/>
                            67. Mettre en place un système de délivrance d’actes administratifs (guichet unique ???)<br/>
                            68. Intensifier le contrôle des navires pour le respect de l’environnement maritime<br/>
                        </p>
                        <h style={{color:'Cyan',padding:'0 0 0 20px'}}>STRATEGIE 13 : NORMALISATION DE L’EXPLOITATION DES NAVIRES BATTANT PAVILLON MALAGASY</h><br/>
                        <p style={{padding:'0 0 0 50px'}}>
                            69. Renforcer le système de gestion et contrôle de cycle de vie des navires<br/>
                            70. Agréer les chantiers navals<br/>
                            71. Élaborer un catalogue des matériels de sécurités de navires<br/>
                            72. Agréer des établissements de distribution de matériels de sécurités<br/>
                            73. Mettre en place de centres de sécurité des navires<br/>
                            74. Mettre en place des bureaux de gestion d’accidents<br/>
                        </p>
                        <h1 style={{color:'DimGray'}}>TRANSPORT MARITIME</h1>
                        <p style={{ padding:'0 0 0 20px'}}>Le Transport Maritime est le plus approprié pour le transport de marchandises.
                            Normaliser les constructions navales et veiller au strict respect de la sécurité à la
                            navigation sont fondamentaux pour la sécurité des passagers, des biens et du navire luimême. L’APMF a déterminé tous les éléments techniques pour que la sécurité à la
                            navigation dans les eaux territoriales de Madagascar soit effective.</p>
                        <p style={{ background:'Gainsboro '}}>FINALITE : UN TRANSPORT MARITIME INNOVE, COMPETITIF, RESPECTUEUX DES NORMES DE SAUVEGARDE DE LA VIE HUMAINE EN MER ET DU MILIEU MARIN</p>
                        <p style={{ background:'Gainsboro '}}> REALITE ACTUELLE</p>
                        <p style={{padding:'0 0 0 50px'}}>
                            • Nombre d'inspecteurs insuffisant<br/>
                            • Équipements d'aide à la navigation insuffisants et non sécurisés<br/>
                            • Zones à risque non formalisées<br/>
                            • Système de contrôle des navires actuel limité au départ et à l'arrivée au port<br/>
                            • Lourdeur administrative retardant les interventions en cas d'événements en mer<br/>
                        </p>
                        <p style={{ background:'Gainsboro '}}>OUTILS DE REGULATION</p>
                        <p style={{padding:'0 0 0 50px'}}>
                            • Conventions internationales<br/>
                            • GlobalReg<br/>
                            • Code maritime malagasy<br/>
                            • Textes réglementaires<br/>
                        </p>
                        <h1 style={{color:'DarkBlue',border: '1px blue solid'}}>OBJECTIF 6 : EXPLOITATION MARITIME PERFORMANT ET COMPETITIF</h1><br/>
                        <h style={{color:'Cyan',padding:'0 0 0 20px'}}>STRATEGIE 14 : MISE EN PLACE DE REGISTRE INTERNATIONAL DE MADAGASCAR</h><br/>
                        <p style={{padding:'0 0 0 50px'}}>
                            75. Reconnaitre et agréer les organisations de sécurités et de sureté maritime notamment dans l’expertise et les sociétés de classification<br/>
                            76. Doter les moyens techniques pour la gestion de registre international de Madagascar<br/>
                        </p><br/><br/>
                        <h1 style={{color:'DarkBlue',border: '1px blue solid'}}>OBJECTIF 7 : NAVIGATION MARITIME DANS LES EAUX TERRITORIALES MALAGASY FIABLE ET CONTROLÉE</h1>
                        <h style={{color:'Cyan',padding:'0 0 0 20px'}}>STRATEGIE 15 : ASSISTANCE AUX NAVIGATEURS POUR LA CONDUITE DES NAVIRES</h>
                        <p style={{padding:'0 0 0 50px'}}>  
                            77. Actualiser les routes maritimes<br/>
                            78. Rendre disponible de façon permanente des cartes nautiques mise à jour<br/>
                            79. Installer et maintenir les équipements d’aides à la navigation<br/>
                            80. Formaliser les lignes de transport maritime<br/>
                            81. Cartographie les zones sensibles<br/>
                            82. Mettre en place des centres de contrôle à distance des équipements d’aide à la navigation<br/>
                            83. Mettre à disposition de manière effective les renseignements sur la sécurité maritime<br/>
                            84. Mettre en place des statons de contrôle pour le suivi des trafics maritimes<br/>
                            85. Renforcer la procédure de contrôle au départ et à l’arrivée des navires<br/>
                            86. Réaliser des inspections et de contrôle en mer<br/>
                            87. Déployer et contrôler les balises AIS pour les navires non conventionnel dans les zones à haut risque d’accident maritime et d’activité illicite<br/>
                            88. Installer et maintenir des stations AIS côtière<br/>
                        </p>
                        <h style={{color:'Cyan',padding:'0 0 0 20px'}}>STRATEGIE 16 : APPUI ET INTEVENTION EN CAS D’EVENEMENT EN MER</h>
                        <p style={{padding:'0 0 0 50px'}}> 
                            89. Mettre en place un système SAR<br/>
                            90. Mettre en place des centres de coordination des recherches et de sauvetages  maritimes<br/>
                            91. Développer des partenariats institutionnels pour les interventions en mer<br/>
                            92. Mettre en place des points de refuge pour les navires en détresses sur le  territoire maritime Malagasy<br/>
                            93. Vulgariser un mécanisme d’assistance en mer<br/>
                            94. Appuyer et sécuriser les évènements nautiques nationaux<br/>
                            95. Renforcer les capacités des agents de contrôle environnemental des navires<br/>
                        </p>
                        <h1 style={{color:'DimGray'}}>GENS DE MER</h1>
                        <p> Les Gens de Mer servent une noble cause car il s’agit de faire marcher de manière
                            continue le transport maritime à différents niveaux. Protéger leurs droits et promouvoir
                            le Travail Maritime par la structuration et la normalisation sont essentiels afin de réduire
                            les risques de surexploitation et dans le respect même des droits fondamentaux des
                            marins.</p>

                        <p style={{ background:'Gainsboro '}}>FINALITE : LES MARINS MALAGASY COMPÉTENTS ET LE TRAVAIL MARITIME DECENT</p>
                        <p style={{ background:'Gainsboro '}}>REALITE ACTUELLE</p>
                        <p style={{padding:'0 0 0 50px'}}>
                            • Retard sur la mise en œuvre de l'amendement de Manille<br/>
                            • Langue anglaise en tant que langue de sécurité à bord non maîtrisée par les marins Malagasy<br/>
                            • Besoins en formations internationales et nationales non satisfaits<br/>
                            • Agences de placement et/ou de recrutement non réglementées<br/>
                            • Métier de gens de mer méconnu (pourtant source de création d'emplois)<br/>
                            • Conditions de travail des marins au cabotage précaires<br/>
                        </p>
                        <p style={{ background:'Gainsboro '}}>OUTILS DE REGULATION</p>
                        <p style={{padding:'0 0 0 50px'}}>
                            • Convention STCW et autres<br/>
                            • Convention de Travail Maritime MLC 2006<br/>
                            • Code Maritime Malagasy<br/>
                            • Textes réglementaires nationaux<br/>
                        </p><br/><br/>
                        <h1  style={{color:'DarkBlue',border: '1px blue solid'}}> OBJECTIF 8 : MARINS MALAGASY COMPETENTS, RECONNUS ET PROTEGÉS DE PAR LEURS DROITS</h1><br/>
                        
                        <h style={{color:'Cyan',padding:'0 0 0 20px'}}>STRATEGIE 17 : MISE AUX NORMES STCW DES QUALIFICATIONS DES MARINS MALAGASY</h><br/>
                        <p style={{padding:'0 0 0 50px'}}>  
                            96. Appliquer et contrôler l’amendement de Manille<br/>
                            97. Renforcer la capacité linguistique des gens de mer<br/>
                        </p>
                        <h style={{color:'Cyan',padding:'0 0 0 20px'}}> STRATEGIE 18 : NORMALISATION DU METIER DE MARINS  PORTUAIRES</h><br/>
                        <p style={{padding:'0 0 0 50px'}}> 
                            98. Normaliser les qualifications des marins portuaires<br/>
                            99. Élaborer et adopter le statut particulier de marins portuaires<br/>
                            100. Renforcer la capacité professionnelle des marins portuaires<br/>
                        </p>
                        <h style={{color:'Cyan',padding:'0 0 0 20px'}}>STRATEGIE 19 : NORMALISATION DES AGENCES DE RECRUTEMENT ET DE PLACEMENT</h><br/>
                        <p style={{padding:'0 0 0 50px'}}>  
                            101. Renforcer le système d’agreement des agences de placement et/ou de recrutement pour la professionnalisation du métier<br/>
                            102. Instaurer un système de contrôle des agences en matière de recrutement des gens de mer<br/>
                        </p>
                        <h style={{color:'Cyan',padding:'0 0 0 20px'}}>STRATEGIE 20 : GESTION EFFICACE DE GENS DE MER</h><br/>
                        <p style={{padding:'0 0 0 50px'}}> 
                            103. Mettre en place une base de données électronique fiable des gens de mer<br/>
                            104. Mettre en place un dispositif de suivi des marins travaillant en freelance<br/>
                            105. Mener une veille du marché de travail des gens de mer sur le plan national et à l’international<br/>
                            106. Mettre en œuvre la Convention des Pièces d'Identité des Marins (PIM)<br/>
                            107. Ratifier et mettre en œuvre le MLC 2006<br/>
                            108. Réglementer le salaire et l'accès aux avantages sociaux<br/>
                            109. Renforcer le contrôle du système de visite médicale des gens de mer et créer à terme des cliniques des gens de mer<br/>
                            110. Mettre en place un système d’homologation des équipements de sécurité<br/>
                            111. Doter d’équipement de sauvetage les marins professionnels au cabotage<br/>
                            112. Réduire les couts de visite médicale des gens de mers au cabotage<br/>
                            113. Dispenser des formations professionnelles aux métiers de cabotages<br/>
                        </p>
                        <h style={{color:'Cyan',padding:'0 0 0 20px'}}>STRATEGIE 21 : ENCADREMENT ET FORMATION DE GENS DE MER</h><br/>
                        <p style={{padding:'0 0 0 50px'}}>   
                            114. Augmenter le nombre d’établissements de formation maritime<br/>
                            115. Renforcer le suivi et le contrôle des établissement et des formations<br/>
                            116. Formaliser le comité national tripartie sur le travail maritime incluant<br/>
                            les autorités, les représentants des employeurs et les représentants de gens de mer<br/>
                            117. Renforcer le comité paritaire sur la formation maritime<br/>
                        </p>
                        <center>
                            <img src="../../images/strag3.PNG" width="1100px" height="400px"/>
                        </center>

                        <p>Les fleuves constituent une voie de choix pour des localités difficilement accessibles par voie terrestre. Beaucoup de régions les utilisent pour se déplacer et transporter des produits de
                            première nécessité.</p>
                        <p>Le Transport Fluvial est une alternative pour les zones reculées. Optimiser la sécurité de la navigation intérieure pour promouvoir cette activité contribue aux échanges et par conséquent
                            au développement local.</p>

                        <p style={{ background:'Gainsboro '}}> FINALITE : LE TRANSPORT FLUVIAL, UN MOYEN INCITANT LE DÉVELOPPEMENT LOCAL</p>
                        
                        <p style={{ background:'Gainsboro '}}>REALITE ACTUELLE</p>
                        <p style={{padding:'0 0 0 50px'}}>
                            • Textes réglementaires existants mais non appliqués<br/>
                            • Accessibilité limitée des voies navigables<br/>
                            • Infrastructures dégradées<br/>
                            • Voies navigables non aménagées<br/>
                            • Transport généralement exploité de manière informel<br/><br/>
                        </p>
                       <p style={{ background:'Gainsboro '}}> OUTILS DE REGULATION</p>
                       <p style={{padding:'0 0 0 50px'}}>  
                            • Textes réglementaires<br/>
                            • Code de la Navigation Intérieure<br/>
                            • Règlement particulier de police<br/>
                            •Global Reg<br/>
                        </p><br/><br/>
                        <h1 style={{color:'DarkBlue',border: '1px blue solid'}}> OBJECTIF 9 : VOIES NAVIGABLES FLUIDE CONFORTANT LA MODERNISATION DU TRANSPORT FLUVIAL</h1>
                        
                        <h style={{color:'Cyan',padding:'0 0 0 20px'}}>STRATEGIE 22 : ENTRETIEN DES VOIES NAVIGABLES</h> 
                        <p style={{padding:'0 0 0 50px'}}>  
                            118. Dragages réguliers des canaux et fleuves dynamiques<br/>
                            119. Entretien des canaux<br/>
                            120. Protection des berges des voies navigables<br/>
                            121. Mise en place de panneau de signalisation<br/>
                        </p>
                        <h style={{color:'Cyan',padding:'0 0 0 20px'}}>STRATEGIE 23 : MODERNISATION DES INFRASTRUCTURES FLUVIALES</h>
                        <p style={{padding:'0 0 0 50px'}}>
                            122. Entretenir et mettre à niveau des infrastructures portuaires adaptées à chaque voie navigable<br/>
                            123. Construire des infrastructures adaptées au site économiquement dynamique<br/>
                            124. Assurer un environnement portuaire et fluviale propre et respectueux de l’environnement<br/>
                        </p>
                        <h style={{color:'Cyan',padding:'0 0 0 20px'}}>STRATEGIE 24 : NORMALISATION DES NAVIRES</h><br/>
                        <p style={{padding:'0 0 0 50px'}}>
                            125. Renforcer les visites de sécurité et contrôle des navires<br/>
                            126. Mettre en place de bureau locale de contrôles des navires<br/>
                            127. Élaborer une base de données numériques des navires<br/>
                            128. Agréer et contrôler les chantiers navals<br/>
                            129. Prescrire les consignes de sécurités pour les constructions traditionnelles et artisanales<br/>
                            130. Inciter la modernisation des embarcations et prescrire les normes de sécurité correspondant à chaque catégorie
                        </p>
                        <h style={{color:'Cyan',padding:'0 0 0 20px'}}>STRATEGIE 25 : NAVIGATION INTERIEUR INNOVÉ ET SECURITAIRE</h>
                        <p style={{padding:'0 0 0 50px'}}>
                            131. Élaborer et appliquer le code de la navigation intérieure<br/>
                            132. Formaliser et contrôler les lignes fluviales<br/>
                            133. Élaborer et appliquer des règlementations spécifiques pour chaque voie navigable<br/>
                        </p>
                        <h style={{color:'Cyan',padding:'0 0 0 20px'}}>STRATEGIE 26 : GESTION EFFICACE DES MARINIERS</h><br/>
                        <p style={{padding:'0 0 0 50px'}}>  
                            134. Mettre en place une base de données électronique fiable des mariniers<br/>
                            135. Formaliser les métiers des mariniers<br/>
                            136. Agréer des établissements et de centre de formation fluviale<br/>
                            137. Renforcer et contrôler régulièrement la capacité des mariniers<br/>
                        </p>
                        <h style={{color:'Cyan',padding:'0 0 0 20px'}}>STRATEGIE 27 : RENFORCEMENT DE SECURITE À LA NAVIGATION</h><br/>
                        <p style={{padding:'0 0 0 50px'}}>
                            138. Installer et entretenir des balises et de consignes de sécurités aux voies  navigables<br/>
                            139. Mettre en place des polices de la navigation<br/>
                            140. Mettre en placement un système SAR à la navigation intérieure<br/>
                            141. Doter des moyens matériels flottant pour la sécurisation de la navigation intérieure et pour des activités de recherches et sauvetage<br/>
                        </p><br/><br/>
                        <h1 style={{color:'DarkBlue',border: '1px blue solid'}}> OBJECTIF 10 : TRANSPORT FLUVIAL, MOYEN DE DESENCLAVEMENT ET D’ACCOMPAGNEMENT AU  DEVELOPPEMENT LOCAL</h1><br/>

                        <h style={{color:'Cyan',padding:'0 0 0 20px'}}>STRATEGIE 28 : RENFORCEMENT DE SECURITE À LA NAVIGATION ET APPUI ET INTEVENTION EN CAS D’EVENEMENT FLUVIAL</h><br/>
                        <p style={{padding:'0 0 0 50px'}}>
                            142. Sécuriser les évènements nautiques et fluviaux nationaux<br/>
                            143. Développer des partenariats public-privés dans l’exploitation portuaire et des voies navigables<br/>
                            144. Doter les collectivités et autorités locales d’équipements de sauvetage<br/>
                            145. Sécuriser les ports fluviaux par le renforcement de contrôles des personnes et des marchandises<br/>
                            146. Clôturer et mettre en place des éclairages suffisants dans l’enceinte portuaire<br/>
                            147. Inciter le PPP aux activités et exploitations portuaires<br/>
                        </p>
                        <h1 style={{color:'Aqua'}}>CONCLUSION</h1><br/>
                        <p>
                             L’élaboration du Document d’Orientation Stratégique est une étape cruciale dans la réalisation de la vision à long terme de l’APMF. Elle fait partie de sa démarche logique et permet de
                            tracer les grandes lignes des activités du sous-secteur portuaire, maritime et fluvial.<br/>
                            Les objectifs à terme sont définis pour obtenir les résultats attendus. Ces derniers seront suivis tant aux niveaux opérationnel que stratégique.
                            Le DOS impactera sur la forme de partenariat adopté avec les investisseurs internationaux et locaux ; il s’agit d’avoir un développement équitable et profitable à toutes les parties.
                            Il s’en suivra également une revue des réglementations.<br/>
                            L’APMF a des défis importants à relever pour réaliser sa Vision. La réalisation de ses activités nécessite l’implication du personnel en interne et la collaboration avec les autres entités en
                            externe.<br/>
                            L’APMF, dans le cadre du développement du sous-secteur, a besoin du soutien de ses Ministères de Tutelle, entre autres par la valorisation du potentiel du sous-secteur portuaire, maritime
                            et fluvial à Madagascar.<br/>
                            Pour sortir de la pauvreté, Madagascar doit faire face à plusieurs défis, déclinés dans la Politique Générale de l’Etat. Le sous-secteur portuaire, maritime et fluvial est un levier de
                            développement avéré pour son économie. Ce sera à travers la maîtrise et la normalisation de ce sous-secteur que Madagascar pourra donner confiance aux investisseurs, et amplifier par
                            la suite son trafic commercial.<br/>
                            Cette dynamisation des échanges impactera également l’économie des différentes régions par la création d’activités locales et d’emplois.
                            La réalisation de cette vision passe inévitablement par la bonne gouvernance et l’engagement de tout un chacun.<br/>
                        </p>
        </div>
            <button onClick={this.generatePDF} class="btn btn-primary"> Dos PDF</button> <br/><br/>
        <Footer />
    </div> 
        )
    }               
}             
export default Dos