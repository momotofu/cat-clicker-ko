async function getData() {
  return await $.getJSON('/cats')
}

getData().then(initialCats => {
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

    this.catList = ko.observableArray([])

    initialCats.forEach((catData) => {
      self.catList.push(new CatModel(catData))
    })

    this.currentCat = ko.observable(this.catList()[0])
    this.catSelected = function(clickedCat) {
      self.currentCat(clickedCat)
    }

    this.wasClicked = function() {
      const cur = self.currentCat().clickCount() + 1
      self.currentCat().clickCount(cur)
    }
  }

  ko.applyBindings(new ViewModel)

}).catch(err => {
  console.log('error: ', err)
})

