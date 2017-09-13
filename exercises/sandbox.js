$(document).ready(function(){
  
/*** Exercise:2.1 Selecting ***/

  //1.
  $(".module");

  //2.
  //below id selector is best to use because it's unique
  $("#myListItem"); 
  $("#myList li:nth-child(3)");
  $("#listItem_2 + li");

  //3.
  $("label[for='q']");

  //4.
  var noOfHiddenElements = $('body').find(':hidden').length;
  console.log(noOfHiddenElements);
  
  //5.
  var noOfImgaesHavingAlt = 0;
  $('img').each(function(index, element){
    noOfImgaesHavingAlt++;
  });
  console.log(noOfImgaesHavingAlt);
  
  //6.
  $("tbody tr:nth-child(odd)");


/****************************************/
/*** Exercise:2.2 Traversing ***/

  //1.Select all of the image elements on the page; log each image's alt attribute.
  console.log($("img[alt]"));

  //2.Select the search input text box, then traverse up to the form and add a class to the form.
  $(".input_text").parent().addClass("search-form");

  //3.Select the list item inside #myList that has a class of "current" and remove that class from it; add a class of "current" to the next list item.
  $("#myList .current").removeClass('current').next().addClass('current');

  //4.Select the select element inside #specials; traverse your way to the submit button.
  $("#specials").find('input[type="submit"');

  //5.Select the first list item in the #slideshow element; add the class "current" to it, and then add a class of "disabled" to its sibling elements.
  $("#slideshow li:first").addClass('current').next().addClass('disabled');


/****************************************/
/*** Exercise:2.3 Manipulating ***/

  //1.Add five new list items to the end of the unordered list #myList.
  // $('#myList').append("<li></li><li></li><li></li><li></li><li></li>");
  for(var i = 1; i <= 5; i++){
    $("<li>List item " + (i + 7) + "</li>").appendTo('#myList');
  }

  //2.Remove the odd list items
  $("#myList li:nth-child(odd)").remove();

  //3.Add another h2 and another paragraph to the last div.module
  $("<h2>H2 Element</h2>").appendTo('div.module:last');
  $("<p>another paragraph</p>").appendTo('div.module:last');

  //4.Add another option to the select element; give the option the value "Wednesday"
  $('<option>Wednesday</option>').appendTo('select');

  //5.Add a new div.module to the page after the last one; put a copy of one of the existing images inside of it.
  var newDivModule = '<div class="module"></div>';
  var lastImg = 'img:last'; 
  $(lastImg).clone().appendTo(newDivModule).insertAfter('div.module:last');

});
