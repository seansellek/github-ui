import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let org = this.modelFor('org');
    let repo_id = params.repo;
    return Ember.$.get(`https://api.github.com/repos/${org.id}/${repo_id}`).then(raw => {
      raw.oldId = raw.id;
      raw.id = raw.name;
      return raw;
    });
  },
  setupController(controller) {
    this._super(...arguments); //Always call this!
    controller.set('org', this.modelFor('org'));
  }
});
