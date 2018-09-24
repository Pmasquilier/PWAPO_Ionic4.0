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
    @State() currentPage = window['currentPage'];

    private pagesToDisplayWithMainHeader = ["app-project-gallery", "app-projects-gallery", "app-home", "app-documents"];

    constructor(){        
        
    }

    componentDidMount(){
        

    }

    public whichIsTheHeaderToDisplay () : string{
        if (this.pagesToDisplayWithMainHeader.indexOf(this.currentPage)){
            console.log("Header is now: mainHeader");
            return "mainHeader";
        }
        else{
            console.log("Header is now: secondHeader");
            return "secondHeader";
        }
    }

    componentWillLoad() {
        this.mfPictureUrl = this.rootIconPath + "MobileFactory_Logo.svg";
        
      
    }

    render() {

        console.log("app-title Render Current page : " + this.currentPage);


        if (this.whichIsTheHeaderToDisplay() === "mainHeader") {
            return (

                <ion-header class="bar-header bar-stable headerToolbar degrade" >
                    <ion-toolbar class="toolbar" color='primary' >


                        <ion-grid>
                            <ion-row>
                                <ion-col col-2>
                                    <img class="imgToolBar" src={this.mfPictureUrl}> </img>
                                </ion-col>
                                <ion-col col-6 >
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