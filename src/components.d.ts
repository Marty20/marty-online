/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@ionic/core';
import 'ionicons';


export namespace Components {

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface JobExpCards {}
  interface JobExpCardsAttributes extends StencilHTMLAttributes {}

  interface JobExp {
    'details': any;
  }
  interface JobExpAttributes extends StencilHTMLAttributes {
    'details'?: any;
  }

  interface PageAbout {}
  interface PageAboutAttributes extends StencilHTMLAttributes {}

  interface PageResume {}
  interface PageResumeAttributes extends StencilHTMLAttributes {}

  interface PageTabs {}
  interface PageTabsAttributes extends StencilHTMLAttributes {}

  interface SkillSet {
    'score': number;
    'skill': string;
  }
  interface SkillSetAttributes extends StencilHTMLAttributes {
    'score'?: number;
    'skill'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AppRoot': Components.AppRoot;
    'JobExpCards': Components.JobExpCards;
    'JobExp': Components.JobExp;
    'PageAbout': Components.PageAbout;
    'PageResume': Components.PageResume;
    'PageTabs': Components.PageTabs;
    'SkillSet': Components.SkillSet;
  }

  interface StencilIntrinsicElements {
    'app-root': Components.AppRootAttributes;
    'job-exp-cards': Components.JobExpCardsAttributes;
    'job-exp': Components.JobExpAttributes;
    'page-about': Components.PageAboutAttributes;
    'page-resume': Components.PageResumeAttributes;
    'page-tabs': Components.PageTabsAttributes;
    'skill-set': Components.SkillSetAttributes;
  }


  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLJobExpCardsElement extends Components.JobExpCards, HTMLStencilElement {}
  var HTMLJobExpCardsElement: {
    prototype: HTMLJobExpCardsElement;
    new (): HTMLJobExpCardsElement;
  };

  interface HTMLJobExpElement extends Components.JobExp, HTMLStencilElement {}
  var HTMLJobExpElement: {
    prototype: HTMLJobExpElement;
    new (): HTMLJobExpElement;
  };

  interface HTMLPageAboutElement extends Components.PageAbout, HTMLStencilElement {}
  var HTMLPageAboutElement: {
    prototype: HTMLPageAboutElement;
    new (): HTMLPageAboutElement;
  };

  interface HTMLPageResumeElement extends Components.PageResume, HTMLStencilElement {}
  var HTMLPageResumeElement: {
    prototype: HTMLPageResumeElement;
    new (): HTMLPageResumeElement;
  };

  interface HTMLPageTabsElement extends Components.PageTabs, HTMLStencilElement {}
  var HTMLPageTabsElement: {
    prototype: HTMLPageTabsElement;
    new (): HTMLPageTabsElement;
  };

  interface HTMLSkillSetElement extends Components.SkillSet, HTMLStencilElement {}
  var HTMLSkillSetElement: {
    prototype: HTMLSkillSetElement;
    new (): HTMLSkillSetElement;
  };

  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement
    'job-exp-cards': HTMLJobExpCardsElement
    'job-exp': HTMLJobExpElement
    'page-about': HTMLPageAboutElement
    'page-resume': HTMLPageResumeElement
    'page-tabs': HTMLPageTabsElement
    'skill-set': HTMLSkillSetElement
  }

  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'job-exp-cards': HTMLJobExpCardsElement;
    'job-exp': HTMLJobExpElement;
    'page-about': HTMLPageAboutElement;
    'page-resume': HTMLPageResumeElement;
    'page-tabs': HTMLPageTabsElement;
    'skill-set': HTMLSkillSetElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}