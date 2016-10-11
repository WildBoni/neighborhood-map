var ViewModel = function(){
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.imgAttribution = ko.observable('http://www.google.it');

  this.incrementCounter = function() {
    this.clickCount(this.clickCount()+1);
  };
  this.level = ko.computed(function() {
    if(this.clickCount() > 10) {
      return 'adult';
    }
    else if(this.clickCount() > 5) {
      return 'young';
    }
    else return 'newborn';
  }, this);
  this.newborn = ko.computed(function(){
    return this.clickCount() >= 0;
  }, this);

  this.young = ko.computed(function(){
    return this.clickCount() >= 4;
  }, this);

  this.adult = ko.computed(function(){
    return this.clickCount() >= 8;
  }, this);


  this.nicknames = ko.observableArray(["fluffy", "Paw", "flurry"]);

};

ko.applyBindings(new ViewModel());
