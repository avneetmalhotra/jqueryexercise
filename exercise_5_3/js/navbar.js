function Navbar(options){
  this.$navElement = null;
  this.$slideshowElement = $(options.slideshowSelector);
  this.navbarClass = options.slideshowNavClass;
}

Navbar.prototype.init = function(){
  this.makeNavbar();
  this.addTabs(2);
  this.updateFirstTab();
};

Navbar.prototype.makeNavbar = function(){
  // this.$navElement = $('<ul></ul>').insertAfter(this.$slideshowElement).addClass(this.navbarClass);
  this.$navElement = $('<ul></ul>').addClass(this.navbarClass);
  console.log(this.$navElement);
};

Navbar.prototype.addTabs = function(noOfTabs){
  while(noOfTabs--)
    $('<li></li>').appendTo(this.$navElement);
};

Navbar.prototype.updateFirstTab = function(){
  this.$navElement.children().eq(0).text('No of slides: ' + this.$slideshowElement.children().length);
};

Navbar.prototype.updateSecondTab = function($currentSlide){
  this.$navElement.children().eq(1).text('You are viewing: ' + $currentSlide.children('h2').text());
};

Navbar.prototype.insertNavbar = function(){
  this.$navElement.insertAfter(this.$slideshowElement);
};
