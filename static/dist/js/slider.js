//   (function(){
//   // setup your carousels as you normally would using JS
//   // or via data attributes according to the documentation
//   // https://getbootstrap.com/javascript/#carousel
//   $('#carousel123').carousel({ interval: 2000 });
//   $('#carouselABC').carousel({ interval: 3600 });
// }());

// (function(){
//   $('.carousel-showmanymoveone .item').each(function(){
//     var itemToClone = $(this);

//     for (var i=1;i<4;i++) {
//       itemToClone = itemToClone.next();

//       // wrap around if at end of item collection
//       if (!itemToClone.length) {
//         itemToClone = $(this).siblings(':first');
//       }

//       // grab item, clone, add marker class, add to collection
//       itemToClone.children(':first-child').clone()
//         .addClass("cloneditem-"+(i))
//         .appendTo($(this));
//     }
//   });
// }());

  $('#myCarousel').carousel({
  interval: 4000
})

$('.carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  for (var i=0;i<3;i++) {
    next=next.next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    
    next.children(':first-child').clone().appendTo($(this));
  }
});