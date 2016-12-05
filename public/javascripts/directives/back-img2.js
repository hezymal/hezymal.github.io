exports = module.exports = [function(){
  return function(scope, element, attrs){
    var size = attrs.size;
    attrs.$observe('backImg2', function(value) {
      element.css({
        'background': '-webkit-linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url("' + value +'")',
        'background': '-moz-linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url("' + value +'")',
        'background': '-o-linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url("' + value +'")',
        'background': 'linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url("' + value +'")',
        'background-repeat' : 'no-repeat',
        'background-size' : (size || 'cover'),
        'background-position' : 'center center'
      });
    });
  };
}];