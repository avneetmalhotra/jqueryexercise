/************************/
/*Exercise 5.1 Reveal hidden text*/

$(document).ready(function(){
  $('#blog').find('a').click(function(event){
    var anchorHeadline = $(this);
    event.preventDefault();
    
    var excerptPara = anchorHeadline.closest('h3').siblings('p.excerpt');
    if(excerptPara.is(':hidden')){
      $('#blog p.excerpt').slideUp();
      excerptPara.slideDown();
    }
    else{
      excerptPara.slideUp();
    }
  });
});