var RegExInputView = Backbone.View.extend({
  initialize: function(){
    this.regexInputEle = this.$el.find('input[type=text]');
  },
  events: {
    'click input[type=button]': 'addRegEx',
    'keypress #regex-input': 'addOnEnterKey'
  },
  addOnEnterKey: function(e){
    if( e.which !== 13 ) {
      return;
    } else {
      this.addRegEx();
    }
  },
  addRegEx: function() {
    var value = this.regexInputEle.val();
    if( value.length > 0) {
      this.collection.add({
        expression: value
      });
    }
  }
});
