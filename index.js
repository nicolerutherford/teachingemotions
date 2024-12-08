var numberOfEmotions = document.querySelectorAll(".emotion").length;

for (var i = 0; i < numberOfEmotions; i++) {
  document.querySelectorAll(".emotion")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  });

}

// detecting keyboard press
document.addEventListener("keypress", function(event){

  makeSound(event.key);

  buttonAnimation(event.key);
});


function makeSound (key) {
  switch (key) {
    case "h":
      case "happy":
        var happy = new Audio('sounds/happy.mp3');
        happy.play();
        break;
        
    case "a":
      case "angry":
        var angry = new Audio('sounds/angry.mp3');
        angry.play();
        break;

    case "s":
      case "sad":
        var sad = new Audio('sounds/sad.mp3');
        sad.play();
        break;

    case "n":
      case "nervous":
        var nervous = new Audio('sounds/nervous.mp3');
        nervous.play();
        break;

    case "e":
      case "excited":
        var excited = new Audio('sounds/excited.mp3');
        excited.play();
        break;

    case "p":
      case "proud":
        var proud = new Audio('sounds/proud.mp3');
        proud.play();
        break;



    default: console.log(buttonInnerHTML);

  }
  }

  function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);

}
