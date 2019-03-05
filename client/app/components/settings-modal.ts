import {action} from '@ember-decorators/object';

import Component from '@ember/component';
import Cookies from "bitcorn/system/cookies";
import Defaults from "bitcorn/system/defaults";

export default class SettingsModal extends Component {
  // @ts-ignore
  private isSnowing: boolean;

  init() {
    super.init();
    debugger;
    this.isSnowing = Cookies.isSnowing;
  }

  @action
  changeSnowState() {
    // @ts-ignore
    this.set('isSnowing', !this.get('isSnowing'));

    // @ts-ignore
    if (this.get('isSnowing')) {
      this.setCookie(Defaults.Cookies.Available.IS_SNOWING, true, Defaults.Cookies.NUM_DAYS_EXPIRING);
    } else {
      this.setCookie(Defaults.Cookies.Available.IS_SNOWING, false, Defaults.Cookies.NUM_DAYS_EXPIRING);
    }
  }

  private setCookie(name: string, value: any, numDaysExpiring: number): void {
    const date: Date = new Date();
    date.setTime(date.getTime() + (numDaysExpiring * 24 * 60 * 60 * 1000));
    const expires: string = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires;
  }

  @action
  reset() {
    this.resetCookies();
  }

  private resetCookies() {
    for (let key in Defaults.Cookies.Available) {
      // @ts-ignore
      this.setCookie(Defaults.Cookies.Available[key], undefined, 0);
    }
  }

  @action
  reload() {
    // @ts-ignore
    this.get('deactivateSettings')();
    location.reload();
  }
}
