import { Component, Listen, State, Prop } from '@stencil/core';
import { getFilesExtension, getProjectsRootPath, getProjets } from '../../helpers/dataHelper';
import { Projet } from '../../model/projet';
import { Image } from '../../model/image';

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

    @State() tabImage: Image[];

    @State() top: number;


    @State() imageLogo: HTMLImageElement[];

    @Prop({ context: 'imageCoordonate' }) imageCoordonate: Image;

    constructor() {
        this.imageLogo = [];
    }

    componentWillLoad() {
        this.computeGridProperties();
        this.projets = getProjets();
        this.fileExtension = getFilesExtension();
        this.rootPath = getProjectsRootPath();
        /* this.initializePosition();
        this.displayTabImage();  */
    }

    componentDidLoad() {
        /*  this.initializePosition();
         this.displayTabImage();  */
    }

    initializePosition() {

        console.log("InitializePosition");

        this.tabImage = [];
        for (var i = 0; i < this.projets.length; i++) {
            var element = document.getElementById("img" + i);
            var r = element.getBoundingClientRect();
            this.tabImage.push(new Image(r.left, r.right, r.bottom, r.top));
        }

    }

    displayTabImage() {
        for (var i = 0; i < this.tabImage.length; i++) {
            console.log(this.tabImage[i]);
        }
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

    // récupère la position d'un logo en fonction de son index
    getPos(index: number, event) {

        console.log("Event : " + event + "position projet :" +index);

      /*   var element = this.imageLogo[index];
        var r = element.getBoundingClientRect();
        this.imageCoordonate = new Image(r.left, r.right, r.bottom, r.top);
        this.top = r.top;
        console.log("Les dimensions du rectangle sont :");
        console.log("{top:" + r.top + ", left:" + r.left + ", right:" + r.right + ", bottom:" + r.bottom + "}");
   */  }

    render() {

        return (
            <ion-page>
                <ion-content>
                    <ion-grid>
                        <ion-row>
                            {this.projets.map((projet, index) => {
                                return <ion-col class={'column-' + this.cardsPerRow}>
                                    <ion-button onClick={(event: UIEvent) => this.getPos(index, event)} href={`/project_infos/${this.projets.indexOf(projet)}`} >
                                        <img ref={(el: HTMLImageElement) => this.imageLogo = [...this.imageLogo, el]}
                                            class='project-logo'
                                            src={this.rootPath + projet.directoryName + '/logo' + this.fileExtension} />
                                    </ion-button>
                                </ion-col>
                            })}
                        </ion-row>
                    </ion-grid>
                </ion-content>
            </ion-page>
        );
    }
}
