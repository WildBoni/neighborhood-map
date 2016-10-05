var count = [1,1];
var img = document.getElementsByClassName('image');
var counter = document.getElementsByClassName('counter');

function countIt(val) {
  count[val] = count[val]+1;
  counter[val].innerHTML = count[val];
}

for (var i = 0; i < img.length; i++){
  (function(i) {
    img[i].addEventListener("click", function(){
      countIt(i);
    },false);
  }(i));
}
