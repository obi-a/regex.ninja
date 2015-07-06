var RegExCollectionView = Backbone.View.extend({
  initialize: function(){
    _.templateSettings = {
      interpolate: /\{\{\=(.+?)\}\}/g,
      evaluate: /\{\{(.+?)\}\}/g
    };
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(this.collection, 'remove', this.render);
    this.template = _.template( $("#regex-template").html() );
  },
  render: function() {
    var str = this.template({
      regexs: this.collection.toJSON()
    });

    this.$el.html(str);
  }
});
