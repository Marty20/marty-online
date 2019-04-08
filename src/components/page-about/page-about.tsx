import { Component } from "@stencil/core";

@Component({
  tag: "page-about",
  styleUrl: "page-about.css"
})
export class PageAbout {
  render() {
    return [
      <ion-content color="dark">
        <div padding>
          <p>Just a simple PWA! Checkout the other tabs to find out more about me.</p>
        </div>
      </ion-content>
    ];
  }
}
