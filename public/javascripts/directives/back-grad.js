exports = module.exports = [function(){
  return function(scope, element, attrs){
    var size = attrs.size;
    attrs.$observe('backGrad', function(value) {
      element.css({
        'background': '-webkit-linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url("' + value +'")',
        'background': '-moz-linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url("' + value +'")',
        'background': '-o-linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url("' + value +'")',
        'background': 'linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url("' + value +'")',
        'background-repeat' : 'no-repeat',
        'background-size' : (size || 'cover'),
        'background-position' : 'center center'
      });
    });
  };
}];