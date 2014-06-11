var RedGuy = function(top, left, timeBetweenSteps, imageQueue){
  Dancer.call(this, top, left, timeBetweenSteps, imageQueue);
  this.$node = $('<span class="redGuy"><img /></span>');
  this.$node.find('img').attr('src', this.currImg);
  var dancer = this;
  this.$node.on('mouseover', function() {
    console.dir(this);
    dancer.rotateImgQueue();
    $(this).find('img').attr('src', dancer.currImg);
  });
};
RedGuy.prototype = Object.create(Dancer.prototype);
RedGuy.prototype.constructor = RedGuy;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
RedGuy.prototype.oldStep = Dancer.prototype.step;

RedGuy.prototype.step = function(){
  var that = this;
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // that.$node.toggle();

};

var makeRedGuy = function(top, left, timeBetweenSteps) {
  var images = ["gifs/redGuy1.gif","gifs/redGuy2.gif","gifs/redGuy3.gif"];
  var dancer = new KatanaGuy(top, left, timeBetweenSteps, images);
  dancer.step();
  dancer.setPosition(top, left);
  return dancer;
};
