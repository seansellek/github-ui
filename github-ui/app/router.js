import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.route('orgs');
  this.route('org', { path: 'org/:org' }, function() {
    this.route('repos', { path: '/repos' });
    this.route('repo', { path: '/:repo' }, function() {
      this.route('issues');
      this.route('contributors');
    });
  });
  this.route('not-found', { path: '/*path' });
  this.route('home', { path: '/' });
});

export default Router;
