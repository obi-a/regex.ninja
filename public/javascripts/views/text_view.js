var TextView = Backbone.View.extend({
  initialize: function(){
    this.textInputEle = this.$el.find('textarea');
  },
  events: {
    'keypress textarea': 'updateText'
  },
  updateText: function() {
    this.model.plainText = this.textInputEle.val();
    console.log(this.model.plainText);
  }
});
