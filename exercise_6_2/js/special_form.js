//SpecialsForm class
function SpecialForm(formSelector, $targetDiv){
  this.formSelector = formSelector;
  this.$selectElement = $(this.formSelector).find('select');
  this.$targetDiv = $targetDiv;
}

SpecialForm.prototype.init = function(){
  this.getAllDaysInfo();
  this.$selectElement.change(this.displayDayInfo());
  this.removeSubmitBtn();
};

SpecialForm.prototype.removeSubmitBtn = function(){
  $(this.formSelector).find('.input_submit').remove();
};

SpecialForm.prototype.displayDayInfo = function(){
  var _this = this;

  return function(eventObj){
    _this.updateTargetDiv($(this).val());
  };
};

SpecialForm.prototype.getAllDaysInfo = function(){
  var _this = this;

  $.ajax({
    url : "data/specials.json",
    type : 'GET' ,
    dataType : 'json', 

  }).done(function(jsonResponse){
    _this.jsonAllDaysInfo = jsonResponse;

  }).fail(function( xhr, status, errorThrown ) {
    alert("Sorry, there was a problem! Please refresh.");
    console.log("Error: " + errorThrown);
    console.log("Status: " + status);
    console.log(xhr);
  });
};

SpecialForm.prototype.updateTargetDiv = function(selectedDay){
  this.$targetDiv.addClass('special');
  var jsonDayInfo = this.jsonAllDaysInfo[selectedDay];

  if(!jsonDayInfo){
    this.clearTargetDiv();
    this.$targetDiv.removeClass('special');
  }
  else{
    this.clearTargetDiv();
    this.assignFontColor(jsonDayInfo.color);
    this.addTitle(jsonDayInfo.title);
    this.addText(jsonDayInfo.text);
    this.addImg(jsonDayInfo.image);
  }
};

SpecialForm.prototype.clearTargetDiv = function(){
  $(this.$targetDiv).empty();
};

SpecialForm.prototype.assignFontColor = function(fontColor){
  this.$targetDiv.css('color', fontColor);
};

SpecialForm.prototype.addTitle = function(title){
  $('<h2>' + title + '</h2>').appendTo(this.$targetDiv);
};

SpecialForm.prototype.addText = function(text){
  $('<h3>' + text + '</h3>').appendTo(this.$targetDiv);
};

SpecialForm.prototype.addImg = function(imgSrc){
  $('<img src='+ imgSrc.slice(1) + '></img>').appendTo(this.$targetDiv);
};
