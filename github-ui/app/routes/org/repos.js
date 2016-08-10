import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let org = this.modelFor('org');
    return Ember.$.get(`https://api.github.com/orgs/${org.id}/repos`).then(data => {
      return data.map( raw => {
        raw.oldId = raw.id;
        raw.id = raw.name;
        return raw;
      });
    });
  },
  setupController(controller) {
    this._super(...arguments); //Always call this!
    controller.set('org', this.modelFor('org'));
  }
});
