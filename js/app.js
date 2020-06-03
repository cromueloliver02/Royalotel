$(document).ready(function () {
   // get year for the copyright year
   $('#year').text(new Date().getFullYear());

   // configure superslides
   $('#slides').superslides({
      play: 10000,
      animation: 'fade',
      pagination: false
   });
   $('#about-slides').superslides({
      play: 5000,
      animation: 'slide',
      pagination: true
   });

   // CHANGES NAVBAR WHEN SCROLL
   window.addEventListener('scroll', function () {
      if (this.scrollY < 100) {
         document.querySelector('#main-nav').classList.remove('bg-dark');
         document.querySelector('#main-nav').classList.remove('navbar-shadow');
         document.querySelector('#main-nav').classList.remove('navbar-border');
      } else if (this.scrollY >= 100 && this.scrollY < window.innerHeight - 62) {
         document.querySelector('#main-nav').classList.remove('bg-dark');
         document.querySelector('#main-nav').classList.add('navbar-shadow');
         document.querySelector('#main-nav').classList.remove('navbar-border');
      } else if (this.scrollY >= window.innerHeight - 62) {
         document.querySelector('#main-nav').classList.add('bg-dark');
         document.querySelector('#main-nav').classList.remove('navbar-shadow');
         document.querySelector('#main-nav').classList.add('navbar-border');
      }
   });

   /* SMOOTH SCROLLING */
   $('#main-nav a, .btn').on('click', function (event) {
      if (this.hash !== '') {
         event.preventDefault();

         const hash = this.hash;

         $('html, body').animate(
            {
               scrollTop: $(hash).offset().top - 67
            },
            800
         );
      }
   });

   new Glider(document.querySelector('.glider'), {
      slidesToShow: 3.4,
      slidesToScroll: 1,
      arrows: {
         prev: '.glider-prev',
         next: '.glider-next'
      },
      dots: '.dots',
      draggable: true

   })

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
});