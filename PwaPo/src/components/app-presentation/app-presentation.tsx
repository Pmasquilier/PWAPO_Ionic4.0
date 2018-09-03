import { Component } from '@stencil/core';

@Component({
    tag: 'app-presentation',
    styleUrl: 'app-presentation.scss'
})
export class AppPresentation {

    render() {

        return (
            <div class='margined-div'>
                <h2 class="big-text color-red">
                    Bienvenue sur l'application de La Mobile Factory by SopraSteria !
                </h2>
                <h5 class="colored-text">
                    La Mobile Factory est une équipe d'expertise dans la réalisation des nouvelles interfaces digitales : la digital interaction (Mobilité, AR, VR, UX Design)
                     Structurée en esprit "start-up dans l'entreprise", elle accompagne nos grands comptes dans leur transformation digitale.
                </h5>
                <h5 class="small-text colored-text">
                    Elle offre une ligne de services dans une approche globale, itérative, industrialisée et centrée utilisateur.
                    Aujourd'hui, elle compte  70 ingénieurs sur les sites de Toulouse, Nantes et Noida et conclut 2017 en réalisant plus de 40 apps mobiles.
                </h5>
                <h6 class="small-text colored-text">
                    Cette application est une Progressive Web App, ajoutez la sur votre écran d'accueil!
                </h6>
                
        </div>
        );
    }
}