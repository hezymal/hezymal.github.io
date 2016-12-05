exports = module.exports = [function(){
  return function(scope, element, attrs){
    var size = attrs.size;
    attrs.$observe('backImg', function(value) {
      element.css({
        'background': 'url("' + value +'")',
        'background-repeat' : 'no-repeat',
        'background-size' : (size || 'cover'),
        'background-position' : 'center center'
      });
    });
  };
}];