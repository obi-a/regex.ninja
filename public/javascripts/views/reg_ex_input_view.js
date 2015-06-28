var RegExInputView = Backbone.View.extend({
  initialize: function(){
    this.regexInputEle = this.$el.find('input[type=text]');
  },
  events: {
    'click input[type=button]': 'addRegEx'
  },
  addRegEx: function() {
    var value = this.regexInputEle.val();
    if( value.length > 0) {
      this.collection.add({
        expression: value
      });
      console.log(this.collection);
    }
  }
});
