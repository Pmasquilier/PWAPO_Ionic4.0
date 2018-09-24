import { Component } from '@stencil/core';

@Component({
    tag: 'app-presentation',
    styleUrl: 'app-presentation.scss'
})
export class AppPresentation {

    render() {

        return (<div class='margined-div'>
                <h2 class="big-text color-red">
                    Bienvenue sur l'application de La Mobile Factory by SopraSteria ! 
                </h2>
        </div>
        );
    }
}