import {action} from "@ember-decorators/object";

import Controller from "@ember/controller";

export default class Application extends Controller {
  // @ts-ignore
  private settingsActive: boolean;

  public init() {
    super.init();
    this.settingsActive = false;
  }

  @action
  public activateSettings(): void {
    // @ts-ignore
    this.set("settingsActive", true);
  }

  @action
  public deactivateSettings(): void {
    // @ts-ignore
    this.set("settingsActive", false);
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module "@ember/controller" {
  interface Registry {
    "index": Application;
  }
}
