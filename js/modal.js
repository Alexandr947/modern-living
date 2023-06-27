$(function () {
    $('#db-button').click(function () {
      $('.modal').addClass('modal_active');
    });
   
    $('.modal__close-button').click(function () {
      $('.modal').removeClass('modal_active');
      $('.modal-button').html('Send Message');

    });

    $('.modal-button').click(function () {
        $('.modal-button').html('---Sucsess!---');
      });


  });