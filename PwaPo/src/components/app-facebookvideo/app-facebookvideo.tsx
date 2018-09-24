import { Component, State } from '@stencil/core';

@Component({
  tag: 'app-facebookvideo',
  styleUrl: 'app-facebookvideo.scss'
})
export class AppFacebookVideo {
  @State() componentHeight: number;
  //@Listen('window:resize')

  @State() isVideoRunning: boolean;

  constructor() {
    this.isVideoRunning = false;
  }
  windowResize() {
    this.changeComponentHeight();
  }

  componentDidLoad() {
    this.changeComponentHeight();
  }

  private changeComponentHeight() {

    let width = window.innerWidth;
    console.log(width);
    this.componentHeight = width / 1.75;
  }

  lireVideo(event) {
    console.log("event lireVideo " + event);
    this.isVideoRunning = true;
  }

  fermerVideo(event) {
    console.log("event fermerVideo " + event);
    this.isVideoRunning = false;
  }

  render() {
    let video;

    if (this.isVideoRunning) {
      video = (<div class="card">
        
          <ion-icon name="close" onClick={(event: UIEvent) => this.fermerVideo(event)}></ion-icon>
        
        <ion-item>

          <div class="video-container">
            <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fsoprasteria%2Fvideos%2F1758810114153796%2F" frameborder="0" scrolling="no" width="100%" height={this.componentHeight + 'px'}></iframe >
          </div>
        </ion-item>
      </div>)
    }

    return (

      <div>
        <ion-grid>
          <ion-row justify-content-center>
            <ion-col size="4">
              <ion-icon name="play" onClick={(event: UIEvent) => this.lireVideo(event)}></ion-icon>
              <img src="../../assets/pictures/mobileFactoryVideo.PNG" onClick={(event: UIEvent) => this.lireVideo(event)}>
              </img>
            </ion-col>
            <ion-col size="4">
              <div class = "text">
                En savoir plus sur la Mobile Factory
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
        {video}
      </div>);

  }
}