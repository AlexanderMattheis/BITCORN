import {action} from '@ember-decorators/object';

import { Indexable, Listener } from "bitcorn/system/types";

import Component from '@ember/component';
import Cookies from "bitcorn/system/cookies";
import Defaults from "bitcorn/system/defaults";

export default class SettingsModal extends Component {
  // @ts-ignore
  private isSnowing: boolean;

  init(): void {
    super.init();
    this.isSnowing = Cookies.isSnowing;
  }

  didInsertElement(): void {
    //this.addSelectListener('#particles-select', this.setParticleType);
  }

  private addSelectListener(id: string, listener: Listener<Event, void>): void {
    const particlesSelector: HTMLElement = document.querySelector(id) as HTMLElement;
    particlesSelector.addEventListener('change', listener);
  }

  private setParticleType(event: Event): void {
    const particleType: string = (<HTMLSelectElement> event!.target).value;

    switch (particleType) {
      case 'snow':
        this.activateCookie(particleType);
        break;
      default:
        this.resetCookies(Defaults.Cookies.Particles);
    }
  }

  private activateCookie(particleType: string): void {
    this.setCookie(particleType, true, Defaults.Cookies.NUM_DAYS_EXPIRING);
    // activate checkbox
  }

  private resetCookies(cookieType: Indexable<string, string>): void {
    for (let key in cookieType) {
      this.setCookie(cookieType[key], undefined, 0);
    }
  }

  private setCookie(name: string, value: any, numDaysExpiring: number): void {
    const date: Date = new Date();
    date.setTime(date.getTime() + (numDaysExpiring * 24 * 60 * 60 * 1000));
    const expires: string = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires;
  }

  @action
  changeSnowState(): void {
    // @ts-ignore
    this.set('isSnowing', !this.get('isSnowing'));

    // @ts-ignore
    if (this.get('isSnowing')) {
      this.setCookie(Defaults.Cookies.Particles.SNOW, true, Defaults.Cookies.NUM_DAYS_EXPIRING);
    } else {
      this.setCookie(Defaults.Cookies.Particles.SNOW, false, Defaults.Cookies.NUM_DAYS_EXPIRING);
    }
  }

  @action
  reset(): void {
    this.resetAllCookies();
  }

  private resetAllCookies(): void {

  }

  @action
  reload(): void {
    // @ts-ignore
    this.get('deactivateSettings')();
    location.reload();
  }
}
