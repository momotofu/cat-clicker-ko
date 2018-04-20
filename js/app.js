const ko = require('knockout')

const CatModel = function(data) {
  // attributes
  this.name = ko.observable(data.name);
  this.url = ko.observable(data.url);
  this.clickCount = ko.observable(data.clickCount);
  this.nickNames = ko.observableArray(data.nickNames)

  // bindings
  this.level = ko.computed(function() {
    const cur = this.clickCount()

     if (cur > 80) {
      return 'ancient'
    } else if (cur > 60) {
      return 'adult'
    } else if (cur > 30) {
      return 'teen'
    } else if (cur > 20) {
      return 'kitten'
    } else {
      return 'infant'
    }
  }, this)

}

const ViewModel = function() {
  const self = this

  this.currentCat = ko.observable( new CatModel({
    name: 'TigerLily',
    url: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-ZHnphGtqBVI%2FTfryjXblbSI%2FAAAAAAAAEO4%2FXJb3DAuE94U%2Fs1600%2Fcat4.jpg&f=1',
    clickCount: 0,
    nickNames: [
      {name: 'TigerLily'},
      {name: 'Jessie'},
      {name: 'Juniper'},
      {name: 'Crisper'},
      {name: 'Krew'}
    ]
  }))

  this.wasClicked = function() {
    const cur = self.currentCat().clickCount() + 1
    self.currentCat().clickCount(cur)
  }
}

ko.applyBindings(new ViewModel)

