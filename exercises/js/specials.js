/*Exercise 6.2 Load content using JSON*/
//TargetDiv class
function TargetDiv(parent){
  this.parent = parent;
  this.specialsForm = $(parent).find('form');
}

TargetDiv.prototype.createTargetDiv = function(){
  this.targetDivCreated = $('<div class="target"></div>').insertAfter(this.specialsForm);
};

//SpecialsForm class
function SpecialForm(formSelector, targetDiv){
  this.form = formSelector;
  this.$selectElement = $(this.form).find('select');
  this.targetDiv = targetDiv;
}

SpecialForm.prototype.init = function(){
  this.$selectElement.change(this.selectHandler());
  this.removeSubmitBtn();
};

SpecialForm.prototype.removeSubmitBtn = function(){
  $(this.form).find('.buttons').remove();
};

SpecialForm.prototype.selectHandler = function(){
  var that = this;

  return function(eventObj){
    var selectedVal = $(this).val();
    that.lookForInfo(selectedVal);
  };
};

SpecialForm.prototype.lookForInfo = function(selectedVal){
  var that = this;

  $.ajax({
    url : "data/specials.json",
    type : 'GET' ,
    dataType : 'json', 

  }).done(function(jsonResponse){
    that.updateTargetDiv(jsonResponse[selectedVal]);

  }).fail(function( xhr, status, errorThrown ) {
    alert("Sorry, there was a problem!");
    console.log("Error: " + errorThrown);
    console.log("Status: " + status);
    console.log(xhr);
  });
};

SpecialForm.prototype.updateTargetDiv = function(jsonDayInfo){
  this.targetDiv.addClass('special');
  
  if(!jsonDayInfo){
    this.clearTargetDiv();
    this.targetDiv.removeClass('special');
  }
  else{
    console.log(jsonDayInfo);
    var fontColor = jsonDayInfo['color'];
    this.clearTargetDiv();
    this.assignFontColor(fontColor);
    this.addTitle(jsonDayInfo['title']);
    this.addText(jsonDayInfo['text']);
    this.addImg(jsonDayInfo['image']);
  }
};

SpecialForm.prototype.clearTargetDiv = function(){
  $(this.targetDiv).empty();
};

SpecialForm.prototype.assignFontColor = function(fontColor){
  this.targetDiv.css('color', fontColor)
};

SpecialForm.prototype.addTitle = function(title){
  $('<h2>' + title + '</h2>').appendTo(this.targetDiv);
};

SpecialForm.prototype.addText = function(text){
  $('<h3>' + text + '</h3>').appendTo(this.targetDiv);
};

SpecialForm.prototype.addImg = function(imgSrc){
  $('<img src='+ imgSrc.slice(1) + '></img>').appendTo(this.targetDiv);
};

$(document).ready(function(){
  var targetDiv = new TargetDiv('#specials');
  targetDiv.createTargetDiv();

  var specialForm = new SpecialForm('#specials', targetDiv.targetDivCreated); 
  specialForm.init();
});