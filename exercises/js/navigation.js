/************************************/
/*Exercise 5.2 Create Dropdown Menus*/

$(document).ready(function(){
  $('#nav').find('li').hover(
    function(){ //inFunction
      $(this).children('ul').addClass('show');
      $(this).addClass('hover');
  },
    function(){ //outFunction
      $(this).removeClass('hover');
      $(this).children('ul').removeClass('show');
    }
  );
});