import Controller from '@ember/controller';

export default class Application extends Controller.extend({
  settingsActive: false,

  actions: {
    activateSettings() {
      this.set('settingsActive', true);
    },

    deactivateSettings() {
      this.set('settingsActive', false);
    }
  }
}) {
  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'index': Application;
  }
}
