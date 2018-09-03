import { Component, State } from '@stencil/core';

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

        return (

            <ion-header class="bar-header bar-stable headerToolbar degrade" >
                <ion-toolbar class="toolbar"  color='primary' >
                    <img class="imgToolBar" src={this.mfPictureUrl}> </img>
                    <ion-title >La Mobile Factory</ion-title>
                    <app-contact class="icon-contact"/>
                </ion-toolbar>
            </ion-header>
        );
    }
}