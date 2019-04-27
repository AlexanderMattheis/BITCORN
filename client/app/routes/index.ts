import Route from "@ember/routing/route";

export default class Index extends Route {
  public beforeModel(): void {
    this.transitionTo("home");
  }
}
