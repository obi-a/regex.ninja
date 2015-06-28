var RegularExpression = Backbone.Model.extend({
  defaults: {
    expression: ''
  },
  validate: function(attrs){

  }
});

var RegularExpressions = Backbone.Collection.extend({
  model: RegularExpression
})

var RegExInputView = Backbone.View.extend({
  el: '#regex-input-section',
  initialize: function(){
    this.regexInputEle = this.$el.find("#regex-input");
  },
  events: {
    'click input[type=button]': 'addRegEx'
  },
  addRegEx: function() {
    console.log("i was called");
  }
});



$(function() {
  var regexInputView = new RegExInputView({});
  console.log("we are ready");
});
