var RegularExpression = Backbone.Model.extend({
  defaults: {
    expression: ''
  },
  validate: function(attrs){

  },
  toJSON: function() {
    var json = Backbone.Model.prototype.toJSON.apply(this, arguments);
    json.cid = this.cid;
    return json;
  }
});
