$(document).ready(function(){
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
});
