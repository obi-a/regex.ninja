$(function() {
  var regularExpressions = new RegularExpressions();
  var regexInputView = new RegExInputView({
    collection: regularExpressions,
    el: '#regex-input-section'
  });
  console.log("we are ready");
});
