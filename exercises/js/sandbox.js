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

});
