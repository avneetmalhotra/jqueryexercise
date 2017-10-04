$(document).ready(function(){
  var targetDiv = new TargetDiv('#specials');
  targetDiv.createTargetDiv();

  var specialForm = new SpecialForm('#specials', targetDiv.$targetDivCreated); 
  specialForm.init();
});
