$(document).ready(function(){
    AOS.init();
    $('body').css('display', 'none');
    $('body').slideDown(1000); 
    $('#navigation').hide();
    $('.show').click(function(){
        $(this).hide();
        $('#navigation').slideDown(1000);
    });
      $('.showup').click(function(){
        $('#navigation').slideUp(1000);
        $('.show').delay(1000).fadeIn();
    });
  
});