import {action} from '@ember-decorators/object';

import Component from '@ember/component';
import Cookies from "bitcorn/system/settings/cookies";
import Defaults from "bitcorn/system/defaults";

export default class SettingsModal extends Component {
  // @ts-ignore
  private isSnowing: boolean;

  init(): void {
    super.init();
    this.isSnowing = Cookies.isSnowing;
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
    // NOP
  }

  @action
  reload(): void {
    // @ts-ignore
    this.get('deactivateSettings')();
    location.reload();
  }
}
