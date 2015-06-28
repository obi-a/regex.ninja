var TextView = Backbone.View.extend({
  initialize: function(){
    this.textInputEle = this.$el.find('textarea');
    this.textBodyEle = this.$el.find('.panel-body');
  },
  events: {
    'keyup textarea': 'updateText'
  },
  updateText: function() {
    this.model.plainText = this.textInputEle.val();
    this.render();
  },
  render: function() {
    this.textBodyEle.html( this.model.searchText() );
  }
});
