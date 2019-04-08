import { Component, Prop } from "@stencil/core";

@Component({
  tag: "job-exp",
  styleUrl: "job-exp.css"
})
export class JobExperienceComponent {
  @Prop() details: any;

  render() {
    return [
      <div>
        <ion-card-header class="experience-card-header">
          <ion-card-title>
            <strong>{this.details.role}</strong>
          </ion-card-title>
          <ion-grid>
            <ion-row>
              <ion-col size="auto">
                <ion-card-subtitle>
                  <i>{this.details.location}</i>
                </ion-card-subtitle>
                <ion-card-subtitle>
                  <i>{this.details.date}</i>
                </ion-card-subtitle>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-header>
        <ion-card-content>
          <ul>
            {this.details.description.map(val => {
              return <li>{val}</li>;
            })}
          </ul>
        </ion-card-content>
      </div>
    ];
  }
}
