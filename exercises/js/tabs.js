/* Exercise-4.2-Add tabbed navigation */

function Tabs(selectors){
  this.$modules = $(selectors.modules);
}

Tabs.prototype.init = function(){
  //1.Hide all of the modules.
  this.$modules.hide();

  //2.Create an unordered list element before the first module.
  this.createNavbar();

  this.addTabs();

  this.$modules.first().show();
};

Tabs.prototype.createNavbar = function(){
  this.$moduleNav = $('<ul></ul>').insertBefore(this.$modules.eq(0));
};

Tabs.prototype.addTabs = function(){
  var that = this;
  this.$modules.each(function(){
    var $module = $(this),
        $moduleName = $module.children('h2').text(),
        $tab = $('<li></li>').appendTo(that.$moduleNav).text($moduleName);

    that.bindClickEventToTab($tab, $module);
  });
};

Tabs.prototype.bindClickEventToTab = function($tab, $relatedModule){
  $tab.click(function(){
    $relatedModule.show().siblings('div.module').hide();
  });
};

$(document).ready(function(){
  var tabs = new Tabs({'modules' : 'div.module'});
  tabs.init();
});
