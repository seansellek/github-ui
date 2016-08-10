import Ember from 'ember';

export default Ember.Service.extend({
  clicks: 0,
  count() {
    let count = this.get('clicks');
    this.set('clicks', count + 1);
  }
});
