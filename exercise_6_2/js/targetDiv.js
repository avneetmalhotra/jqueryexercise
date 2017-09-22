//TargetDiv class
function TargetDiv(parentSelector){
  this.parentSelector = parentSelector;
  this.specialsForm = $(parentSelector).find('form');
}

TargetDiv.prototype.createTargetDiv = function(){
  this.$targetDivCreated = $('<div class="target"></div>').insertAfter(this.specialsForm);
};
