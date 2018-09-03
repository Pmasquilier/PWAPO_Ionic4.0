import { Component } from '@stencil/core';

@Component({
    tag: 'app-footer',
    styleUrl: 'app-footer.scss'
})
export class AppFooter {

    componentWillLoad() {
    }

    render() {

        return (
            <ion-footer class="app-footer">

                <ion-button href='/'>
                    <ion-icon name="home"></ion-icon>
                </ion-button>

                <ion-button href='/photo'>
                    <ion-icon name="images"></ion-icon>
                </ion-button>

                <ion-button href='/projects'>
                    <ion-icon name="ribbon"></ion-icon>
                </ion-button>

                <ion-button href='/documents'>
                    <ion-icon name="folder"></ion-icon>
                </ion-button>

            </ion-footer>

        );
    }
}
