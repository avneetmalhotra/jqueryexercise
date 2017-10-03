/*Exercise 5.3 Create a slideshow*/
function Slideshow(options){
  this.$slideshowElement = options.slideshowElement;
  this.slideshowNavbarReference = options.slideshowNavbarReference
  this.$allSlides = this.$slideshowElement.children('li');
  this.$currentSlide = this.$allSlides.first();
}

Slideshow.prototype.init = function(){
  this.moveSlideshowElementToTop();
  this.hideAllSlides();
  this.runSlideshow();
  this.slideshowNavbarReference.insertNavbar();
};

Slideshow.prototype.moveSlideshowElementToTop = function(){
  this.$slideshowElement.prependTo('body');
};

Slideshow.prototype.hideAllSlides = function(){
  this.$allSlides.hide();
};

Slideshow.prototype.runSlideshow = function(){
  var _this = this;

  //when last element + 1 element is reached
  if(!this.$currentSlide.length)
    this.$currentSlide = this.$allSlides.first();

  this.slideshowNavbarReference.updateSecondTab(this.$currentSlide);

  this.$currentSlide.fadeIn(3000, function(){
    $(this).delay(1500).fadeOut(2000, function(){
      _this.$currentSlide = _this.$currentSlide.next('li');
      _this.runSlideshow();
    });
  });
};
