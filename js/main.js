$(document).ready(function () {
  const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 3000,
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
  });
  
  let menuButton = document.querySelector(".menu-button")
  menuButton.addEventListener('click', function() {
    document.querySelector('.header-right').classList.toggle('active');
    document.querySelector('.header-menu').classList.toggle('active');
  });
  let modalButton = $('[data-toggle=modal]');
  let closeModalButton = $('.modal-close');

  closeModalButton.on('click', closeModal);
  modalButton.on('click', openModal);

  function openModal(){
    let modalOverlay = $('.modal-overlay');
    let modalDialog = $('.modal-dialog');
    modalOverlay.addClass('modal-overlay-visible')
    modalDialog.addClass('modal-dialog-visible')
  }
  function closeModal(event){
    event.preventDefault();
    let modalOverlay = $('.modal-overlay');
    let modalDialog = $('.modal-dialog');
    modalOverlay.removeClass('modal-overlay-visible')
    modalDialog.removeClass('modal-dialog-visible')
  }


});