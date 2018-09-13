import { Component, State } from '@stencil/core';


@Component({
    tag: 'app-footer',
    styleUrl: 'app-footer.scss'
})
export class AppFooter {

   

    @State() firstElementClass: String;
    @State() secondElementClass: String;
    @State() thirdElementClass: String;
    @State() fourthElementClass: String;


    constructor() {
        this.firstElementClass = "button_active";
        this.secondElementClass = "button_inactive";
        this.thirdElementClass = "button_inactive";
        this.fourthElementClass = "button_inactive";

    }

    componentWillLoad() {

    }

    

    onClickButton(buttonNumber: number) {
        switch (buttonNumber) {
            case 1:
                this.firstElementClass = "button_active";
                this.secondElementClass = "button_inactive";
                this.thirdElementClass = "button_inactive";
                this.fourthElementClass = "button_inactive";
                break;
            case 2:
                this.firstElementClass = "button_inactive";
                this.secondElementClass = "button_active";
                this.thirdElementClass = "button_inactive";
                this.fourthElementClass = "button_inactive";
                break;
            case 3:
                this.firstElementClass = "button_inactive";
                this.secondElementClass = "button_inactive";
                this.thirdElementClass = "button_active";
                this.fourthElementClass = "button_inactive";
                break;
            case 4:
                this.firstElementClass = "button_inactive";
                this.secondElementClass = "button_inactive";
                this.thirdElementClass = "button_inactive";
                this.fourthElementClass = "button_active";
                break;
        }

    }

   
        
    

    render() {

        return (


            <ion-footer class="app-footer">

                <ion-button href='/' onClick={() => this.onClickButton(1)} >
                    <ion-icon name="home" class={'' + this.firstElementClass}></ion-icon>
                </ion-button>
                <ion-button href='/photo' onClick={() => this.onClickButton(2)}>
                    <ion-icon name="images" class={'' + this.secondElementClass}></ion-icon>
                </ion-button>

                <ion-button href='/projects' onClick={() => this.onClickButton(3)} >
                    <ion-icon name="ribbon" class={'' + this.thirdElementClass}></ion-icon>
                </ion-button>

                <ion-button href='/documents' onClick={() => this.onClickButton(4)}>
                    <ion-icon name="folder" class={'' +this.fourthElementClass}></ion-icon>
                </ion-button>

            </ion-footer>

        );
    }
}
