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
            
            
            <div class="div-parent">
                <div class="div-enfant-logo-photo">
             
                <lazy-img class="logo_photo" src={this.rootPath + this.projet.directoryName + '/' +  "logo" + this.fileExtension}></lazy-img> 
             
                </div> 
              
              <p class = "projet-description">
                {this.projet.description}
              </p>
           
            
         
            <ion-slides pager>
                    {this.projet.screenshots.map((url) => {
                        return <ion-slide>
                            <lazy-img src={this.rootPath + this.projet.directoryName + '/' +  url + this.fileExtension}></lazy-img>
                        </ion-slide>
                    })}
                </ion-slides>
            </div> 
      
        );
    }
}
