$(document).ready(function () {
   // get year for the copyright year
   $('#year').text(new Date().getFullYear());

   const hamburgerBtn = document.querySelector('.navbar-toggler');
   hamburgerBtn.addEventListener('click', function (e) {
      // console.log(e.target);
      if (e.target.classList.contains('navbar-toggler') || e.target.parentElement.classList.contains('navbar-toggler')) {
         if (scrollY < window.innerHeight) {
            document.querySelector('#main-nav').classList.toggle('navbar-border');
            document.querySelector('#main-nav').classList.toggle('bg-dark');
         }
      }
   });
   // window.addEventListener('scroll', function () {
   //    hamburgerBtn.addEventListener('click', function(e) {
   //       if(e.target.classList.contains('navbar-toggler'))
   //    });
   //    .querySelector('.navbar-toggler').addEventListener('click', function () {
   //       // document.querySelector('#main-nav').classList.toggle('bg-dark');
   //       // if (!document.querySelector('#main-nav').classList.contains('navbar-shadow')) {
   //       //    document.querySelector('#main-nav').classList.toggle('navbar-shadow');
   //       // }
   //       if (this.scrollY < window.innerHeight) {
   //          document.querySelector('#main-nav').classList.toggle('navbar-border');
   //       }
   //    });
   // });

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
   function collapseNavbar() {
      // if (document.querySelector('#navbar-menu').classList.contains('collapse')) {
      document.querySelector('#navbar-menu').classList.toggle('collapse');
      // }
      // console.log('scroll');
   }
   window.addEventListener('scroll', function () {
      // collapseNavbar();
      if (this.scrollY < 100) {
         transparentNavbar();
      } else if (this.scrollY >= 100 && this.scrollY < window.innerHeight - 62) {
         darkOverlayNavbar();
      } else if (this.scrollY >= window.innerHeight - 62) {
         solidNavbar();
      }
   });

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

   new Glider(document.querySelector('.glider'), {
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