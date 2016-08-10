import Ember from 'ember';


export default Ember.Route.extend({
  counterService: Ember.inject.service('click-counter'),

  actions: {
    countClicks() {
      let counterService = this.get('counterService');
      counterService.count();
      console.log(counterService.clicks);
    }
  }
});
