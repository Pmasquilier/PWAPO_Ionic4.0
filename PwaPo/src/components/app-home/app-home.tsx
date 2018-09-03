import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {
  rootPage:any = "HomePage";

  render() {
    return (

        <ion-content>
          <app-presentation />

          <app-facebookvideo/>
        </ion-content>


    );
  }
}
