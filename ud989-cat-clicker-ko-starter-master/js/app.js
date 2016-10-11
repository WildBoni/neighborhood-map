var initialCats = [
  {
    name: "Paw",
    imgSrc: "img/22252709_010df3379e_z.jpg",
    imgAttribution: "credit1",
    clickCount: 0,
    nicknames: ["Fluffy2", "Paw2", "Kitty2"]
  },
  {
    name: "Pew",
    imgSrc: "img/434164568_fea0ad4013_z.jpg",
    imgAttribution: "credit2",
    clickCount: 0,
    nicknames: ["aFluffy", "aPaw", "aKitty"]
  },
  {
    name: "Pow",
    imgSrc: "img/1413379559_412a540d29_z.jpg",
    imgAttribution: "credit3",
    clickCount: 0,
    nicknames: ["FlDuffy", "PaDw", "KiDtty"]
  },
  {
    name: "Piw",
    imgSrc: "img/4154543904_6e2428c421_z.jpg",
    imgAttribution: "credit4",
    clickCount: 0,
    nicknames: ["FluffyDSASA"]
  },
  {
    name: "Puw",
    imgSrc: "img/9648464288_2516b35537_z.jpg",
    imgAttribution: "credit5",
    clickCount: 0,
    nicknames: ["Fluffy", "Paw", "Kitty"]
  }
];


var Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.nicknames = ko.observableArray(data.nicknames);

  this.level = ko.computed(function() {
    if(this.clickCount() > 10) {
      return 'adult';
    }
    else if(this.clickCount() > 5) {
      return 'young';
    }
    else return 'newborn';
  }, this);

};

var ViewModel = function() {
  var self = this;

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem) {
    self.catList.push( new Cat(catItem) );
  });

  this.currentCat = ko.observable( this.catList()[0] );

  this.incrementCounter = function() {
    this.clickCount(this.clickCount()+1);
  };

  this.catSelect = function(cat){
    self.currentCat(cat);
  };
};

ko.applyBindings(new ViewModel());
