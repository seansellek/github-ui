import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {id: "Facebook"},
      {id: "Yahoo"}
    ];
  }
});
