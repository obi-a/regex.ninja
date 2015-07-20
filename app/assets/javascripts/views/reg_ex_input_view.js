var RegExInputView = Backbone.View.extend({
  initialize: function(){
    this.regexInputEle = this.$el.find('input[type=text]');
  },
  events: {
    'click input[type=button]': 'addRegEx',
    'keyup #regex-input': 'addOnEnterKey'
  },
  addOnEnterKey: function(e){
    this.newRegEx();
    if( e.which !== 13 ) {
      return;
    } else {
      this.addRegEx();
    }
  },
  newRegEx: function() {
    this.trigger('regex:addnew', this.regexInputEle.val() );
  },
  addRegEx: function() {
    var value = this.regexInputEle.val();
    if( value.length > 0 && !_.contains(this.collection.pluck("expression"), value) ) {
      this.collection.add({
        expression: value
      });
    }
  }
});
