import { Component, State } from '@stencil/core';

@Component({
    tag: 'app-contact',
    styleUrl: 'app-contact.scss'
})
export class AppContact {

    @State() rootIconPath: string = './assets/icon/';

    @State() mailPictureUrl: string;


    componentWillLoad() {
        this.mailPictureUrl = this.rootIconPath + "email.svg";
    }

    render() {
        return (
            <a class='mailButton' href="mailto:guillaume.rodriguez@soprasteria.com">
                <ion-icon class='mailImg' name='mail'> </ion-icon>
            </a>
        );
    }
}