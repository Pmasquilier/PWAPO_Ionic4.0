import { Component, Listen, Prop } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss'
})
export class MyApp {

  @Prop({ connect: 'ion-toast-controller' }) toastCtrl: HTMLIonToastControllerElement;

  componentDidLoad() {
    /*
      Handle service worker updates correctly.
      This code will show a toast letting the
      user of the PWA know that there is a
      new version available. When they click the
      reload button it then reloads the page
      so that the new service worker can take over
      and serve the fresh content
    */
    window.addEventListener('swUpdate', () => {
      this.toastCtrl.create({
        message: 'New version available',
        showCloseButton: true,
        closeButtonText: 'Reload'
      }).then((toast) => {
        toast.present();
      });
    })
  }

  @Listen('body:ionToastWillDismiss')
  reload() {
    window.location.reload();
  }

  renderRouter(){
    return(
      /* <ion-router useHash={false}>

          <ion-route component = "app-footer">

            <ion-route url='/' component='tab-home'>
              <ion-route component="app-home"></ion-route>
            </ion-route>

            <ion-route url='/photo' component='tab-images'>
              <ion-route component='app-photo'></ion-route>
            </ion-route>

            <ion-route url='/projects' component='tab-projets'>
              <ion-route component='app-projects-gallery'></ion-route>
            </ion-route>

            <ion-route url='/documents' component='tab-documents'>
              <ion-route component='app-documents'></ion-route>
            </ion-route>

            
          </ion-route>

        <ion-nav root='app-home'></ion-nav>
          <ion-route url='/project_infos/:Id' component='app-project-infos'></ion-route>
          </ion-router> */

        {/* <ion-router useHash={false}>
          <ion-route url='/' component='app-home'></ion-route>
          <ion-route url='/photo' component='app-photo'></ion-route>
          <ion-route url='/projects' component='app-projects-gallery'></ion-route>
          <ion-route url='/client' component='app-client'></ion-route>
          <ion-route url='/documents' component='app-documents'></ion-route>
          <ion-route url='/project_infos/:Id' component='app-project-infos'></ion-route>
        </ion-router> */}

    );
  }


  render() {
    return (
      <ion-app>
        <main>
          <app-title />

          <ion-router useHash={false}>
          <ion-route url='/' component='app-home'></ion-route>
          <ion-route url='/photo' component='app-photo'></ion-route>
          <ion-route url='/projects' component='app-projects-gallery'></ion-route>
          <ion-route url='/client' component='app-client'></ion-route>
          <ion-route url='/documents' component='app-documents'></ion-route>
          <ion-route url='/project_infos/:Id' component='app-project-infos'></ion-route>
          </ion-router>

          <ion-nav root='app-home'></ion-nav>
          <app-footer />
         
        </main>
      </ion-app>
    );
  }
}
