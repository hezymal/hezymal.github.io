exports = module.exports = ['$scope', 'Carousel', function ($scope, Carousel) {
  this.fade = {
    slides: [
      'http://placekitten.com/300/200',
      'http://placekitten.com/301/200',
      'http://placekitten.com/303/200'
    ],
    source: '<ui-carousel slides="ctrl.single.slides" dots="true">\n' +
            '  <carousel-item>\n' +
            '    <h3>{{ item + 1 }}</h3>\n' +
            '  </carousel-item>\n' +
            '</ui-carousel><Paste>'
  }
}];