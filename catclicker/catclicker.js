var model = {
  items: [
    {
      title: "Paw",
      image: "img/cat1.jpg",
      counter: 0
    },
    {
      title: "Pew",
      image: "img/cat2.jpg",
      counter: 0
    },
    {
      title: "Pow",
      image: "img/cat3.jpg",
      counter: 0
    }
  ]
};

/*var controller = {

};

var view = {
  list: {
    title: ""
  },
  detail: {
    title: "",
    image: "",
    counter: 1
  }
};*/

// Initialise starting item


// Create list view
model.display = function() {
  if(model.items.length > 0) {
    model.items.forEach(function(item) {
      var x = document.createElement("a");
      x.id = model.items.indexOf(item);
      var t = document.createTextNode((item).title);
      x.appendChild(t);
      document.getElementById("elenco").appendChild(x);
      document.getElementById(x.id).onclick = function() {
        viewIt(x.id);
      };
    });
  }
};
model.display();

// Selected item view
function viewIt(idtag) {
  document.getElementById('title').innerHTML=(model.items[idtag].title);
  document.getElementById('viewer').innerHTML="<img id='foto' src='"+model.items[idtag].image+"' />";
  document.getElementById('counter').innerHTML=(model.items[idtag].counter);
  this.catCount = model.items[idtag].counter;
  this.catNum = idtag;
  clickIt(this.catCount, this.catNum);
}

// Enable click on image
function clickIt(countVal, catVal){
  document.getElementById('foto').addEventListener("click", function(){
    this.tval = countVal+1;
    model.items[catVal].counter = this.tval;
    document.getElementById('counter').innerHTML = this.tval;
  },false);
}

// Update the click count
/*function countIt(val) {
  tval = val+1;
  model.items[val].counter = tval;
  document.getElementById('counter').innerHTML = tval;
}*/
