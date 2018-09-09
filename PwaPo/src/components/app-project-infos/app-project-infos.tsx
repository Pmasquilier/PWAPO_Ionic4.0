import {Prop, Component} from '@stencil/core';
import { Projet } from '../../model/projet';
import {getProjets } from '../../helpers/dataHelper';

@Component({
    tag: 'app-project-infos',
    styleUrl: 'app-project-infos.scss'
})
export class AppProjectInfos {


    @Prop() Id: string;

    private projets: Projet[];
    private projet: Projet;
    private rootPath = "../assets/projets/";
    private fileExtension = '.png';

    componentWillLoad() {
        this.projets = getProjets();
        this.projet = this.projets[this.Id];
        console.log("Id : " + this.Id);
        console.log("Projet : " + this.projet);
        

    }


    render() {

        return (
            <ion-card>
            <ion-slides pager>
                    {this.projet.screenshots.map((url) => {
                        return <ion-slide>
                            <lazy-img class="lazy-img-photo" src={this.rootPath + this.projet.directoryName + '/' +  url + this.fileExtension}></lazy-img>
                        </ion-slide>
                    })}
                </ion-slides>
            <ion-card-content>
              <ion-card-title class="underline">
               {this.projet.directoryName}
                </ion-card-title>
              <p>
                {this.projet.description}
              </p>
            </ion-card-content>
          </ion-card>
        );
    }
}