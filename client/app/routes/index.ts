import Route from '@ember/routing/route';

export default class Index extends Route {
  beforeModel() {
    this.transitionTo("home");
  }
}
