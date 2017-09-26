/*Exercise 5.1 Reveal hidden text*/
function Blog(elements){
  this.$blog = elements.$blog;
  this.$headlinesAnchors = elements.$headlinesAnchors;
}

Blog.prototype.init = function(){
  this.$headlinesAnchors.click(this.headlinesAnchorClickHandler);
};

Blog.prototype.headlinesAnchorClickHandler = function(eventObj){
  eventObj.preventDefault();

  var $excerptPara = $(this).closest('h3').siblings('p.excerpt'),
      $cousinExcerptParas = $excerptPara.closest('li').siblings('li').find('p.excerpt');

  $excerptPara.slideToggle();
  $cousinExcerptParas.slideUp();
};

$(document).ready(function(){
  var blog = new Blog({'$blog' : $('#blog'),
                       '$headlinesAnchors' : $('#blog').find('a')
                      });
  blog.init();
});
