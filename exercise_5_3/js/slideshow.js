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


