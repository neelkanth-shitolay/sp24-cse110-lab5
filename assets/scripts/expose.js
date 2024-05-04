// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var selector = document.getElementById('horn-select');
  
  selector.addEventListener('change', function(){
      var selectedHorn = selector.value;
      var image = document.querySelector('img');
      image.src = 'assets/images/' + selectedHorn + '.svg';
  });
}