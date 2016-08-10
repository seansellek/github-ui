import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let org = this.modelFor('org');
    let repo = this.modelFor('org.repo');
    return Ember.$.get(`https://api.github.com/repos/${org.id}/${repo.id}/contributors`).then(data => {
      return data.map( raw => {
        raw.oldId = raw.id;
        raw.id = raw.login;
        return raw;
      });
    });
  },
  setupController(controller) {
    this._super(...arguments); //Always call this!
    controller.set('org', this.modelFor('org'));
    controller.set('repo', this.modelFor('org.repo'));
  }
});
