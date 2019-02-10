import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home');
  this.mount('downloads');
  this.mount('tutorials');
  this.route('about', function() {
    this.route('authors');
    this.route('page');
  });
  this.route('contact');
  this.route('imprint');
  this.route('privacy');
});

export default Router;
