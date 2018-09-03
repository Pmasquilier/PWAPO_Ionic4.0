import { Component, Listen, State } from '@stencil/core';
import { getFilesExtension, getProjectsRootPath, getProjets } from '../../helpers/dataHelper';
import { Projet } from '../../model/projet';


@Component({
    tag: 'app-projects-gallery',
    styleUrl: 'app-projects-gallery.scss'
})
export class AppProjectsGallery {

    @State()
    private cardsPerRow: number;
    @State()
    private columns: number;

    @State()
    private projets: Projet[]; 
    @State()
    private fileExtension: string;
    @State()
    private rootPath: string;  

    componentWillLoad() {
        this.computeGridProperties();
        this.projets = getProjets();
        this.fileExtension = getFilesExtension();
        this.rootPath = getProjectsRootPath();

    }

    /**
     * Ecoute les modification de taille de fenêtre
     */
    @Listen('window:resize')
    windowResize() {
        this.computeGridProperties();
    }

    /**
     * Calcule le nombre de colonnes de la galerie
     */
    private computeGridProperties() {
        if (this.columns) {
            this.cardsPerRow = +this.columns;
        } else {
            let width = window.innerWidth
            if (width <= 400) {
                this.cardsPerRow = 3;
            } else {
                this.cardsPerRow = 4;
            }
        }
    }

    private goToProjectDetails(projet: Projet)  {
        console.log(projet);
       
    }

    render() {

        return (
            <ion-page>
                <ion-content>
                    <ion-grid>
                        <ion-row>
                            { this.projets.map((projet) => {
                                return <ion-col class={ 'column-' + this.cardsPerRow }>
                                    <img 
                                        class='project-logo' 
                                        src={this.rootPath + projet.directoryName + '/logo' + this.fileExtension} 
                                        onClick={ () => this.goToProjectDetails(projet) }/>
                                </ion-col>
                            }) }
                        </ion-row>
                    </ion-grid>
                </ion-content>
            </ion-page>
        );
    }
}
