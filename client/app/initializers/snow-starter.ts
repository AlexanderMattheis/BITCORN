import Ember from 'ember';

import Cookies from "../system/cookies";
import Snow from "../view/effects/snow";

export function initialize(): void {
  if (!Ember.testing && Cookies.isSnowing) {
    const effect: Snow = new Snow();
    effect.start();
  }
}

export default {
  after: 'settings-cookies',
  initialize
};
