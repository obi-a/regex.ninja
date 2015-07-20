// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(function() {
  var text = new Text();

  var regularExpressions = new RegularExpressions();

  var regexInputView = new RegExInputView({
    collection: regularExpressions,
    el: '#regex-input-section'
  });

  var regexCollectionView = new RegExCollectionView({
    collection: regularExpressions,
    el: '#regexs'
  });

  var textView = new TextView({
    el: '#text-section',
    model: text
  });

  regexCollectionView.render();

  textView.listenTo(regexInputView, 'regex:addnew', function( expression ){
    text.set("regex", expression);
    textView.render();
  });

  textView.listenTo(regexCollectionView, 'regex:addFromCollection', function(expression){
    text.set("regex", expression);
    textView.render();
    $('#regex-input').val(expression);
  });
});
