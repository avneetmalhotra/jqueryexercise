$(document).ready(function(){
  var slideshowNavbar = new Navbar({'slideshowSelector' : '#slideshow',
                                    'slideshowNavClass' : 'slideshowNav'
                                  }),
      slideshow = new Slideshow({'slideshowSelector' : '#slideshow',
                                 'slideshowNavbarRef' : slideshowNavbar
                                });
  
  slideshowNavbar.init();
  slideshow.init();
});