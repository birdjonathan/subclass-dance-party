var KungFuPanda = function(top, left, timeBetweenSteps, imageQueue){
  Dancer.call(this, top, left, timeBetweenSteps, imageQueue);
  this.$node = $('<span class="kungFuPanda"><img /></span>');
  this.$node.find('img').attr('src', this.currImg);
  var dancer = this;
  this.$node.on('mouseover', function() {
    console.dir(this);
    dancer.rotateImgQueue();
    $(this).find('img').attr('src', dancer.currImg);
  });
};
KungFuPanda.prototype = Object.create(Dancer.prototype);
KungFuPanda.prototype.constructor = KungFuPanda;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
KungFuPanda.prototype.oldStep = Dancer.prototype.step;

KungFuPanda.prototype.step = function(){
  var that = this;
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // that.$node.toggle();

};

var makeKungFuPanda = function(top, left, timeBetweenSteps) {
  var images = ["gifs/kungFuPanda2.jpg","gifs/kungFuPanda3.gif"];
  var dancer = new KungFuPanda(top, left, timeBetweenSteps, images);
  dancer.step();
  dancer.setPosition(top, left);
  return dancer;
};