import { Component, State } from '@stencil/core';

@Component({
    tag: 'app-popup-information',
    styleUrl: 'app-popup-information.scss'
})
export class AppTitle {




    componentWillLoad() {
    }

    render() {

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
}