/*Exercise 6.1 Load External Content*/

//TargetDiv class
function TargetDiv(parent){
  this.parent = parent;
  this.blogHeadlines = $(parent).find('h3');
}

TargetDiv.prototype.init = function(){
  this.createTargetDiv();
  this.storeTargetDivsRef()
};

TargetDiv.prototype.createTargetDiv = function(){
  this.targetDivsCreated = $('<div class="target"></div>').insertAfter(this.blogHeadlines);
};

TargetDiv.prototype.storeTargetDivsRef = function(){
  this.blogHeadlines.each(function(){
    var headline = $(this);
    headline.data('target-div', headline.next('div.target'));
  });
};

//BlogHeadLine class
function BlogHeadline(parent){
  this.parent = parent;
  this.headlines = $(parent).find('h3');
  this.headlinesAnchor = this.headlines.children('a');
}

BlogHeadline.prototype.init = function(){
  this.correctHrefAttrValues();
  $(this.headlinesAnchor).click(this.clickHandler());
};

BlogHeadline.prototype.correctHrefAttrValues = function(){
  this.headlinesAnchor.each(function(){
    var hrefValue = $(this).attr('href');
    $(this).attr('href', 'data/' + hrefValue);
  });
};

BlogHeadline.prototype.clickHandler = function(){
  var that = this;
  
  return function(eventObj){
    eventObj.preventDefault();
  
    var hrefAttrValue = $(this).attr('href'), 
        targetDiv = $(this).parent('h3').data('target-div');
    that.loadContent(targetDiv, hrefAttrValue);
  };
};

BlogHeadline.prototype.loadContent = function(targetElement, hrefAttrValue){
  var contentIdIndex = hrefAttrValue.lastIndexOf('#'),
      contentId = hrefAttrValue.slice(contentIdIndex),
      contentUrl = hrefAttrValue.slice(0, contentIdIndex),
      finalUrl = contentUrl + ' ' + contentId;
  
  targetElement.load(finalUrl);
};

$(document).ready(function(){
  var targetDiv = new TargetDiv('#blog')
  targetDiv.init();

  var blogHeadline = new BlogHeadline('#blog');
  blogHeadline.init();
}); 