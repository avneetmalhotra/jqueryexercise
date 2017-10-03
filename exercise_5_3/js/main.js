$(document).ready(function(){
  var slideshowNavbarArguments = { slideshowElement : $('#slideshow'),
                                   slideshowNavbarClass : 'slideshowNavbar'
                                  },
      slideshowNavbar = new Navbar(slideshowNavbarArguments),

      slideshowArguments = { slideshowElement : $('#slideshow'),
                             slideshowNavbarReference : slideshowNavbar
                            },
      slideshow = new Slideshow(slideshowArguments);
  
  slideshowNavbar.init();
  slideshow.init();
});
