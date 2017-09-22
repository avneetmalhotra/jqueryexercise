$(document).ready(function(){
  var slideshow = new Slideshow($('#slideshow')),
      slideshowNavbar = new Navbar(slideshow, 'slideshowNav');
  
  slideshow.init();
  slideshowNavbar.init();
  
  slideshow.showSlideshow(slideshowNavbar);
});