var Pirate = function(top, left, timeBetweenSteps, imageQueue){
  Dancer.call(this, top, left, timeBetweenSteps, imageQueue);
  this.$node = $('<span class="pirate"><img /></span>');
  this.$node.find('img').attr('src', this.currImg);
  var dancer = this;
  this.$node.on('mouseover', function() {
    console.dir(this);
    dancer.rotateImgQueue();
    $(this).find('img').attr('src', dancer.currImg);
  });
};
Pirate.prototype = Object.create(Dancer.prototype);
Pirate.prototype.constructor = Pirate;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
Pirate.prototype.oldStep = Dancer.prototype.step;

Pirate.prototype.step = function(){
  var that = this;
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // that.$node.toggle();

};

var makePirate = function(top, left, timeBetweenSteps) {
  var images = ["gifs/pirate1.gif","gifs/pirate2.gif", "gifs/pirate3.gif"];
  var dancer = new Pirate(top, left, timeBetweenSteps, images);
  dancer.step();
  dancer.setPosition(top, left);
  return dancer;
};