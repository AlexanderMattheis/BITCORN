import Route from '@ember/routing/route';

export default class Index extends Route.extend({
  beforeModel() { /* executed before model()-hook */
    // transitioning without knowledge about the model
    this.replaceWith("home");
  }
}) {
  // normal class body definition here
}
