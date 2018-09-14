import { Component, State } from '@stencil/core';
import { NavigationServiceData } from '../../helpers/NavigationService';


@Component({
    tag: 'app-title',
    styleUrl: 'app-title.scss'
})
export class AppTitle {

    @State() rootPath: string = './assets/pictures/';
    @State() rootIconPath: string = './assets/icon/';
    @State() fileExtension: string = '.png';
    @State() mfPictureUrl: string;



    componentWillLoad() {
        this.mfPictureUrl = this.rootIconPath + "MobileFactory_Logo.svg";
    }


    render() {

        console.log("We will display the header : " + NavigationServiceData.whichIsTheHeaderToDisplay());


        if (NavigationServiceData.whichIsTheHeaderToDisplay() === "mainHeader") {
            return (

                <ion-header class="bar-header bar-stable headerToolbar degrade" >
                    <ion-toolbar class="toolbar" color='primary' >


                        <ion-grid>
                            <ion-row>
                                <ion-col col-2>
                                    <img class="imgToolBar" src={this.mfPictureUrl}> </img>
                                </ion-col>
                                <ion-col col-6>
                                    <ion-title >La Mobile Factory</ion-title>
                                </ion-col>
                                <ion-col col-2>
                                    <app-contact class="icon-contact" />
                                </ion-col>

                            </ion-row>
                        </ion-grid>

                    </ion-toolbar>
                </ion-header>
            );
        }

        else {

            return (

                <h1>Header 2</h1>

            );

        }


    }
}