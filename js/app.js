const Model = function() {
  // attributes
  this.name = ko.observable('TigerLily');
  this.url = ko.observable('https://images.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-ZHnphGtqBVI%2FTfryjXblbSI%2FAAAAAAAAEO4%2FXJb3DAuE94U%2Fs1600%2Fcat4.jpg&f=1');
  this.clickCount = ko.observable(0);
  this.cats = ko.observableArray([
    {name: 'TigerLily'},
    {name: 'Jessie'},
    {name: 'Juniper'},
    {name: 'Crisper'},
    {name: 'Krew'}
  ])

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
  this.wasClicked = function() {
    const cur = this.clickCount() + 1
    this.clickCount(cur)
  }
}

ko.applyBindings(new Model)

