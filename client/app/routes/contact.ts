import Route from '@ember/routing/route';

export default class Contact extends Route {
  model(): object {
    return {
      email: "",
      message: ""
    };
  }
}
