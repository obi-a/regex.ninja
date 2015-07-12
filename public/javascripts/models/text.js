var Text = Backbone.Model.extend({
  defaults: {
    plainText: '',
    searchResult: '',
    regex: ''
  },
  searchText: function (){
    try {
      var re = new RegExp("(" + this.get('regex') + ")", "g");
      var plainText = this.get('plainText');
      this.set( "searchResult", plainText.replace(re, "<span class=\"highlight\">$1</span>") );
      return this.get('searchResult');
    }
    catch(e) {
      return this.get('plainText');
    }
  }
});
