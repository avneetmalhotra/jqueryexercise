$(document).ready(function(){
  /***************************************************/
  /******* Exercise-4.2-Add tabbed navigation ********/

  //1.Hide all of the modules.
  var $modules = $('div.module');
  $modules.hide();

  //2.Create an unordered list element before the first module.
  var $moduleNav = $('<ul></ul>').insertBefore($modules.eq(0));

  //3.Iterate over the modules using $.fn.each.For each module, use the text of the 
  //h2 element as the text for a list item that you add to the unordered list element.
  $modules.each(function(){
    var $module = $(this),
        $moduleName = $module.children('h2');

    var $navElem = $('<li></li>').appendTo($moduleNav).text($moduleName.text());
    
    //4.Bind a click event to the list item that:
      //1.Shows the related module, and hides any other modules
      //2.Adds a class of "current" to the clicked list item
      //3.Removes the class "current" from the other list item
    $navElem.click(function(){
      $module.show().siblings('div.module').hide();
    });
  });
  
  //5.Finally, show the first tab.
  $moduleNav.children('li:first').show();    
});