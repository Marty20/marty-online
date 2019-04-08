import { Component } from "@stencil/core";

@Component({
  tag: "page-resume",
  styleUrl: "page-resume.css"
})
export class PageResume {
  render() {
    return [
      <ion-content color="dark">
        <div padding>
          <ion-grid>
            <ion-row wrap-reverse>
              <ion-col size-sm="9">
                <h1>Job Experience</h1>
                <job-exp-cards></job-exp-cards>
              </ion-col>
              <ion-col size-sm="3">
                <h1>Personal</h1>
                <ion-card>
                  <ion-card-content class="custom-card">
                    <ion-grid>
                      <ion-row justify-content-center>
                        <ion-avatar>
                          <img src="../../assets/me.png" />
                        </ion-avatar>
                      </ion-row>
                      <div padding-top>
                        <ion-row justify-content-center>
                          <p class="personal-info-name">Samuel Martin</p>
                        </ion-row>
                        <ion-row justify-content-center>
                          <p class="personal-info">Mobile Developer</p>
                        </ion-row>
                        <ion-row justify-content-center padding-bottom>
                          <p class="personal-info">Pittsburgh, PA</p>
                        </ion-row>
                        <hr />
                        <ion-row justify-content-center>
                          <p text-center class="card-bio">
                            Passionate and innovative Mobile Developer who pays
                            attention to detail while applying best practices
                            and application security.
                          </p>
                        </ion-row>
                        <hr />
                        <ion-row padding-top justify-content-center>
                          <p class="personal-info">Professional Networks</p>
                        </ion-row>
                        <ion-row justify-content-center>
                          <div class="grow">
                            <ion-button href="https://www.linkedin.com/in/sam-martin-507b7a106/" color="light">
                              <ion-icon class="custom-icon" size="medium" name="logo-linkedin" />
                            </ion-button>
                          </div>
                          <div class="grow">
                            <ion-button href="https://twitter.com/smarty201" color="light">
                              <ion-icon class="custom-icon" size="medium" name="logo-twitter" />
                            </ion-button>
                          </div>
                          <div class="grow">
                            <ion-button href="https://github.com/marty20" color="light">
                              <ion-icon class="custom-icon" size="medium" name="logo-github" />
                            </ion-button>
                          </div>
                        </ion-row>
                      </div>
                    </ion-grid>
                  </ion-card-content>
                </ion-card>
                <h1>Skills</h1>
                <ion-card class="experience-card">
                  <ion-card-header>
                    <ion-card-title>
                      <strong>Programming</strong>
                    </ion-card-title>
                  </ion-card-header>
                  <ion-card-content>
                    <skill-set skill="HTML" score={5}></skill-set>
                    <skill-set skill="CSS" score={4}></skill-set>
                    <skill-set skill="JavaScript" score={4}></skill-set>
                    <skill-set skill="Swift" score={2}></skill-set>
                    <skill-set skill="Java" score={3}></skill-set>
                  </ion-card-content>
                </ion-card>
                <ion-card class="experience-card">
                  <ion-card-header>
                    <ion-card-title>
                      <strong>Frameworks</strong>
                    </ion-card-title>
                  </ion-card-header>
                  <ion-card-content>
                    <skill-set skill="Ionic" score={5}></skill-set>
                    <skill-set skill="Angular" score={4}></skill-set>
                    <skill-set skill="Node.js" score={4}></skill-set>
                    <skill-set skill="Cordova" score={4}></skill-set>
                  </ion-card-content>
                </ion-card>
              </ion-col>
            </ion-row>
          </ion-grid>
        </div>
      </ion-content>
    ];
  }
}
