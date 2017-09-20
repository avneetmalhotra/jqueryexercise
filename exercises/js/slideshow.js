/*Exercise 5.3 Create a slideshow*/

function Slideshow(element){
  this.element = element;
  this.childrenListItems = element.children('li');
  this.currentSlide = this.childrenListItems.first();
}

Slideshow.prototype.init = function(){
  this.moveElementToTop();
  this.hideAllChildren();
};

Slideshow.prototype.moveElementToTop = function(){
  this.element.prependTo('body');
};

Slideshow.prototype.hideAllChildren = function(){
  this.childrenListItems.hide();
};

Slideshow.prototype.showSlideshow = function(slideshowNavbarRef){
  this.slideshowNavbarRef = slideshowNavbarRef;
  this.animateItems();
};

Slideshow.prototype.animateItems = function(){
  var that = this;

  //when last element + 1 element is reached
  if(!this.currentSlide.length)
    this.currentSlide = this.childrenListItems.first();

  this.slideshowNavbarRef.updateSecondTab(this.currentSlide);

  this.currentSlide.fadeIn(3000, function(){
    $(this).delay(1500).fadeOut(2000, function(){
      that.currentSlide = that.currentSlide.next('li');
      that.animateItems();
    });
  });
};

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

$(document).ready(function(){
  var slideshow = new Slideshow($('#slideshow')),
      slideshowNavbar = new Navbar(slideshow, 'slideshowNav');
  
  slideshow.init();
  slideshowNavbar.init();
  
  slideshow.showSlideshow(slideshowNavbar);
});