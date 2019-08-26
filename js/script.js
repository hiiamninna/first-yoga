$(".klik-nav").click(function() {
    var a = $(this).attr('href')
    $('html, body').animate({
        scrollTop: $(a).offset().top
    }, 2000);
});

$('.grid').packery({
    percentPosition: true
})

$('#regis-fab').on('click', function(){
    $('#regis-modal').modal('show')
});

$('#regis-button').on('click', function(){
    $('#regis-modal').modal('hide')
    $('#success-modal').modal('show')
});