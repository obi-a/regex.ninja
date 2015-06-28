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
    var value = this.regexInputEle.val();
    if( value.length > 0) {
      this.collection.add({
        expression: value
      });
    }
  }
});


$(function() {
  var regularExpressions = new RegularExpressions();
  var regexInputView = new RegExInputView({
    collection: regularExpressions
  });
  console.log("we are ready");
});
