import { Component } from '@stencil/core';
import { NavigationServiceData } from '../../helpers/NavigationService';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {
  rootPage:any = "HomePage";

  constructor(){
    NavigationServiceData.setCurrentPage("app-home");
  }

  render() {

    return (

        <ion-content>
          <app-presentation />

          <app-facebookvideo/>
        </ion-content>


    );
  }
}
