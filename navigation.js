/*Exercise 5.2 Create Dropdown Menus*/

function Navigation(selector){
  this.$nav = $(selector.nav);
  this.$navTabs = $(this.$nav).find('li');
}

Navigation.prototype.init = function(){
  this.$navTabs.hover(this.navHoverIn, this.navHoverOut);
};

Navigation.prototype.navHoverIn = function(){
  $(this).children('ul').addClass('show');
  $(this).addClass('hover');
};

Navigation.prototype.navHoverOut = function(){
  $(this).removeClass('hover');
  $(this).children('ul').removeClass('show');
};

$(document).ready(function(){
  var mainNav = new Navigation({'nav' : '#nav'});
  mainNav.init();
});