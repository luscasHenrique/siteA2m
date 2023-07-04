
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);


// Função para animar o contador
function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-target'));
  const duration = 2000; // Duração da animação em milissegundos
  const stepSize = Math.ceil(target / (duration / 10)); // Tamanho do incremento a cada passo da animação

  let count = 0;

  // Função recursiva para atualizar o valor do contador
  function incrementCounter() {
      count += stepSize;

      if (count >= target) {
          element.innerText = target;
      } else {
          element.innerText = count;
          setTimeout(incrementCounter, 10);
      }
  }

  incrementCounter();
}

// Função para iniciar a animação dos contadores quando eles estão visíveis na tela
function startCounters() {
  const counters = document.querySelectorAll('.counter');

  counters.forEach(counter => {
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  animateCounter(entry.target);
                  observer.unobserve(entry.target);
              }
          });
      });

      observer.observe(counter);
  });
}

// Chamada da função para iniciar a animação dos contadores quando a página é carregada
window.addEventListener('load', startCounters);

