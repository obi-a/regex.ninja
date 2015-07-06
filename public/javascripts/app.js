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

  console.log("we are ready");
});
