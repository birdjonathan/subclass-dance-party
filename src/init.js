$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);

    for (var od=0; od < window.dancers.length; od++) {
      var otherDancer = window.dancers[od];
      if (dancer.distance(otherDancer) < 400) {
       console.log("TOO DAMN CLOSE!!!");
        $('.pirate').toggle("shake");
        $('.katanaGuy').toggle("fade");
        $('.redGuy').toggle("highlight");
        $('.kungFuPanda').toggle("slide");
      // this.$node.find('img').attr('src', this.currImg).toggle("explode");
        // $('.pirate').toggle("explode");

      }
    }

    window.dancers.push(dancer);
  });

  $(".lineupButton").on("click", function() {
    //console.log("Time to line up");
    for (var i=0; i < window.dancers.length; i++) {
      var currDancer = window.dancers[i];
      currDancer.lineup();
      //console.log(currDancer);
    }
  });
});

