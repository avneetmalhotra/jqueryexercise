/*Exercise 5.2 Create Dropdown Menus*/
function Navigation(selector){
  this.$nav = $(selector.nav);
  this.$navTabs = this.$nav.find('li');
}

Navigation.prototype.init = function(){
  this.$navTabs.hover(this.navHoverInOut);
};

Navigation.prototype.navHoverInOut = function(){
  $(this).toggleClass('hover').children('ul').toggleClass('show');
};

$(document).ready(function(){
  var mainNav = new Navigation({'nav' : '#nav'});
  mainNav.init();
});