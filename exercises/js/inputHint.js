$(document).ready(function(){
  /************************/
  /*Exercise 4.1 Create an input hint*/

  //1.Set the value of the search input to the text of the label element
  var searchInput = $('input[name="q"]');
  var searchInputLabel = $('label[for="q"]');
  searchInput.val(searchInputLabel.text());

  //2.Add a class of "hint" to the search input
  searchInput.addClass('hint');

  //3.Remove the label element
  searchInputLabel.remove();

  //4.Bind a focus event to the search input that removes the hint text and the "hint" class
  searchInput.focus(function(){
    var element = $(this);
    element.removeClass('hint');
    element.val('');
  });

  //5.Bind a blur event to the search input that restores the hint text and "hint" class if no search text was entered
  searchInput.blur(function(){
    var element = $(this);
    if(!element.val().length){
      element.val('Enter search term');
      element.addClass('hint');
    }
  });
});