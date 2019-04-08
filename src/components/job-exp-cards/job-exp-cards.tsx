import { Component } from "@stencil/core";

import { JOB_EXP_DATA } from "./job-exp-data";

@Component({
  tag: "job-exp-cards",
  styleUrl: "job-exp-cards.css"
})
export class JobCardsExperienceComponent {
  render() {
    const jobs = JOB_EXP_DATA;

    return [
      <div>
        {jobs.map((val) => {
          return (
            <ion-card class="experience-card">
              <job-exp details={val}></job-exp>
            </ion-card>
          );
        })}
      </div>
    ];
  }
}
