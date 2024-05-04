// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var selector = document.getElementById('horn-select');
  var audio = document.querySelector('audio');

  selector.addEventListener('change', function(){
      var selectedHorn = selector.value; 
      var image = document.querySelector('img');

      image.src = 'assets/images/' + selectedHorn + '.svg';
      audio.src = 'assets/audio/' + selectedHorn + '.mp3';
  });

  var button = document.querySelector('button');
  
  button.addEventListener('click', function(){
      audio.play();
  });
}