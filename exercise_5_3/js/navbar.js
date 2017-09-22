function Navbar(slideshowRef, navbarClass){
  this.navElement = null;
  this.slideshowElement = slideshowRef.element;
  this.navbarClass = navbarClass;
}

Navbar.prototype.init = function(){
  this.makeNavbar();
  this.addTabs(2);
  this.updateFirstTab();
};

Navbar.prototype.makeNavbar = function(){
  this.navElement = $('<ul></ul>').insertAfter(this.slideshowElement).addClass(this.navbarClass);
};

Navbar.prototype.addTabs = function(noOfTabs){
  while(noOfTabs--)
    $('<li></li>').appendTo(this.navElement);
};

Navbar.prototype.updateFirstTab = function(){
  this.navElement.children().eq(0).text('No of slides: ' + this.slideshowElement.children().length);
};

Navbar.prototype.updateSecondTab = function(currentSlide){
  this.navElement.children().eq(1).text('You are viewing: ' + currentSlide.children('h2').text());
};
