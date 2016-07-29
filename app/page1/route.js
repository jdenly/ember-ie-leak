import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let model = Ember.Object.create({usedHeap: 0});
    if(window.performance && window.performance.memory) {
      model.set('usedHeap', Math.round((window.performance.memory.usedJSHeapSize / 1024 / 1024 + 0.00001) * 100) / 100);
    }
    return model;
  }
});
