import Ember from 'ember';

export default Ember.Route.extend({
  redirect() {
    this.replaceWith('org.repos', this.modelFor('org'));
  }
});
