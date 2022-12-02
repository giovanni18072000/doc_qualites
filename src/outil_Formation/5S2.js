import { PureComponent } from 'react';
import Menu from '../navigation/Menu';
import Footer from '../navigation/Footer';

class CinqSTwo extends PureComponent {
    
    render() {   
        return ( 
    <div  className="col-lg-12 grid-margin stretch-card">
        <Menu />
        <div class="container">
        <h3 style={{color:'red'}}>La méthode des 5S(Pour mieux travailler)</h3>
        <p>Vous voulez un espace de travail qui favorise l’efficacité ? Votre hiérarchie vous demande d’appliquer la méthode japonaise des 5S et vous ne savez pas encore ce que c’est ? <br/>
            Alors, lisez la suite et la méthode n’aura plus de secret pour vous.<br/>
            Reste encore à la mettre en application bien sûr, car elle n’a d’intérêt que dans la pratique.<br/>
        </p>

        <h3 style={{color:'green'}}><u>Définition de la méthode des 5S</u></h3>
        <p>La méthode des 5 « S » est une méthode d’organisation japonaise, qui a été inventée chez Toyota.<br/>
            Chaque lettre correspond aux cinq opérations qui sont des règles simples à mettre en œuvre :
        </p>
        <p style={{padding:'0 0 0 70px'}}>
            •	Seiri : débarrasser<br/>
            •	Seiton : ranger<br/>
            •	Seiso : nettoyer<br/>
            •	Seiketsu : ordonner<br/>
            •	Shitsuke : être rigoureux<br/>
        </p>
        <p>On retrouve en français une traduction simple ORDRE qui signifie :</p>
        <p style={{padding:'0 0 0 70px'}}>
            •	Ordonner (ou ôter l’inutile)<br/>
            •	Ranger<br/>
            •	Dépoussiérer, Découvrir des anomalies<br/>
            •	Rendre évident<br/>
            •	Etre rigoureux<br/>
        </p>

        <h3 style={{color:'green'}}><u>Objectifs de la méthode des 5S</u></h3>
        <p>Chaque S sert un objectif distinct :</p>
        <p style={{padding:'0 0 0 70px'}}>
            •	Seiri : Alléger l’espace de travail de ce qui y est inutile ;<br/>
            •	Seiton : Rendre efficace l’organisation de l’espace de travail ;<br/>
            •	Seiso : Augmenter l’état de propreté des lieux ;<br/>
            •	Seiketsu : Prévenir l’apparition de la saleté et du désordre ;r<br/>
            •	Shitsuke : Encourager les efforts allant dans ce sens: autodiscipline.<br/>
        </p>

        <h3 style={{color:'green'}}><u>Les bienfaits attendus de la méthode des 5S</u></h3>
        <p style={{padding:'0 0 0 70px'}}>
                •	D’améliorer les conditions de travail et le moral de tous ceux qui travaillent dans une entreprise ou une organisation puisqu’il est préférable de travailler dans un lieu propre et bien rangé<br/>
                •	D’obtenir une meilleure efficacité de l’équipe, du manager, des chefs, …<br/>
                •	De gaspiller moins de temps et d’énergie ;<br/>
                •	De baisser les risques d’accidents et/ou sanitaires notamment dans certains environnements projet<br/>
                •	D’améliorer la qualité finale de la production, d’améliorer la qualité des résultats des projets<br/>
        </p>
        
        <h3 style={{color:'green'}}><u>Comment mettre en place la méthode des 5S?</u></h3>
        <h3 style={{color:'purple'}}>-	Seiri (Débarrasser)</h3>
        <p>Lors de cette étape, il s’agit de supprimer de l’espace de travail tout ce qui n’y a pas sa place.</p>
        <p>On y va, il faut donc suivre les instructions suivantes:</p>
        <p style={{padding:'0 0 0 70px'}}>
            •	Tout ce qui ne sert pas (ou qui ne sert plus) depuis un an doit être jeté, ou recyclé si c’est recyclable.<br/>
            •	De ce qui reste, tout ce qui sert moins d’une fois par mois est remisé à l’écart (par exemple, au département des archives, ou au magasin à l’usine).<br/>
            •	De ce qui reste, tout ce qui sert moins d’une fois par semaine est remisé à proximité (typiquement dans une armoire au bureau, dans le rangement au poste à l’usine).<br/>
            •	De ce qui reste, tout ce qui sert moins d’une fois par jour est au poste de travail.<br/>
            •	De ce qui reste, tout ce qui sert moins d’une fois par heure est au poste de travail, directement à portée de main.<br/>
            •	Et ce qui sert au moins une fois par heure est directement sur l’opérateur.<br/>
        </p>

        <p>Donc on hiérarchise le matériel de travail et c’est préalable à l’implémentation de Seiri. Bien sûr, dans la méthode japonaise, cela s’applique très bien au monde de l’usine, puisque la méthode vient de chez Toyota mais vous pouvez l’adapter à votre environnement
             professionnel propre pour lister ce qui vous sert moins d’une fois par mois, moins d’une fois par semaine, moins d’une fois par heure, etc…</p>
        <h3 style={{color:'purple'}}>-	Seiton (Mettre en ordre)</h3>
        <p>La méthode indique à cette étape de ranger les différents outils et matériels pour le travail. Cela s’applique aussi au chef de service qui doit ranger ses fournitures de bureau, fournitures qu’on peut facilement assimiler à du matériel de travail en usine.<br/>
            Le slogan à retenir pour Seiton est tout simplement : « Une place pour chaque chose, et chaque chose à sa place ».</p>
        <p>Les règles de Seiton :</p>
        <p style={{padding:'0 0 0 70px'}}>
            •	Arranger de façon rationnelle le poste de travail (proximité, objets lourds faciles à prendre ou sur support, …)<br/>
            •	Définir les règles de rangement<br/>
            •	Rendre évident le placement des objets<br/>
            •	Les objets d’utilisation fréquente doivent être situés près de l’opérateur<br/>
            •	Classer les objets par ordre d’utilisation<br/>
            •	Standardiser les postes<br/>
            •	Favoriser le FIFO (First In First Out), ce qui entre en premier dans l’espace de travail doit sortir en premier aussi par opposition avec LIFO (Last In First Out), ce qui entre en dernier doit sortir en premier. FIFO permet de ne pas laisser s’accumuler de vieux documents.
        </p>

        <h3 style={{color:'purple'}}>-	Seiso (Nettoyer)</h3>
        <p>Une fois l’espace de travail dégagé (Seiri) et ordonné (Seiton), il est beaucoup plus facile de le nettoyer. Le non-respect de la propreté peut en effet avoir des conséquences considérables en provoquant des anomalies ou l’immobilisation de machines.</p>
        <p>Quelques règles du Seiso :</p>
        <p style={{padding:'0 0 0 70px'}}>
            •	Décrasser, inspecter, détecter les anomalies<br/>
            •	Remettre systématiquement en état<br/>
            •	Faciliter le nettoyage et l’inspection<br/>
            •	Supprimer l’anomalie à la source<br/>
        </p>

        <p>C’est vrai que dans une usine, Seiso est indispensable, car un ouvrier pourrait glisser sur une petite pièce laissée sur le sol et tomber sur une machine. L’entretien est indispensable. Dans un bureau, la propreté favorise une meilleure ambiance de travail.</p>
        
        <h3 style={{color:'purple'}}>-	Seiketsu (Rendre évident, Maintenir la propreté)</h3>
        <p>Même si on applique facilement les 3 premiers S de manière ponctuelle, on peut laisser ensuite le désordre revenir. Le 4ème S, Seiketsu, nous  rappelle que l’ordre et la propreté sont à maintenir chaque jour.</p>
        
        <h3 style={{color:'purple'}}>-	Shitsuke (Être rigoureux)</h3>
        <p>Cette étape est celle du contrôle rigoureux de l’application du système 5S. Ce système d’organisation est performant lorsqu’il est très rigoureusement contrôlé. Il ne sera efficace sur le long terme que grâce aux efforts conjoints de chacun dans l’entreprise. <br/>
            Une manière de sensibiliser les salariés de l’entreprise au 5S est une politique interne qui appuie la méthode et le rappel de la méthode par un schéma sur des posters à appliquer sur les murs de l’entreprise.<br/>
            On peut y aller progressivement et ne pas culpabiliser de ne pas atteindre tout de suite le « zéro poussière ».
        </p>
        </div>
        <Footer /> 
    </div> 
                )
            }
                      
        }
               
export default CinqSTwo