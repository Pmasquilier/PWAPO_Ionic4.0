import { Component } from '@stencil/core';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {
  rootPage:any = "HomePage";


  constructor(){
    console.log("app-home.tsx : set the current page to app-home");
     window['currentPage'] = "app-home";
  }

  render() {

    return (

        <ion-content>
          <app-presentation />

          <app-facebookvideo/>

          <app-presentation-text/>

        </ion-content>


    );
  }
}
