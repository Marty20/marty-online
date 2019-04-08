import { Component } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route component="page-tabs">
            <ion-route url="/about" component="tab-about">
                <ion-route component="page-about"></ion-route>
            </ion-route>
            <ion-route url="/" component="tab-resume">
                <ion-route component="page-resume"></ion-route>
            </ion-route>
          </ion-route>
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
