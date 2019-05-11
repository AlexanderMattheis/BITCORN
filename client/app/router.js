import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route("home");
  this.route("downloads", function () {
    this.route("graphics", function () {
    });
    this.route('programs', function() {
      this.route('bioinformatics');
      this.route('cross-dating');
      this.route('res');
    });
  });
  this.route("tutorials");
  this.route("about", function () {
    this.route("authors");
    this.route("page");
  });
  this.route("contact");
  this.route("imprint");
  this.route("privacy");
  this.route('downloads');
  this.route('tutorials');
});

export default Router;
