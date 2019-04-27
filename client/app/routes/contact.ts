import Route from "@ember/routing/route";

export default class Contact extends Route {
  public model(): object {
    return {
      email: "",
      message: ""
    };
  }
}
