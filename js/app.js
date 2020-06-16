// window.onload(function () {

// });

$(document).ready(function () {
   // loader
   // setTimeout(() => {
   //    document.querySelector('.loader').classList.add('loader-fade');
   // }, 1000);
   setTimeout(() => {
      document.querySelector('.loader').classList.add('loader-fade');

      setTimeout(() => {
         document.querySelector('.loader').classList.add('d-none');
      }, 500);
   }, 2000);

   // get year for the copyright year
   $('#year').text(new Date().getFullYear());

   // configure superslides
   $('#slides').superslides({
      play: 10000,
      animation: 'fade',
      pagination: false
   });
   $('#about-slides').superslides({
      play: 8000,
      animation: 'slide',
      pagination: true,
      animation_speed: 'slow',
      inherit_height_from: '#about-slides'
   });

   // CHANGES NAVBAR WHEN SCROLL
   function transparentNavbar() {
      document.querySelector('#main-nav').classList.remove('bg-dark');
      document.querySelector('#main-nav').classList.remove('navbar-shadow');
      document.querySelector('#main-nav').classList.remove('navbar-border');
   }
   function darkOverlayNavbar() {
      document.querySelector('#main-nav').classList.remove('bg-dark');
      document.querySelector('#main-nav').classList.add('navbar-shadow');
      document.querySelector('#main-nav').classList.remove('navbar-border');
   }
   function solidNavbar() {
      document.querySelector('#main-nav').classList.add('bg-dark');
      document.querySelector('#main-nav').classList.remove('navbar-shadow');
      document.querySelector('#main-nav').classList.add('navbar-border');
   }
   const header = document.querySelector('header');
   const navbar = document.querySelector('#main-nav');
   window.addEventListener('scroll', function () {
      if (this.scrollY < 50) {
         transparentNavbar();
      } else if (this.scrollY >= 50 && this.scrollY < header.offsetHeight - navbar.offsetHeight) {
         darkOverlayNavbar();
      } else if (this.scrollY >= header.offsetHeight - navbar.offsetHeight) {
         solidNavbar();
      }
   });

   // change navbar background on hamburger btn click
   const hamburgerBtn = document.querySelector('.navbar-toggler');
   hamburgerBtn.addEventListener('click', function (e) {
      if (e.target.classList.contains('navbar-toggler') || e.target.parentElement.classList.contains('navbar-toggler')) {
         if ($('#main-nav').offset().top < 50) {
            document.querySelector('#main-nav').classList.toggle('bg-dark');
            document.querySelector('#main-nav').classList.toggle('navbar-border');
            document.querySelector('#main-nav').classList.remove('navbar-shadow');
         }
         if ($('#main-nav').offset().top >= 50 && $('#main-nav').offset().top < header.offsetHeight - navbar.offsetHeight) {
            document.querySelector('#main-nav').classList.toggle('bg-dark');
            document.querySelector('#main-nav').classList.toggle('navbar-border');
            document.querySelector('#main-nav').classList.toggle('navbar-shadow');
         }
      }
   });

   // change navbar background on load
   if ($('#main-nav').offset().top < 50) {
      transparentNavbar();
   } else if ($('#main-nav').offset().top >= 50 && $('#main-nav').offset().top < header.offsetHeight - navbar.offsetHeight) {
      darkOverlayNavbar();
   } else if ($('#main-nav').offset().top >= header.offsetHeight - navbar.offsetHeight) {
      solidNavbar();
   }

   /* SMOOTH SCROLLING */
   $('#main-nav a, .btn').on('click', function (event) {
      if (this.hash !== '') {
         event.preventDefault();

         const hash = this.hash;

         $('html, body').animate(
            {
               scrollTop: $(hash).offset().top - 0
            },
            800
         );
      }
   });

   if ($('.glider')[0]) {
      const $glider = new Glider(document.querySelector('.glider'), {
         // Mobile-first defaults
         slidesToShow: 1,
         slidesToScroll: 1,
         scrollLock: true,
         dots: '.dots',
         duration: 1.25,
         arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
         },
         responsive: [
            {
               // screens greater than >= 775px
               breakpoint: 768,
               settings: {
                  // Set to `auto` and provide item width to adjust to viewport
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  itemWidth: 150,
                  duration: 1.25
               }
            }, {
               // screens greater than >= 1024px
               breakpoint: 1024,
               settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  itemWidth: 150,
                  duration: 1.25
               }
            }
         ]
      });
   }

   // lightbox
   $(document).on('click', '[data-toggle="lightbox"]', function (event) {
      event.preventDefault();
      $(this).ekkoLightbox();
   });

   // Video Play
   $(function () {
      // Auto play modal video
      $(".video").click(function () {
         var theModal = $(this).data("target"),
            videoSRC = $(this).attr("data-video"),
            videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
         $(theModal + ' iframe').attr('src', videoSRCauto);
         $(theModal + ' button.close').click(function () {
            $(theModal + ' iframe').attr('src', videoSRC);
         });
      });
   });

   // simple lightbox
   var $gallery = new SimpleLightbox('.room-gallery a', {});
});