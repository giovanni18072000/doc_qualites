import { PureComponent } from 'react';
import Menu from '../navigation/Menu';
import Footer from '../navigation/Footer';

class CinqSOne extends PureComponent {
    
    render() {   
        return ( 
    <div  className="col-lg-12 grid-margin stretch-card">
        <Menu />
        <div class="container">
        <center>
            <h2>Manuel Formation 5S</h2>
        
            <h2 style={{padding:'0 0 0 50px'}}><u> Les 5S est un outil de progrès dans l'esprit ISO 9001</u></h2>
        </center>
        <h3 style={{padding:'0 0 0 50px'}}> Agenda</h3>
        <p style={{padding:'0 0 0 70px'}}>
            1-Définitions<br/>
            2-Objectifs<br/>
            3-Etapes<br/>
            4-Avantages<br/>
        </p>

        <h3 style={{padding:'0 0 0 50px'}}>1-Définitions</h3>
        <p>Le 5S est une méthode basée sur l'aménagement du poste de travail et la prise de conscienca qu'un environnement propre et rangé est propice à une production de qualité.</p>
        <p  style={{padding:'0 0 0 70px',color:'red'}}>  Environnement de travail propre et ordonné</p>
        <p>Moins de risques d'accident = Préalable à toute amélioration de la productivité et de la qualité</p>

        <h3 style={{padding:'0 0 0 50px'}}>2-Objectifs</h3>
        <p>*La suppression de pertes de temps:</p>
        <center>
            <img src="../../images/time.PNG" style={{height:'60%'}}/>
        </center>
        <p>*La réduction des risques d'erreur et d'accident:</p>
        <center>
            <img src="../../images/acc.PNG" style={{height:'60%'}}/>
        </center>
        <p>*L'amélioration des conditions de travail et du respect de l'environnement</p>
        <center>
            <img src="../../images/am.PNG" style={{width:'50%'}}/>
        </center>
        <p>*La simplification et l'autonomie</p>
        <center>
            <img src="../../images/sim.PNG" style={{width:'50%'}}/>
        </center>

        <h3 style={{padding:'0 0 0 50px'}}>3-Etapes</h3>
        <p> 
            1-Eliminer<br/>
            2-Ranger<br/>
            3-Nettoyer<br/>
            4-Standardiser<br/>
            5-Mainternir<br/>
        </p>

        <h2 style={{padding:'0 0 0 50px'}}> 1-Eliminer</h2>
        <p><u>Définition:</u></p>
        <p> Ne garder que ce qui est necessaire</p>
        <p><u>Comment?:</u></p>
        <p>
            •Définir et appliquer des critères pour éliminer l'inutile<br/>
            •Classer les éléments selon la fréquence d'utilisation<br/>
            •Savoir traiter les causes de l'encombrement<br/>
        </p>
        <p><u>Objectifs:</u></p>
        <p>Faire la différence entre l'indispensable et l'inutile et se débarrasser de tout ce qui encombre le poste de travail pour identifier les causes de dysfonctionnements</p>
        <p><u>Finalités:</u></p>
        <p>
            Gagner du temps,<br/>
            Dépanner rapidement,<br/>
            Bien gérer les outillages.<br/>
        </p>

        <h3 style={{padding:'0 0 0 50px'}}>2-Ranger</h3>
        <p><u>Définition:</u></p>
        <p>Une place pour chaque chose,chaque chose à sa place</p>
        <p><u>Comment?:</u></p>
        <p>
            •Etablir les règles de rangement<br/>
            •Classer les éléments selon la fréquence d'utilisation<br/>
        </p>
        <p><u>Objectifs:</u></p>
        <p>
            •Chaque chose à sa place et une place pour chaque chose<br/>
            •Retrouver facilement ce que l'on cherche et remettre en place aisément<br/>
            •Gagner de la place<br/>
        </p>
        <p><u>Finalités:</u></p>
        <p>
            •Rangement et délimitation visuelle,<br/>
            •Structuration de l'espace de travail<br/>
            •Amélioration de l'ergonomie de poste<br/>
        </p>

        <h3 style={{padding:'0 0 0 50px'}}>3-Nettoyer</h3>
        <p><u>Définition:</u></p>
        <p>Nettoyer et en profiter pour inspecter</p>
        <p><u>Comment?:</u></p>
        <p>•Determiner un Standard de propreté pour garantir le maintient du niveau atteint</p>    
        <p><u>Objectifs:</u></p>
        <p>
            •Eliminer les déchets,la saleté et les objets inutiles pour la netteté du poste de travail.<br/>
            •Repérer les sources de salissures<br/>
        </p>
        <p><u>Finalités:</u></p>
        <p>
            •Inspecter la machine,<br/>
            •Localiser les accès difficiles,<br/>
            •Etablir les grammes de nettoyage.<br/>
        </p>

        <h3 style={{padding:'0 0 0 50px'}}>4-Standariser</h3>
        <p><u>Définition:</u></p>
        <p>Améliorer l'information relative aux règles et aux tâches à effectuer</p>
        <p><u>Comment?:</u></p>
        <p>
            •Mettre en place une Organisation facilement à tenir rangée et propre.<br/>
            •Déterminer les indicateurs permettant de vérifier le maintien des 5S<br/>
        </p>
        <p><u>Objectifs:</u></p>
        <p>
            •Maintien de l'ordre : Tenir propre,<br/>
            •Application durable des règles de tenue du poste de travail<br/>
            •Mise en évidence des anomalies par du contrôle visuel.<br/>
        </p>

        <h3 style={{padding:'0 0 0 50px'}}>5-Maintenir</h3>
        <p><u>Définition:</u></p>
        <p>Développer une dicipline collective</p>
        <p><u>Comment?:</u></p>
        <p>
            •Organiser des audits 5S<br/>
            •Garantir le maintien de 5S par l'amélioration permanente.<br/>
        </p>
        <p><u>Objectifs:</u></p>
        <p>
            •S'appliquer à appliquer les règles définies.<br/>
            •Résoudre en groupe les problèmes majeurs.<br/>
            •Impliquer le personnel dans le démarche de progrès.<br/>
        </p>
        <p>Organiser le travail en équipes.</p>
        <p><u>Finalités:</u></p>
        <p>•Pérenniser et respecter les règles établies</p>

        <h3 style={{padding:'0 0 0 50px'}}>4-Avantages</h3>
        <p>
            •Moins de temps perdu pour retrouver les produits ou outils<br/>
            •Moins de riques d'accident.<br/>
            •Moins de pannes sur des équipements régulièrements nettoyés et contrôlés<br/>
            •Meilleure motivation du personnel.<br/>
            •Responsabilisation:<br/>
        </p>
        <p style={{padding:'0 0 0 70px'}}>
            -Un environnement de travail propre,rangé et agréable est une occasion idéale pour responsabiliser chacun dans le domaine  qui le concerne.<br/>
            -Renforcer l'appropriation des projets.</p>
        </div>
        <Footer /> 
    </div> 
                )
            }
                      
        }
               
export default CinqSOne