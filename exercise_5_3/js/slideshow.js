/*Exercise 5.3 Create a slideshow*/

function Slideshow(options){
  this.$element = $(options.slideshowSelector);
  this.slideshowNavbarRef = options.slideshowNavbarRef;
  this.$childrenListItems = this.$element.children('li');
  this.$currentSlide = this.$childrenListItems.first();
}

Slideshow.prototype.init = function(){
  this.moveElementToTop();
  this.hideAllChildren();
  this.runSlideshow();
  this.slideshowNavbarRef.insertNavbar();
};

Slideshow.prototype.moveElementToTop = function(){
  this.$element.prependTo('body');
};

Slideshow.prototype.hideAllChildren = function(){
  this.$childrenListItems.hide();
};

Slideshow.prototype.runSlideshow = function(){
  var _this = this;

  //when last element + 1 element is reached
  if(!this.$currentSlide.length)
    this.$currentSlide = this.$childrenListItems.first();

  this.slideshowNavbarRef.updateSecondTab(this.$currentSlide);

  this.$currentSlide.fadeIn(3000, function(){
    $(this).delay(1500).fadeOut(2000, function(){
      _this.$currentSlide = _this.$currentSlide.next('li');
      _this.runSlideshow();
    });
  });
};
