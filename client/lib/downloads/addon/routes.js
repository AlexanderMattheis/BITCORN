import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('programs', function() {
    this.route('bioinformatics');
    this.route('cross-dating');
    this.route('res');
  });
});
