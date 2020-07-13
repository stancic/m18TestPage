$(document).ready(function(){
    $('body').css('display', 'none');
    $('body').fadeIn(1000); 
    $('#navigation').hide();
    $('.show').click(function(){
        $(this).hide();
        $('#navigation').slideDown(1000);
    });
      $('.showup').click(function(){
        $('#navigation').slideUp(1000);
        $('.show').delay(1000).fadeIn();
    });
    $('.wrapper').backstretch([
        'img/background/bg1.jpg',
        'img/background/bg2.jpg',
        'img/background/bg3.jpg',
        'img/background/bg4.jpg',
        'img/background/bg5.jpg'
    ],{
        fade: 3000,
        duration: 4000
    });

});