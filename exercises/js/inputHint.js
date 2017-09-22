/*Exercise 4.1 Create an input hint*/
function InputHint(selectors){
  this.$searchInput = $(selectors.searchInput);
  this.$searchInputLabel = $(selectors.searchInputLabel);
}

InputHint.prototype.init = function(){
  //1.Set the value of the search input to the text of the label element
  //3.Remove the label element
  this.$searchInput.val(this.$searchInputLabel.remove().text());
  
  //2.Add a class of "hint" to the search input
  this.$searchInput.addClass('hint');

  this.bindEventsOnSearchInput();
};

InputHint.prototype.bindEventsOnSearchInput = function(){
  this.$searchInput.focus(this.searchInputFocus);
  this.$searchInput.blur(this.searchInputBlur);
};

InputHint.prototype.searchInputFocus = function(){
  $(this).removeClass('hint').val('');
};

InputHint.prototype.searchInputBlur = function(){
  var $element = $(this);
  if(!$element.val().length){
    $element.val('Enter search term').addClass('hint');
  }
};

$(document).ready(function(){
  var inputHint = new InputHint({'searchInput' : 'input[name="q"]', 
                                 'searchInputLabel' : 'label[for="q"]'  
                                });

  inputHint.init();
});