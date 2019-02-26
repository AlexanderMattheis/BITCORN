import Component from '@ember/component';
import Cookies from "bitcorn/system/cookies";
import Defaults from "bitcorn/system/defaults";

export default class SettingsModal extends Component.extend({
  isSnowing: false,

  init() {
    this._super(...arguments);
    this.isSnowing = Cookies.isSnowing;
  },

  actions: {
    changeSnowState() {
      this.set('isSnowing', !this.get('isSnowing'));

      if (this.get('isSnowing')) {
        this.setCookie(Defaults.Cookies.Available.IS_SNOWING, true, Defaults.Cookies.NUM_DAYS_EXPIRING);
      } else {
        this.setCookie(Defaults.Cookies.Available.IS_SNOWING, false, Defaults.Cookies.NUM_DAYS_EXPIRING);
      }
    },

    reset() {
      this.resetCookies();
      //this.showMessage(Messages.COOKIES_EXPIRED);
    },

    reload() {
      // @ts-ignore
      this.get('deactivateSettings')();
      location.reload();
    }
  },

  resetCookies() {
    for (let key in Defaults.Cookies.Available) {
      // @ts-ignore
      this.setCookie(Defaults.Cookies.Available[key], undefined, 0);
    }
  },

  setCookie(name: string, value: any, numDaysExpiring: number): void {
    let date: Date = new Date();
    date.setTime(date.getTime() + (numDaysExpiring * 24 * 60 * 60 * 1000));
    let expires: string = "expires="+ date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires;
  },

  showMessage(message: string) {
    let alert: HTMLDivElement = document.getElementById("alert-message") as HTMLDivElement;

    alert.classList.remove("invisible");

    let messageBox: HTMLDivElement = document.createElement("div");
    messageBox.innerHTML = message;

    alert.appendChild(messageBox);  // test
  }
}) {
  // normal class body definition here
};
