/* Exercise-4.2-Add tabbed navigation */

function Tabs(options){
  this.modulesSelector = options.modulesSelector;
  this.$modules = options.$modulesElement;
}

Tabs.prototype.init = function(){
  //1.Hide all of the modules.
  this.$modules.hide();

  //2.Create an unordered list element before the first module.
  this.createNav();

  this.addTabs();

  this.insertNav();

  this.$modulesNav.on('click', 'li', this.toggleModule());

  this.$modules.first().show();
};

Tabs.prototype.createNav = function(){
  this.$modulesNav = $('<ul></ul>');
};

Tabs.prototype.addTabs = function(){
  var _this = this;

  this.$modules.each(function(){
    $('<li></li>').text($(this).find('h2').text()).data('corresondingModule', $(this)).appendTo(_this.$modulesNav);
  });
};

Tabs.prototype.insertNav = function(){
  this.$modulesNav.insertBefore(this.$modules.first());
};

Tabs.prototype.toggleModule = function(){
  var _this = this;

  return function(){
    $(this).data('corresondingModule').show().siblings(_this.modulesSelector).hide();
  }
};

$(document).ready(function(){
  var tabsOptions = { modulesSelector : 'div.module',
                      $modulesElement : $('div.module')
                    },
      tabs = new Tabs(tabsOptions);
  tabs.init();
});
