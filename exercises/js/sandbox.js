$(document).ready(function(){
  
/*** Exercise:2.1 Selecting ***/

  //1.Select all of the div elements that have a class of "module".
  $("div.module");

  //2.Come up with three selectors that you could use to get the third item in the #myList unordered list. 
  $("#myListItem"); 
  $("#myList li:nth-child(3)");
  $("#listItem_2 + li");
  //Which is the best to use? Why?
  //ans- Id selector is best to use because it is unique and so fastest

  //3.Select the label for the search input using an attribute selector.
  $("label[for='q']");

  //4.Figure out how many elements on the page are hidden
  var noOfHiddenElements = $('html').find(':hidden').length;
  console.log(noOfHiddenElements);
  
  //5.Figure out how many image elements on the page have an alt attribute.
  var noOfImgaesHavingAlt = $('img[alt]').length;
  console.log(noOfImgaesHavingAlt);
  
  //6.Select all of the odd table rows in the table body.
  $("tbody tr:nth-child(odd)");


/****************************************/
/*** Exercise:2.2 Traversing ***/

  //1.Select all of the image elements on the page; log each image's alt attribute.
  $('img').each(function(index, imgElem){
    imgObj = $(imgElem);
    console.log('Image: ' + index + ', alt: ' +imgObj.attr('alt'));
  });

  //2.Select the search input text box, then traverse up to the form and add a class to the form.
  $(".input_text").parent().addClass("search-form");

  //3.Select the list item inside #myList that has a class of "current" and remove that class from it; add a class of "current" to the next list item.
  $("#myList li.current").removeClass('current').next().addClass('current');

  //4.Select the select element inside #specials; traverse your way to the submit button.
  $('#specials select').closest('form').find('input[type="submit"]');

  //5.Select the first list item in the #slideshow element; add the class "current" to it, and then add a class of "disabled" to its sibling elements.
  $("#slideshow li:first").addClass('current').siblings().addClass('disabled');
/****************************************/
/*** Exercise:2.3 Manipulating ***/

  //1.Add five new list items to the end of the unordered list #myList.
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
  var lastImg = $('img:last').clone(); 
  $(newDivModule).append(lastImg).insertAfter('div.module:last');
});
