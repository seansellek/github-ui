import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let orgId = params.org;
    return {id: orgId};
  }
});
