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
  events: {
    'click a': 'applyRegex',
    'click span': 'removeRegex'
  },
  applyRegex: function(e) {
   console.log( $(e.currentTarget).attr("cid") );
  },
  removeRegex: function(e) {
    var cid = $(e.currentTarget).attr("cid");
    this.collection.remove(cid);
    this.render();
  },
  render: function() {
    var str = this.template({
      regexs: this.collection.toJSON()
    });
    this.$el.html(str);
  }
});
