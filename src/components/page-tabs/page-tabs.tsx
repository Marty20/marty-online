import { Component, Prop } from "@stencil/core";

@Component({
  tag: "page-tabs",
  styleUrl: "page-tabs.css"
})
export class PageTabs {
  @Prop({ connect: "ion-menu-controller" })
  menuCtrl: HTMLIonMenuControllerElement;

  async componentDidLoad() {
    const menuCtlr: HTMLIonMenuControllerElement = await (this
      .menuCtrl as any).componentOnReady();
    menuCtlr.enable(true);
  }
  render() {
    return [
      <ion-tabs>
        <ion-tab tab="tab-about">
          <ion-nav />
        </ion-tab>

        <ion-tab tab="tab-resume">
          <ion-nav />
        </ion-tab>

        <ion-tab-bar class="custom-tab-bar" slot="top">
          <ion-tab-button tab="tab-resume">
            <ion-icon class="icon-grow" color="light" size="large" name="paper-plane" />
          </ion-tab-button>
          <ion-tab-button tab="tab-about">
            <ion-icon class="icon-grow" color="light" size="large" name="flashlight" />
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    ];
  }
}
