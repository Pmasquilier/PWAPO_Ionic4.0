import { getFilesExtension, getProjectsRootPath, getProjets } from '../../helpers/dataHelper';

import { Component } from '@stencil/core';
import { Projet } from '../../model/projet';


@Component({
    tag: 'app-client',
    styleUrl: 'app-client.scss'
})
export class AppClient {

    protected element;
    protected rootPath: string;
    protected fileExtension: string;

    protected projets: Projet[];

    protected pictures: string[];


    componentWillLoad() {
        this.fileExtension = getFilesExtension();
        this.rootPath = getProjectsRootPath();
        this.projets = getProjets();
    }

    componentDidLoad() {
     
     

    }



    render() {

        return (
            <ion-page>
                <ion-content>

                    
                            { this.projets.map((projet) => {
                                return <div class={"swiper-slide " + projet.directoryName}>
                                    <img class='logo' src={this.rootPath + projet.directoryName + '/logo' + this.fileExtension} />
                                    <div class='verticalDiv'>
                                        <div class='flexDiv'>
                                            <div class='textDiv'>{projet.description}</div>
                                        </div>
                                    </div>
                                    <div class="swiper-container swiper-container-v">
                                        <div class="swiper-wrapper">
                                            { projet.screenshots.map((screenshot) => {
                                                return <div class="swiper-slide">
                                                    <lazy-img src={this.rootPath + projet.directoryName + '/' + screenshot + '.jpg'} />
                                                </div>
                                            }) }
                                        </div>
                                    </div>
                                </div>  
                            }) }
                      
                       
                </ion-content>
            </ion-page>
        );
    }
}
