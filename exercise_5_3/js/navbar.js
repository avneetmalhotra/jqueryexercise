function Navbar(options){
  this.$slideshowElement = options.slideshowElement;
  this.navbarClass = options.slideshowNavbarClass;
}

Navbar.prototype.init = function(){
  this.makeNavbar();
  this.addTabs(2);
  this.updateFirstTab();
};

Navbar.prototype.makeNavbar = function(){
  this.$navbar = $('<ul></ul>').addClass(this.navbarClass);
};

Navbar.prototype.addTabs = function(numberOfTabs){
  while(numberOfTabs--)
    $('<li></li>').appendTo(this.$navbar);
};

Navbar.prototype.updateFirstTab = function(){
  this.$navbar.children().eq(0).text('No of slides: ' + this.$slideshowElement.children().length);
};

Navbar.prototype.updateSecondTab = function($currentSlide){
  this.$navbar.children().eq(1).text('You are viewing: ' + $currentSlide.children('h2').text());
};

Navbar.prototype.insertNavbar = function(){
  this.$navbar.insertAfter(this.$slideshowElement);
};
