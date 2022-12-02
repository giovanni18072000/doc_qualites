import { PureComponent } from 'react';
import Menu from '../navigation/Menu';
import Footer from '../navigation/Footer';
import '../evaluation/evaluation.css'

class Evaluation extends PureComponent {
    
    render() {   
        return ( 
        <div  className="col-lg-12 grid-margin stretch-card">
        <Menu />
        <div class="container"><br/>
                <center>
                {/* <table width="1200px" height="300px">
                    <tr> 
                        <td rowspan="3">
                            <center>
                                <img src="../../images/apmf1.jfif" alt="logo"/>
                            </center>
                        </td>
                        <th colspan="3"></th>
                        <td>
                            <center>
                                Réf :
                            </center>
                        </td>
                        <td>
                            <center>
                                FICHE P-02
                            </center>
                        </td>
                    </tr> 
                    <tr>
                        <td colspan="3"> GUIDE de NOTATION pour l’EVALUATION des PERSONNELS de l’APMF </td>
                        <td>
                            <center>
                                Version:
                            </center>
                        </td>
                        <td>
                            <center>
                                2
                            </center>
                        </td>
                    </tr> 
                    <tr> 
                        <td>Proposé par : CSMQ-SE</td>
                        <td>Approuvé par : CSMQ-SE</td> 
                        <td>Validé par : DG </td> 
                        <td>Type :</td> 
                        <td>Formulaire</td> 
                    </tr>               
                </table> */}
                <table width="1200px" height="300px">
                <tr>
                    <td style={{color:'black'}} rowSpan="5" >
                            <center>
                                <img src="../../images/apmf1.jfif" alt="logo"/>
                            </center>
                    </td>
                    <td style={{color:'black'}}></td>
                    <td style={{color:'black'}}>
                            <center>
                                Réf :
                            </center>
                    </td>
                    <td style={{color:'black'}}>
                        <center>
                            FICHE P-02
                        </center>
                    </td>
                </tr>
                <tr>
                    <th rowspan="3"> 
                        <center>                      
                            GUIDE de NOTATION pour l’EVALUATION des PERSONNELS de l’APMF
                        </center>
                    </th>
                    <td>
                        <center>
                            Version:
                        </center>
                    </td>
                    <td>
                        <center>
                            2
                        </center>
                    </td>
                    
                </tr>
                <tr>
                    <td>
                        <center>
                            Créé le :
                        </center>
                    </td>
                    <td>
                        <center>
                            06/01/2020
                        </center>
                    </td>
                </tr>
                <tr>
                    <td>
                        <center>
                            Revue le :
                        </center>
                    </td>
                    <td>
                    </td>
                </tr>
                <tr>
                    <td rowspan="3"> 
                        <center>                      
                            Proposé par : CSMQ-SE F, Approuvé par : CSMQ-SE, Validé par : DG
                        </center>
                    </td>
                    <td>
                        <center>
                            Type :
                        </center>
                    </td>
                    <td>
                        <center>
                            Formulaire
                        </center>
                    </td>
                </tr>
            </table><br/><br/>

                </center><br/>
                <center>
                    <img src="../../images/apmf1.jfif" alt="logo"/>
                </center><br/>

                <h1 style={{color:'black',background:'BurlyWood',border: '1px BurlyWood solid'}}>
                    <center>
                        GUIDE DE NOTATION<br/>
                        (EVALUATION DES PERSONNELS DE L’APMF)<br/><br/><br/>
                        <h3>DIRECTION DES RESSOURCES HUMAINES<br/>
                            05/03/2020
                        </h3>
                    </center>
                </h1><br/><br/>
                <p style={{color:'black',padding:'0 0 0 20px'}}>En vertu de l’article 10, article 26 de la convention collective de l’Agence Portuaire Maritime et
                    Fluviale, le système de notation a pour fonction principale de refléter l’appréciation portée sur la
                    valeur professionnelle des agents par le chef hiérarchique, en vue notamment de répartir, selon les
                    mérites de chacun d’eux, des avantages de carrière qu’elle accorde de façon discrétionnaire. </p>

                <u style={{color:'black',padding:'0 0 0 20px'}}>SOMMAIRE</u><br/>
                <p style={{color:'black'}}> POURQUOI ON EVALUE ?</p>
                    <p style={{color:'black',padding:'0 0 0 20px'}}>
                    Objectifs de l'appréciation et évaluation de personnel<br/>
                    Pour l'employé:<br/>
                    Pour les cadres dirigeants:<br/>
                </p>
                <p style={{color:'black'}}>
                    ÉTAPES PRÉALABLES À L'ENTREVUE D'APPRÉCIATION<br/>
                    L'ENTREVUE D'APPRÉCIATION<br/>
                    LE SUIVI DE L'APPRÉCIATION<br/>
                    ÉVALUATION D’INTERVENANTS(TES) DIFFICILES ET RÉSISTANTS(ES) <br/>
                    CRITÈRES GÉNÉRAUX D'ÉVALUATION <br/>
                </p>
                I. Valeur Générale<br/>
                <p style={{padding:'0 0 0 20px'}}>
                    a) Qualité du Travail :<br/>
                    b) Quantité de Travail : <br/>
                    c) Présentation personnelle <br/>
                </p>

                II. Capacité professionnelle<br/>
                <p style={{padding:'0 0 0 20px'}}>
                    d) Connaissance des Techniques: <br/>
                    e) Besoin de supervision :<br/>
                    f) L’aptitude à apprendre
                </p>

                III. Assiduité au service<br/>
                <p style={{padding:'0 0 0 20px'}}>
                    g) Ponctualité<br/>
                    h) Assiduité <br/>
                </p>

                IV. Efficacité<br/>
                <p style={{padding:'0 0 0 20px'}}>
                    i) Motivation <br/>
                    j) Initiative<br/>
                    V. Ténacités<br/>
                    k) Attitude envers son supérieur hiérarchique<br/>
                    l) Discrétion<br/>
                    m) Honnêteté <br/>
                    n) Secret professionnel et/ou d'office<br/>
                </p>
                VI. Travail en équipe <br/>
                <p style={{padding:'0 0 0 20px'}}>
                    o) Relation avec les employés<br/>
                    p) Relations avec les visiteurs et autres personnes<br/>
                    q) Esprit d'équipe <br/>
                </p>
                <center>
                    <h1 style={{color:'black'}}>Contexte</h1>
                </center>
                <p style={{padding:'0 0 0 40px'}}>Dans ce cadre, la notation, formulation de cette appréciation, est par nature
                    comparative, entre les agents d’un même grade ou d’un même corps appartenant
                    à une même direction/Représentation ; la notation est évolutive puisque les aptitudes
                    et les comportements professionnels d’un agent peuvent révéler des variations dans
                    le temps ou mériter une appréciation différente dans l’exercice d’un nouvel emploi.</p><br/>

                <h3 style={{color:'black'}}>POURQUOI ON EVALUE ?</h3>
                <p style={{padding:'0 0 0 20px'}}>
                    • Reconnaître le savoir, le savoir-faire et le savoir être des employé(e)s.<br/>
                    • Valoriser et récompenser les bons comportements ainsi que les objectifs préalablement établis.<br/>
                </p>
                <h3  style={{color:'black'}}>Objectifs de l'appréciation et évaluation de personnel</h3><br/>

                <h3  style={{color:'black'}}>Pour l'employé:</h3>
                <p style={{padding:'0 0 0 20px'}}>
                    • Connaître ses responsabilités et les attentes face à son rendement au travail.<br/>
                    • Savoir sur quels critères et selon quelles normes il sera apprécié.<br/>
                    • Connaître les objectifs à atteindre.<br/>
                    • Discuter du soutien nécessaire à l'atteinte des objectifs.<br/>
                </p>
               <h  style={{color:'black'}}> Pour les cadres dirigeants:</h>
               <p style={{padding:'0 0 0 20px'}}>
                    • Clarifier certains sujets.<br/>
                    • Valoriser les employé(e)s dans l'exécution de leur travail.<br/>
                    • Fixer avec les employé(e)s les objectifs à atteindre en fonction de leurs tâches.<br/>
                    • Connaître les attentes des employé(e)s.<br/><br/>
                </p>
                <h3  style={{color:'black'}}>ÉTAPES PRÉALABLES À L'ENTREVUE  D'APPRÉCIATION </h3>
                <p style={{padding:'0 0 0 40px'}}>Afin que le processus d'appréciation rencontre les objectifs fixés  initialement, certaines conditions "gagnantes" doivent être respectées,
                    avant même de rencontrer l'employé(e) en entrevue individuelle d'appréciation.</p>
                    1. Dans un premier temps, clarifiez vos attentes envers tous les employé(e)s de votre Agence. Vous démarrez le processus d'appréciation, alors rencontrez
                    les employé(e)s (en groupe ou individuellement) et expliquez-leur la démarche en spécifiant sur quoi portera l'appréciation et présentez-leur un
                    exemplaire du formulaire utilisé (NEPI).<br/>
                    2. Tout au long de l'année, notez les mandats confiés à l'employé(e) à l’aide de la description de tâches, ses objectifs
                    (s'il y a lieu), ses bons coups et ses moins  bons coups.<br/>
                    3. Avant de compléter l'appréciation, révisez le dossier de l'employé(e) pour ne rien oublier.<br/>
                    4. Révisez votre outil de travail, c'est-à-dire  votre grille d'appréciation et remettez-en une copie à l'employé(e) pour qu'il puisse
                    procéder à son auto appréciation (demandez-lui de réfléchir à des objectifs pour l'année suivante).<br/>
                    5. Complétez votre grille d'appréciation  en vous appuyant sur des faits concrets et  en justifiant vos réponses par des exemples.<br/>
                    6. Préparez un horaire d'entrevue en choisissant les bons moments (évitez les lundis matin ou les vendredis après-midi)
                    et prévoir suffisamment de temps (60 minutes, au-delà ce n’est plus pédagogique).<br/>
                    7. Avisez l'employé(e) à l'avance de la date et de l'heure prévues pour son entrevue d'appréciation de la performance.<br/><br/>

                <h3  style={{color:'black'}}>L'ENTREVUE D'APPRÉCIATION</h3>
                <p style={{padding:'0 0 0 40px'}}>Une fois bien préparé, vous voilà rendu à l'étape de l'entrevue d'appréciation, c'est-à-dire l'occasion de 
                    communiquer avec l'employé(e) au sujet de son rendement, de lui fixer des  objectifs et de lui demander de la  rétroaction sur sa satisfaction au travail.
                    C'est également le moment de discuter des possibilités de développement et des besoins de formation.</p><br/>
                <h  style={{color:'black',padding:'0 0 0 60px'}}>1. Assurez-vous que le local est approprié pour l'entrevue (porte et téléphone fermés) et que vous ne serez pas dérangé durant l'appréciation.<br/></h>

                <h  style={{color:'black',padding:'0 0 0 60px'}}>2. Établissez un climat de confiance dès le début de la rencontre et  rappelez le but de la rencontre.Misez sur la bonne foi et la sincérité.<br/></h><br/>
                Débutez l'appréciation en vous servant  de votre outil comme guide de discussion.  Comment a-t-il (elle) trouvé le guide ? a-til (elle) eu de la difficulté à s'auto apprécier ?<br/>
                <p style={{padding:'0 0 0 40px'}}>
                    • Passez en revue avec l'employé(e)les différents comportements appréciés et  demandez-lui comment il (elle) s'est évalué(e) et s'il (elle) est d'accord avec votre appréciation. Souvent,
                        l’évaluation  permet de cerner l’ensemble des attitudes et comportements : les bons et les moins bons.<br/>
                    • Faites une appréciation globale de  employé(e): aspect positif – aspect à améliorer – aspect négatif. « Arrosez les bonnes graines… attardez-vous sur quelques éléments à travailler ».<br/>
                    • Regardez quels sont les objectifs  que l'employé(e) s'est fixé et discutez-en avec lui.<br/>
                    • Fixez les objectifs définitifs avec l'employé(e) et décrivez avec lui les principales étapes de réalisation.<br/>
                    • Déterminez conjointement un échéancier à respecter pour ces objectifs et offrez votre soutien et les ressources nécessaires à l'atteinte des objectifs fixés.
                    
                    • Concluez l'entrevue d'appréciation en demandant à l'employé(e) ses commentaires généraux face à l'emploi et à l'entrevue. Par ex. : « Est-ce que ça te convient » etc.
                    • Ensuite, vous devez conclure votre entretien en élaborant les objectifs et en signant un engagement écrit sur les  points discutés.
                    • Terminez sur une note positive et fixez une date pour le suivi. 
                </p>
                <h3  style={{color:'black'}}>LE SUIVI DE L'APPRÉCIATION</h3>

                <p> L'entrevue terminée, il est maintenant temps de faire le suivi. Assurez-vous que l'employé(e) réalise les objectifs fixés et  que vous mettez en place les mesures de
                support convenues. Ce suivi devrait être fait, normalement, trois mois après la rencontre d'appréciation.</p>

                <p> Les étapes sont donc les suivantes:</p>
                <p style={{padding:'0 0 0 40px'}}>
                    • Respectez vos engagements et mettez en place les mesures de soutien convenues lors de votre rencontre.<br/>
                    • Donnez de la rétroaction et informez-vous sur les actions mises de l'avant.<br/>
                    • Assurez-vous que les attentes soient prises en considération et examinez les  progrès réalisés.<br/>
                    • Continuez à donner de la rétroaction.<br/>
                    • Faites un suivi avec l'employé(e) selon les échéanciers fixés.<br/>
                </p><br/>
                <h3  style={{color:'black'}}>ÉVALUATION D’INTERVENANTS(TES) DIFFICILES ET RÉSISTANTS(ES)</h3>

                <p> L’ensemble des milieux de travail, a son lot d’intervenants et d’intervenantes difficiles ou qui manifestent de la résistance. Lors du processus d’évaluation, ces personnes peuvent entraver la
                    démarche d’évaluation. La personne qui value doit se concentrer sur l'intérêt en jeu et non sur ses positions.</p>
                    <p style={{padding:'0 0 0 40px'}}>
                    • Différence entre des intérêts et des positions.<br/>
                    • Un intérêt, c'est le moteur silencieux de l'action (souvent lié à une  préoccupation).<br/>
                    • Se mettre à la place de l'autre : comprendre et anticiper les intérêts de l'autre.<br/>
                    • Discuter des intérêts divergents et convergents.<br/>
                    • Intérêt convergent : le personnel  desservi…<br/>
                </p>
                <p>Dans ces cas, il faut distinguer les personnes en difficulté et les personnes difficiles. Attention à l’étiquetage : notre sensibilité à certains comportements…
                    «des personnes carrément difficiles et des personnes difficiles dans certains comportements». Analyser la persistance des comportements et attitudes et
                    impacts sur le climat et les interventions.<br/></p>

                <p>Voici quelques problèmes rencontrés :</p>
                <p style={{color:'black'}}>1) Rendement inadéquat au travail</p>
                a) Versus le rendement satisfaisant des autres employé(e)s dans les mêmes circonstances.
                <p  style={{color:'black'}}>2) Fonctionnement personnel (exercice inadéquat de son rôle)<br/></p>
                a) Problème de personnalité (ex.agressivité).<br/>
                b) Attitude (ex. motivation, refus de travailler en équipe).<br/>
                c) Comportements (ex. toxicomanie).<br/>
                d) Absentéisme répété, vol. <br/>
                e) Abus des outils de travail (ex. téléphone, Internet…).
                f) Contestation de son supérieur hiérarchique (ne pas confondre avec des divergences d'opinion qui doivent être encouragées).<br/>
                g) Critique systématique des décisions prises démocratiquement  Influence néfaste sur le climat de travail  Il faut garder à l’esprit que le processus
                d’évaluation doit être fait dans une attitude positive et honnête.<br/>
                3) Attitudes pour intervenir ?<br/>
                a) Communication interpersonnelle de qualité.<br/>
                b) Respect de la personne : on veut  changer le comportement, non la personne.<br/>
                c) Objectif de la démarche : trouver des solutions acceptables pour tous (approche de coopération).<br/>
                d) Éviter de mettre la barre trop haute à un(e) employé(e) correct(e).<br/>
                e) Attitude ferme…avant la ligne  dure à un(e) employé(e) difficile.<br/>

                <p>Ce processus d'appréciation pourra  être révisé suite à un cycle complet  d'appréciation (un an après le début du  processus).</p>
                
                <p>Afin d'évaluer la validité du processus  proposé, il faut vérifier si celui-ci permet d'atteindre les objectifs fixés, c'est-à-dire :</p>
               
               . Reconnaître le savoir, le savoir-faire et le  savoir être des employé(e)s.<br/>
               . Valoriser et récompenser les bons  comportements ainsi que l'atteinte d'objectifs préalablement établis.<br/>

               <h3 style={{color:'black'}}>CRITÈRES GÉNÉRAUX D'ÉVALUATION</h3>
               <p style={{color:'black'}}>I. Valeur Générale</p>
               <p style={{color:'black'}}>a) Qualité du Travail :</p>
                Réfère à l'exactitude et/ou à la précision du travail accompli, à la méthode de travail utilisée et à la fréquence des erreurs.
                
                <p>- Accomplit toujours son travail avec exactitude et/ou précision, perfectionniste [20-16[.</p>
                <p>- Accomplit habituellement son travail avec exactitude [16-12[.</p>
                <p>- Quelques tâches ont parfois besoin d'être reprises [12-10[</p>
                {/* <p>- Les tâches ont souvent besoin d'être reprises et demandent une vérification constante de la qualité de son travail [<10[.</p> */}
                
                <h style={{color:'black'}}>b) Quantité de Travail :</h>
                <p> Réfère à la proportion des tâches accomplies en rapport au travail assigné.</p>
                <p>- Accomplit plus que le travail demandé dans les délais requis [20-16[.</p>
                <p>- Accomplit le travail demandé dans les délais requis [16-12[.</p>
                <p>- Accomplit le travail demandé avec quelques retards [12-10[.</p>
                {/* <p>- Accomplit moins que le travail demandé [<10[.</p> */}

                <h style={{color:'black'}}>c) Présentation personnelle</h>
                <p>Réfère à la tenue vestimentaire, au langage, au décorum et à la tenue générale.</p>
                <p>- Tenue et attitudes irréprochables : présentation personnelle toujours à point [20-16[.</p>
                <p>- Tenue et attitudes convenables : présentation personnelle habituellement à point [16-10[</p>
                {/* <p>- Tenue et attitudes inconvenables : présentation personnelle inacceptable [<10[.</p> */}

                <h style={{color:'black'}}>II. Capacité professionnelle</h>

                <h style={{color:'black'}}>d) Connaissance des Techniques:</h>
                <p>Réfère au niveau de connaissance des techniques et/ou de l'équipement utilisé.</p>
                <p>- Maîtrise toutes les connaissances requises pour son travail. [20-16[</p>
                <p>- Possède la majorité des connaissances requises pour son travail. [16-14[</p>
                <p>- Niveau de connaissances acceptable pour son travail. [14-10[</p>
                {/* <p>- Les connaissances sont insuffisantes pour son travail. [<10[</p> */}

                <h style={{color:'black'}}>e) Besoin de supervision :</h>
                <p>Réfère au sens des responsabilités et au degré d'autonomie atteint par l'individu ainsi qu'à la fréquence des contrôles exigés.</p>
                <p> - Exige un minimum de supervision dans l'exécution de ses tâches [20-16[</p>
                <p>- Exige une supervision normale dans l'exécution de ses tâches [16-14[</p>
                <p>- Exige parfois une supervision étroite dans l'exécution de ses tâches [14-10[</p>
                {/* <p>- Exige toujours une supervision étroite et/ou constante dans l'exécution de ses tâches. [<10[</p> */}
                <h style={{color:'black'}}>f) L’aptitude à apprendre</h>
                <p> On définit les capacités d'apprentissage comme l'habileté générale à apprendre, à comprendre des instructions et à en saisir les principes fondamentaux, à raisonner et à  prendre des décisions.</p>
                
                <p>- Acquiert et assimile les connaissances très facilement : apprend très rapidement. [20-16[.</p>
                <p>- Acquiert et assimile les connaissances facilement : apprend rapidement. [16-12[</p>
                <p>- Acquiert et assimile les connaissances plutôt difficilement: apprend lentement, exige occasionnellement des répétitions de directives et d'enseignement. [12-10[.</p>
                {/* <p>- Acquiert et assimile très difficilement : apprend très lentement, nombreuses répétitions. [<10[.</p> */}

                <p style={{color:'black'}}>III. Assiduité au service</p>

                <p style={{color:'black'}}>g) Ponctualité</p>

                <p>Réfère au respect des horaires et des heures d'arrivée et de départ.</p>
                
                <p>- Ponctualité exemplaire, jamais en retard, respecte tous les horaires [20-16[</p>
                <p>- Ponctualité habituellement régulière, manquements occasionnels [16-10[</p>
                {/* <p>- Ponctualité nettement irrégulière et déficiente, manquements fréquents. [<10[</p> */}
                
                <p style={{color:'black'}}>h) Assiduité</p>
                
                <p>Réfère à la présence au travail.</p>
                
                <p>- Assiduité exemplaire : jamais d’absences [20-16[</p>
                <p>- Assiduité régulière : absences occasionnelles [16-10[</p>
                {/* <p>- Assiduité irrégulière et déficiente : absences fréquentes [<10[</p> */}
                
                <p style={{color:'black'}}>IV. Efficacité</p>
                
                <p style={{color:'black'}}>i) Motivation Intérêt et engagement envers le travail.</p>
               
                <p>- Intérêt manifesté envers son travail : s'applique à donner un rendement  supérieur, cherche constamment à améliorer la connaissance de son travail, démontre de l'ardeur. [20-16[</p>
                <p>- Intéressé par son travail : s'applique à bien faire, cherche à donner un bon rendement intéressé à parfaire ses connaissances de travail, s'engage de façon positive. [16-14[</p>
                <p> - Intérêt limité face à son travail : n’est pas toujours préoccupé(e) par son rendement et ses possibilités de perfectionnement. [14-10[</p>
                {/* <p>- Manque totalement d'intérêt face à son travail : peu soucieux (se) de son rendement et de ses possibilités de perfectionnement, aucun engagement dans son travail… [<10[</p> */}
                
                <p style={{color:'black'}}>j) Initiative</p>
                
                <p>Réfère à la capacité d'adaptation aux situations nouvelles, à la spontanéité à agir soimême et à la créativité démontrée à l'intérieur des limites de ses fonctions.</p>
            
                <p>- Fait toujours preuve d'initiative et d'esprit créateur dans l'exercice de ses fonctions : sait anticiper et résoudre les problèmes inhérents à son travail. [20- 16[</p>
                <p>- Démontre habituellement de l'initiative dans l'exercice de ses fonctions : réussit habituellement à résoudre les problèmes rencontrés. [16-14[</p>
                <p>- Évolue dans le cadre de la routine de son travail: s'ajuste aux difficultés  mineures. [14-10[</p>
                {/* <p>- Manque totalement d'initiative dans l'exercice de ses fonctions - a constamment besoin d'être dirigé et guidé - attend généralement qu'on lui dise  quoi faire, ne peut résoudre seul les problèmes simples. [<10[</p> */}
                
                <p style={{color:'black'}}>V. Ténacités</p>
                
                <p style={{color:'black'}}>k) Attitude envers son supérieur hiérarchique</p>
               
                <p>Réfère à la qualité des rapports entre l'employé(e)et ses supérieurs.</p>
                
                <p>- Respecte intégralement toutes les directives: toujours prêt(e) à collaborer, avoir  plus de persévérance, apporte des critiques constructives, fait preuve de beaucoup de tact dans ses rapports avec son supérieur hiérarchique. [20-16[</p>
                <p>- Respecte les directives : réagit positivement à son supérieur hiérarchique, fait preuve de bonne volonté, entretient de bons rapports avec son supérieur  hiérarchique. [16-14[</p>
                <p>- Respecte habituellement les directives : difficultés occasionnelles au niveau du  dialogue et de la collaboration avec son supérieur hiérarchique. [14-10[</p>
                {/* <p>- Ne respecte pas les directives : critique de façon négative, difficultés marquées dans le dialogue et les relations avec son supérieur hiérarchique. [<10[</p> */}
                
                <p style={{color:'black'}}>l) Discrétion</p>

               <p>- La confidentialité des discussions et des croyances sont respectées. [20-16[</p>
                <p>- La majorité du temps, la confidentialité des discussions et des croyances sont  respectées.  [16-14[</p>
                <p>- Éprouve de la difficulté à respecter la confidentialité des discussions et des croyances. [14-10[</p>
                {/* <p>- Ne respecte pas la confidentialité des discussions et des croyances. [<10[</p> */}

                <p style={{color:'black'}}>m) Honnêteté</p>
                
                <p> Réfère aux aspects suivants : franchise, respect de la propriété d'autrui, observation des règles de la justice et de la loyauté, respect de ses engagements envers l'employeur et envers le milieu.</p>
                <p>- Fait preuve de grande honnêteté. [20-16[</p>
                <p>- Individu honnête. [16-14[</p>
                <p>- Fait habituellement preuve d'honnêteté. [14-10[</p>
                {/* <p>- Manquements fréquents et/ou importants à l'honnêteté. [<10[</p> */}

                <p style={{color:'black'}}>n) Secret professionnel et/ou d'office</p>

                <p>Réfère au respect de la confidentialité et à l'information accessible.</p>
                <p>- Manipule l'information de manière tout à fait confidentielle. [20-16[</p>
                <p>- Fait habituellement preuve de discrétion dans la manipulation de l'information. [16-14[</p>
                <p>- Indiscrétions occasionnelles : secret professionnel non respecté. [14-10[</p>
                {/* <p>- Manquements répétés à la discrétion et/ou secret professionnel. [<10[</p> */}

                <p style={{color:'black'}}>VI. Travail en équipe</p>

                <p style={{color:'black'}}> o) Relation avec les employés</p>

                <p>Réfère à la qualité des rapports existants entre l'individu et les autres employé(e)s.</p>
                <p>- Établit et maintien de façon harmonieuse des relations avec tous les employé(e)s de l'équipe. [20-16[</p>
                <p>- Établit et maintien des relations avec tous les employé(e)s de l'équipe. [16-14[</p>
                <p>- Éprouve des difficultés à établir et maintenir des relations avec tous les  employé(e)s de l'équipe. [14-10[</p>
                {/* <p>- Ne réussit pas à établir et maintenir des relations avec tous les membres de l'équipe. [<10[</p> */}
                
                <p style={{color:'black'}}>p) Relations avec les visiteurs et autres personnes</p>
               
                <p>- Niveau atteint dans les communications et contacts avec les visiteurs et autres personnes. [20-16[</p>
                <p>- Considération et intérêt manifestés envers les visiteurs et autres personnes. [16-14[</p>
                <p>- Courtoisie envers les visiteurs et autres personnes. [14-10[ </p>
                
                <p style={{color:'black'}}>q) Esprit d'équipe</p>
              
                <p>- Contribue efficacement et/ou volontairement au partage des tâches. [20-16[</p>
                <p>- Contribue au partage des tâches de façon satisfaisante. [16-14[</p>
                <p>- A de la difficulté à contribuer au partage des tâches. [14-10[</p><br/>
                {/* <p>- Ne contribue pas au partage des tâches. [<10[</p> */}

                <h3 style={{color:'black'}}> FORMULE D’APPRECIATION GENERALE</h3>
                <center>
                <table>
                    <tr>
                        <th>NOTE</th>
                        <th>APPRECIATION</th>
                    </tr>
                    <tr>
                        <td>[20-16[</td>
                        <td>
                            • Fait preuve de rigueur dans son travail.<br/>
                           • Planifie et organise son travail de façon adéquate<br/>
                           • Répond aux exigences relatives à la quantité de travail.<br/>
                           • Possède les connaissances techniques nécessaires<br/>
                           • Dépasse largement et de façon constante les exigences<br/>
                           • Accomplit toujours son travail avec exactitude, précision et perfectionniste<br/>
                           • Fait preuve de grande honnêteté<br/>
                           • Respecte habituellement les directives<br/>
                           • Fait toujours preuve d'initiative et d'esprit créateur dans  l'exercice 
                            de ses fonctions<br/>
                        </td>
                    </tr>
                    <tr>
                        <td>[16-14[</td>
                        <td>
                           • Dépasse fréquemment les exigences normales
                           • Réussit habituellement à résoudre les problèmes  rencontrés.
                           • Décisions et agissements généralement à point
                           • Individu honnête
                           • S'engager de façon positive
                           • Acquiert et assimile les connaissances facilement
                           • Accomplit habituellement son travail avec exactitude

                        </td>
                    </tr>
                    <tr>
                        <td>[14-10[</td>
                        <td>
                            • Fait habituellement preuve d'honnêteté
                           • Respecte habituellement les directives
                           • Intérêt limité face à son travail
                           • Niveau de connaissances acceptable pour son travail.
                        </td>
                    </tr>
                    <tr>
                        {/* <td>[<10[</td> */}
                        <td>
                            • Manquements répétés à la discrétion et/ou secret professionnel.
                            • Ne respecte pas les directives
                            • Manque total d'initiative dans l'exercice de ses fonctions
                            • Les connaissances sont insuffisantes pour son travail
                            • absences fréquentes
                            • Ponctualité nettement irrégulière et déficiente
                        </td>
                    </tr>
                </table>
                </center><br/><br/><br/>

                <center><h2 style={{color:'black'}}>NOTE D’EVALUATION DE PERFORMANCE INDIVIDUELLE</h2>
                <h2 style={{color:'black'}}>ETAT CIVIL</h2></center><br/>

                NOM et Prénoms :<br/>
                Numéro Matricule :<br/>
                Date et lieu de Naissance :<br/>
                Statut Conjugal :<br/>
                Nombre d'enfants à charge :<br/>

                <center><h2 style={{color:'black'}}>SITUATION ADMINISTRATIVE</h2></center><br/>

                Nature de Contrat:<br/>
                Date d'entrée dans l'administration :<br/>
                Avancements successifs :<br/>

                <center>
                <table style={{width:'90%', height:'50px'}}>
                    <tr>
                        <th>Année</th>
                        <th>Classification Professionnelle</th>
                        <th>Fonction</th>
                        <th>Observation</th>
                    </tr>
                    <tr style={{width:'90%', height:'40px'}}>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr style={{width:'90%', height:'40px'}}>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr style={{width:'90%', height:'40px'}}>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr style={{width:'90%', height:'40px'}}>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
                </center><br/>

                Classification Professionnelle :<br/>
                Fonction :<br/>
                Résidence actuelle :<br/>

                <center><h2 style={{color:'black'}}>RENSEIGNEMENTS</h2></center><br/>

                Diplôme le plus élevé :<br/>
                Distinctions honorifiques :<br/>
                Autres compétences :<br/>
                Adresse de la personne à prévenir en cas d'accident : <br/>

                <center><h2 style={{color:'black'}}>NOTES ET APPRECIATIONS</h2></center><br/>
                    <img src="../../images/not.PNG" style={{width:'60%',height:'30%'}}/>
                <center>
                    <img src="../../images/not2.PNG" style={{width:'100%',height:'20%'}}/>
                </center>
                <center>
                    <img src="../../images/not3.PNG" style={{width:'100%',height:'20%'}}/>
                </center>
                <center>
                    <img src="../../images/not4.PNG" style={{width:'100%',height:'20%'}}/>
                </center><br/>
         </div> 
        <Footer />
    </div> 
                )
            }
                      
        }
               
export default Evaluation