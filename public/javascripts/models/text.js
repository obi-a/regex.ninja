var Text = Backbone.Model.extend({
  defaults: {
    plainText: '',
    searchResult: ''
  },
  searchText: function (){
    //do the regex search and return the results
    return this.plainText;
  }
});
