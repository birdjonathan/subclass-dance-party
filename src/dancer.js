// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps, imageQueue){
  this.top = top;
  this.left = left;
  this._timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this._images = imageQueue || [];
  this.currImg = undefined;
  if (this._images) {
    this.rotateImgQueue();
  }
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var that = this;
   setTimeout(function() {
    that.step()}, that._timeBetweenSteps);

};
Dancer.prototype.step.callCount = 0;

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};

Dancer.prototype.distance = function(otherDancer) {
  var topDiff = this.top - otherDancer.top;
  var leftDiff = this.left - otherDancer.left;
  return Math.sqrt(Math.pow(topDiff, 2) + Math.pow(leftDiff, 2));
};

Dancer.prototype.lineup = function(top, left){
  this.setPosition(this.top, 30);
}

Dancer.prototype.rotateImgQueue = function() {
  if (this._images.length > 1) {
    this.currImg = this._images.shift();
    this._images.push(this.currImg);
  }
}

var makeDancer = function(top, left, timeBetweenSteps) {
  var dancer = new Dancer(top, left, timeBetweenSteps);
  dancer.step();
  dancer.setPosition(top, left);
  return dancer;
};

