import Ember from 'ember';

export default Ember.Route.extend({
  favorites: Ember.inject.service('favorites'),

  model() {
    return [
      {id: "facebook"},
      {id: "emberjs"},
      {id: "yahoo"}
    ];
  },

  actions: {
    favorite(org) {
      let fav = this.get('favorites');
      fav.items.addObject(org.id);
      console.log(fav.items);
    }
  }
});
