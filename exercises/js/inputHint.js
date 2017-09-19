/*Exercise 4.1 Create an input hint*/

function InputHint(selectors){
  this.searchInput = $(selectors.searchInput);
  this.searchInputLabel = $(selectors.searchInputLabel);
}

InputHint.prototype.init = function(){
  //1.Set the value of the search input to the text of the label element
  this.setSearchInputValue(this.searchInputLabel.text());

  //2.Add a class of "hint" to the search input
  this.searchInput.addClass('hint');

  //3.Remove the label element
  this.searchInputLabel.remove();  

  //4.Bind a focus event to the search input that removes the hint text and the "hint" class
  this.searchInput.focus(this.searchInputFocus);

  //5.Bind a blur event to the search input that restores the hint text and "hint" class if no search text was entered
  this.searchInput.blur(this.searchInputBlur);
};

InputHint.prototype.setSearchInputValue = function(value){
  this.searchInput.val(value);
};

InputHint.prototype.searchInputFocus = function(){
  var element = $(this);
  element.removeClass('hint');
  element.val('');
};

InputHint.prototype.searchInputBlur = function(){
  var element = $(this);
  if(!element.val().length){
    element.val('Enter search term');
    element.addClass('hint');
  }
};

$(document).ready(function(){
  var inputHint = new InputHint({'searchInput' : 'input[name="q"]', 
                                 'searchInputLabel' : 'label[for="q"]'  
                                });

  inputHint.init();
});