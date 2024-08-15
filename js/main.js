// JS navbar
document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.navlinks');

  burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
});


// JS eagle audio
function playAudio() {
  var audio = document.getElementById('myAudio');
  if (audio.paused) { // Verifica se o áudio está pausado
    audio.volume = 0.02; // Define o volume (0.0 a 1.0)
    audio.play().catch(function(error) {
      console.log('Erro ao tentar reproduzir o áudio: ', error);
    });
  }
  // Remove o event listener após a primeira execução
  document.removeEventListener('scroll', playAudio);
  document.removeEventListener('wheel', playAudio);
  document.removeEventListener('touchmove', playAudio);
}

// Adiciona o event listener para o evento de scroll, wheel e touchmove
document.addEventListener('scroll', playAudio);
document.addEventListener('wheel', playAudio);
document.addEventListener('touchmove', playAudio);


// Esconde o navbar
let lastScrollTop = 0;
  const navbar = document.querySelector('.nav');

  window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
      // Rolando para baixo
      navbar.classList.add('hidden');
    } else {
      // Rolando para cima
      navbar.classList.remove('hidden');
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para Mobile ou Navegadores em Scroll para cima
  });

// função clicar na thumb - video
  function showVideo() {
    document.querySelector('.video-thumbnail').style.display = 'none';
    document.querySelector('.video-video').style.display = 'block';
}

// função scroll to top

$(function(){
  $(document).on( 'scroll', function(){
      if ($(window).scrollTop() > 100) {
          $('.smoothscroll-top').addClass('show');
      } else {
          $('.smoothscroll-top').removeClass('show');
      }
  });
  $('.smoothscroll-top').on('click', scrollToTop);
});

function scrollToTop() {
  verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
  element = $('body');
  offset = element.offset();
  offsetTop = offset.top;
  $('html, body').animate({scrollTop: offsetTop}, 600, 'linear').animate({scrollTop:25},200).animate({scrollTop:0},150) .animate({scrollTop:0},50);
}