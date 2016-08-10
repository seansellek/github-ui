import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let org = this.modelFor('org');
    return $.get(`https://api.github.com/orgs/${org.id}/repos`).then(data => {
      return data.map(raw => {
        raw.oldID = raw.id;
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
