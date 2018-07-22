//  var slides = document.querySelectorAll(".slide");

// function eachFunc(array, fn){
//   for(var i = 0; i < array.length; i++){
//     fn.call(array[i]);
//   }
// }

// function eachSiblings(node, fnprev, fnafter){
//   console.log("Ejecutando la funcion eachSiblings()");
//   var foundIndex = findNodeIndex(node);
//   console.log("indice encontrado", foundIndex);
//   for(var i = 0; i < node.parentNode.children.length; i++){
//     if(node.parentNode.children[i] != node){
//       if(i < foundIndex){
//         fnprev.call(node.parentNode.children[i], foundIndex);
//       } else {
//         fnafter.call(node.parentNode.children[i], foundIndex);
//       }
//     }
//   }
// }

// function findNodeIndex(node){
//   console.log("Ejecutando la funcion findNodeIndex()");
//   if(node != undefined){ // Si el nodo es diferente de undefined
//     console.log("Nodo definido");
//     console.log("Numero de nodos en los que se buscara", node.parentNode.children.length);
//     for(var i = 0; i < node.parentNode.children.length; i++){
//       console.log("Iterando nodo practicamente hermano", i);
//       if(node === node.parentNode.children[i]){ // Si el nodo parametro es igual a el nodo encontrado como hijo
//         console.log("Encontrado", i);
//         return i;
//       }
//     }
//   } else {
//     console.log("Nodo -- undefined --");
//   }
// }

// function siblings(node){
//   var siblings = [];
//   for(var i = 0; i < node.parentNode.children; i++){
//     if(node.parentNode.children[i] == node){
//       siblings.push(node.parentNode.children[i]);
//     }
//   }
//   return siblings;
// }

// eachFunc(slides, function(){
//   this.addEventListener("mouseover", function(){
//     var layerHover = this.querySelector(".onhover");
//     layerHover.style.width = "135%";
//     eachSiblings(this, function(x){ // Before Siblings
//       if((x + 1) % 6 == 0){ // Si el indice del slide (zoomeable) + 1,  es multiplo de 6
//         // Que Todos los nodos hermanos previos se desplazen 36% hacia la izquierda
//         this.style.transform = "translateX(-36%)";
//       } else {
//         if(x % 6 != 0){ // Si el indice del slide (zoomeable),  no es multiplo de 6
//           // Que todos los nodos hermanos previos se desplazen 18% hacia la izquierda
//           this.style.transform = "translateX(-18%)";
//         }
//       }
//     }, function(x){ // After Siblings
//       if(x % 6 == 0){ // Si el indice del slide (zoomeable),  es multiplo de 6
//         // Que todos los nodos hermanos siguientes se desplazen 36% hacia la derecha
//         this.style.transform = "translateX(36%)";
//       } else {
//         if((x + 1) % 6 != 0){ // Si el indice del slide (zoomeable) + 1,  es multiplo de 6
//           // Que todos los nodos hermanos siguientes se desplazen 18% hacia la derecha
//           this.style.transform = "translateX(18%)";
//         }
//       }
//     });
//   }, false);
//   this.addEventListener("mouseleave", function(){
//     var layerHover = this.querySelector(".onhover");
//     layerHover.style.width = "";
//     eachSiblings(this, function(){
//       this.style.transform = "";
//     }, function(){
//       this.style.transform = "";
//     });
//   }, false);
// });
// // Pagination
// var sliderContent = document.querySelector(".slider-content");
// var prev = document.querySelector(".prev"),
//     next = document.querySelector(".next");
// var pos = 0;
// next.addEventListener("click", function(){
//   if(pos < Math.ceil(slides.length/6) - 1){
//     pos++;
//     console.log(pos);
//     sliderContent.style.transform = "translateX(-"+(pos*100)+"%)";
//   }
// });

// prev.addEventListener("click", function(){
//   if(pos > 0){
//     pos--;
//     console.log(pos);
//     sliderContent.style.transform = "translateX(-"+(pos*100)+"%)";
//   }
// });



//ebooks

$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

//newspapers carosel
const carousel = options => {
  const _carousel = {
    paused: false,

    stopped: false,

    options: {
      speed: 3000,
      acceleration: 5,
      reverse: false,
      selector: ".c-carousel",
      slidesSelector: ".c-carousel__slides",
      leftArrowSelector: ".c-carousel__arrow--left",
      rightArrowSelector: ".c-carousel__arrow--right"
    },

    init(options = {}) {
      // Copy options to this.options
      for (let prop in options) {
        if (!options.hasOwnProperty(prop)) break;
        this.options[prop] = options[prop];
      }

      // Cache nodes
      const carousel = document.querySelector(
        options.selector || this.options.selector
      );
      const slides = (this._slides = carousel.querySelector(
        this.options.slidesSelector
      ));
      this._leftArrow = carousel.querySelector(this.options.leftArrowSelector);
      this._rightArrow = carousel.querySelector(
        this.options.rightArrowSelector
      );

      // Multiply speed value by the number of slides
      this.options.speed = this.options.speed * slides.children.length;

      // Set slides container width
      this.width = slides.offsetWidth;

      // Repeat elements
      slides.innerHTML = slides.innerHTML + slides.innerHTML + slides.innerHTML;

      this._registerEvents();
      this._animate();
    },

    _registerEvents() {
      const speed = this.options.speed;
      const reverse = this.options.reverse;

      this._rightArrow.addEventListener("mouseover", () => {
        this.options.speed = speed / this.options.acceleration;
        this.options.reverse = false;
      });
      this._rightArrow.addEventListener("mouseleave", () => {
        this.options.speed = speed;
        this.options.reverse = reverse;
      });
      this._leftArrow.addEventListener("mouseover", () => {
        this.options.speed = speed / this.options.acceleration;
        this.options.reverse = true;
      });
      this._leftArrow.addEventListener("mouseleave", () => {
        this.options.speed = speed;
        this.options.reverse = reverse;
      });

      // Pause when cursor is over carousel
      this._slides.addEventListener("mouseover", this.pause.bind(this));
      this._slides.addEventListener("mouseleave", this.start.bind(this));

      // Pause when cursor is over carousel
      window.addEventListener("resize", () => {
        this.width = this._slides.offsetWidth;
      });
    },

    pause() {
      this.paused = true;
    },

    start() {
      this.paused = false;
    },

    stop() {
      this.stopped = true;
    },

    _animate() {
      const slides = this._slides;
      const oneThird =
        slides.lastElementChild.getBoundingClientRect().right / 3;
      let framesCount = 0;
      let step = 0;
      let posX = 0;

      const animate = () => {
        if (!this.paused) {
          framesCount = this.options.speed * 60 / 1000;
          step = oneThird / framesCount;

          posX += this.options.reverse ? step : -step;

          slides.style.transform = `translateX(${posX}px)`;

          if (this.options.reverse) {
            if (posX >= this.width - oneThird) {
              posX = this.width - oneThird * 2;
            }
          } else {
            if (Math.abs(posX) >= oneThird * 2) {
              posX = -oneThird;
            }
          }
        }
        !this.stopped && requestAnimationFrame(animate);
      };
      animate();
    }
  };

  _carousel.init(options);

  return _carousel;
};

window.onload = () =>
  carousel({
    selector: ".c-carousel"
  });



//enquiry form

function open_panel()
{
slideIt();
var a=document.getElementById("sidebar_f");
a.setAttribute("id","sidebar1_f");
a.setAttribute("onclick","close_panel()");
}

function slideIt()
{
  var slidingDiv = document.getElementById("slider_f");
  var stopPosition = 0;
  
  if (parseInt(slidingDiv.style.right) < stopPosition )
  {
    slidingDiv.style.right = parseInt(slidingDiv.style.right) + 4 + "px";
    setTimeout(slideIt,4);  
  }
}
  
function close_panel(){
slideIn();
a=document.getElementById("sidebar1_f");
a.setAttribute("id","sidebar_f");
a.setAttribute("onclick","open_panel()");
}

function slideIn()
{
  var slidingDiv = document.getElementById("slider_f");
  var stopPosition = -342;
  
  if (parseInt(slidingDiv.style.right) > stopPosition )
  {
    slidingDiv.style.right = parseInt(slidingDiv.style.right) -6 + "px";
    setTimeout(slideIn,4);  
  }
}


//videos

var Site;

(function ($) {
  'use strict'; 
  
  Site = {
    /**
     * Tabs for each product on tactile device
     *
     */
    init: function (elt) {

      this.videoEmbedOnClick();
      
    },
    videoEmbedOnClick: function(){
      // click to show video
      var videoCode = $('.videoEmbed .videoWrapper').html();
      var videoIsPlaying = false;

      // empty video player
      $('.videoEmbed .videoWrapper').html('');

      $('.videoCTA').on('click', function(e){
        e.stopPropagation();

        if(!videoIsPlaying) {
          $(this).parent().find('.videoWrapper').html(videoCode);
          $(this).parent().find('.video-player').show();
          $(this).hide();
          videoIsPlaying = true;
        }
      });

      // click outside of the video id needed
      $('body').on('click', function(e){
        e.stopPropagation();

        if(videoIsPlaying) {
          $('.videoWrapper').html('');
          $('.video-player').hide();
          $('.videoCTA').show();
          videoIsPlaying = false;
        }
      });
    }
  };

  // call init function
  window.onload = function(){ Site.init(); }

})(jQuery);
