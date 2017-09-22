/*Exercise 5.1 Reveal hidden text*/
function Blog(selector){
  this.$blog = $(selector.blog);
  this.$headlinesAnchors = this.$blog.find('a');
}

Blog.prototype.init = function(){
  this.$headlinesAnchors.click(this.headlinesAnchorClickHandler());
};

Blog.prototype.headlinesAnchorClickHandler = function(){
  var that = this;

  return function(event){
    event.preventDefault();
    
    var $excerptPara = $(this).closest('h3').siblings('p.excerpt');
    
    if($excerptPara.is(':hidden')){
      that.$blog.find('p.excerpt').slideUp();
      $excerptPara.slideDown();
    }
    else
      $excerptPara.slideUp();
  };
};

$(document).ready(function(){
  var blog = new Blog({'blog' : '#blog'});
  blog.init();
});
