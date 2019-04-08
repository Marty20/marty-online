import { Component, Prop } from "@stencil/core";

@Component({
  tag: "skill-set",
  styleUrl: "skill-set.css"
})
export class SkillSetComponent {
  
  @Prop() skill: string;
  @Prop() score: number;

  render() {

    let scoreArr = [];

    for(let i=0; i < 5; i++) {
      (this.score > i) ? 
          scoreArr.push(<span class="dot" />)
        : scoreArr.push(<span class="empty-dot" />);
    }

    return [
      <ion-row>
        <ion-col size="5">
          <p class="skill">{this.skill}</p>
        </ion-col>
        <ion-col size="7">
          <div>
            {scoreArr}
          </div>
        </ion-col>
      </ion-row>
    ];
  }
}
