// // function isVisible(elem) {
// //   var coords = elem.getBoundingClientRect();
// //   var windowHeight = document.documentElement.clientHeight;
// //   var topVisible = coords.top > 0 && coords.top < windowHeight;
// //   var bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
// //   return topVisible || bottomVisible;
// // }

// // function showVisible() {
// //   var imgs = document.getElementsByTagName('img');
// //   for (var i = 0; i < imgs.length; i++) {
// //     var img = imgs[i];
// //     var realsrc = img.getAttribute('realsrc');
// //     if (!realsrc) continue;
// //     if (isVisible(img)) {
// //       img.src = realsrc;
// //       img.setAttribute('realsrc', '');
// //     }
// //   }
// // }
// // //- window.onscroll = showVisible;
// // showVisible();

// // pointer-events
// var body = document.body,
//   timer;
// window.addEventListener('scroll', function() {
//   clearTimeout(timer);
//   if(!body.classList.contains('disable-hover')) {
//     body.classList.add('disable-hover')
//   }
//   timer = setTimeout(function(){
//     body.classList.remove('disable-hover')
//   },500);
// }, false);