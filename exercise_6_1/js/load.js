/*Exercise 6.1 Load External Content*/

//BlogHeadLine class
function Load(options){
  this.$blogHeadlines = options.$blogHeadlines;
  this.$blogHeadlinesAnchor = this.$blogHeadlines.children('a');
}

Load.prototype.init = function(){
  this.correctHrefAttrValues();

  this.createTargetDivs();
  this.saveTargetDivsRefInBlogHeadlines();

  this.$blogHeadlinesAnchor.click(this.whenBlogHeadineAnchorClicked());
};

Load.prototype.correctHrefAttrValues = function(){
  this.$blogHeadlinesAnchor.each(function(){
    var hrefValue = $(this).attr('href');
    $(this).attr('href', 'data/' + hrefValue);
  });
};

Load.prototype.whenBlogHeadineAnchorClicked = function(){
  var _this = this;
  
  return function(eventObj){
    eventObj.preventDefault();
    
    var hrefAttrValue = $(this).attr('href'), 
        targetDiv = $(this).parent('h3').data('target-div');
    _this.loadContent(targetDiv, hrefAttrValue);
  };
};

Load.prototype.createTargetDivs = function($headline){
  $('<div class="target"></div>').insertAfter(this.$blogHeadlines);
};

Load.prototype.saveTargetDivsRefInBlogHeadlines = function(){
  this.$blogHeadlines.each(function(){
    var $blogHeadline = $(this);
    $blogHeadline.data('target-div', $blogHeadline.next('div.target'));
  });
};

Load.prototype.loadContent = function(targetElement, hrefAttrValue){
  targetElement.load(hrefAttrValue.split('#').join(' #'));
};

$(document).ready(function(){
  var loadBlog = new Load({ '$blogHeadlines' : $('#blog').find('h3') });
  loadBlog.init();
}); 