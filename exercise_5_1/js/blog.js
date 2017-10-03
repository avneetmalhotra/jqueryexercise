/*Exercise 5.1 Reveal hidden text*/
function Blog(options){
  this.$blog = options.$blog;
  this.$headlinesAnchors = options.$headlinesAnchors;
  this.excerptParagraphSelector = options.excerptParagraphSelector;
}

Blog.prototype.init = function(){
  this.$headlinesAnchors.click(this.headlinesAnchorClickHandler());
};

Blog.prototype.headlinesAnchorClickHandler = function(){
  var _this = this;

  return function(eventObj){  
    eventObj.preventDefault();

    var $excerptPara = $(this).closest('h3').siblings(_this.excerptParagraphSelector),
        $cousinExcerptParas = $excerptPara.closest('li').siblings('li').find(_this.excerptParagraphSelector);

    $excerptPara.slideToggle();
    $cousinExcerptParas.slideUp();
  };
};

$(document).ready(function(){
  var blogArguments = { $blog : $('#blog'),
                        $headlinesAnchors : $('#blog').find('a'),
                        excerptParagraphSelector : 'p.excerpt'
                      },
      blog = new Blog(blogArguments);
  blog.init();
});
