import { getFilesExtension, getProjectsRootPath, getProjets } from '../../helpers/dataHelper';

import { Component } from '@stencil/core';
import { Projet } from '../../model/projet';
import Swiper from 'swiper';

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

    protected horizontalSwiper: Swiper;
    protected verticalSwiper: Swiper;

    componentWillLoad() {
        this.fileExtension = getFilesExtension();
        this.rootPath = getProjectsRootPath();
        this.projets = getProjets();
    }

    componentDidLoad() {
        this.horizontalSwiper = new Swiper('.swiper-container-h', {
            spaceBetween: 50,
            pagination: {
                el: '.swiper-pagination-h',
                clickable: true,
            },
        });
        this.verticalSwiper = new Swiper('.swiper-container-v', {
            spaceBetween: 50,
            pagination: {
                el: '.swiper-pagination-v',
                clickable: true,
            },
            direction: 'horizontal',
            nested: true
        });

    }



    render() {

        return (
            <ion-page>
                <ion-content>

                    <div class="swiper-container swiper-container-h">
                        <div class="swiper-wrapper">
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
                        </div>
                        
                        <div class="swiper-pagination swiper-pagination-h"></div>
                    </div>
                </ion-content>
            </ion-page>
        );
    }
}
