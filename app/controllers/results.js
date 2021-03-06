import Ember from 'ember';

export default Ember.Controller.extend({
  needs: 'index',

  correctAnswers: 0,

  wrongAnswers: 0,

  retakeWrongIsPossible: true,

  actions: {
    retakeAll: function(all){
      this.get('controllers.index').resetCounter();

      if(all)
        this.get('controllers.index').setAllMode();
      else{
        this.get('controllers.index').setFalseMode();
      }

      this.transitionToRoute('index');
    }
  }
});
