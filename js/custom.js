$(document).ready(function () {
    // modal
    $('.close-modal a').on('click', function(){
        $('body').css('overflow','auto');
        $('#modal').hide();
        $('#modal .row.modal').removeClass("active").hide();
    });

    $('#menu .category').each(function(){
        $(this).on('click', function(){
            $('body').css('overflow','hidden');
            $('#modal').fadeIn();
            $('#'+$(this).find('a').attr('attr-modal')).addClass("active").show();
        });
    });
    $('.close-modal a').click();

    

    // btn-like
    $('.like').on('click', function() {
        var item = $(this).parent().attr('data-item');
        $('[data-item='+item+']').find('.send-email').fadeIn();
    });
    $('.close').on('click', function() {
        var item = $(this).parent().parent().attr('data-item');
        $('[data-item='+item+']').find('.send-email').fadeOut();
    });

    // framework to start animation css
    wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    });
    wow.init();

    // // FORM
    // // Input mask
    // $("#ddd").mask("(00)");
    // $("#telefone").mask("0000-00009");
    // // Submit form to send the data to email
    // $("#formRegister").submit(function (e) {
    //     e.preventDefault();
    //     if (!validateForm())
    //         return false;

    //     var dataS = {
    //         "nome": $('#nome').val(),
    //         "email": $('#email').val(),
    //         "ddd": $('#ddd').val(),
    //         "telefone": $('#telefone').val(),
    //         "mensagem": $('#mensagem').val()
    //     };

    //     $.ajax({
    //         type: "POST",
    //         url: "mail/mailRegister.aspx",
    //         data: JSON.stringify(dataS),
    //         dataType: "json",
    //         contentType: 'application/json; charset=utf-8',
    //         success: function (response) {
    //             if (response == "OK") {
    //                 //alert("Obrigado por se cadastrar.");
    //                 $('#modal p').text('').html("Obrigado por se cadastrar.");
    //                 $('#modal, .shadown').fadeIn();
    //                 setTimeout(function() {
    //                   $('#modal, .shadown').fadeOut();
    //                 }, 1500);
    //                 $('#nome').val("");
    //                 $('#email').val("");
    //                 $('#ddd').val(""); ;
    //                 $('#telefone').val("");
    //                 $('#mensagem').val("");
    //             } else
    //                 $('#modal p').text('').html("Ocorreu um erro ao efetuar seu cadastro: " + response);
    //                 $('#modal, .shadown').fadeIn();
    //                 setTimeout(function() {
    //                   $('#modal, .shadown').fadeOut();
    //                 }, 1500);
    //         },
    //         error: function (response) {
    //             $('#modal p').text('').html("Ocorreu um erro ao efetuar seu cadastro: " + response);
    //             $('#modal, .shadown').fadeIn();
    //             setTimeout(function() {
    //               $('#modal, .shadown').fadeOut();
    //             }, 1500);
    //         }
    //     });
    //     return false;
    // });



    // // Validate form data
    // function validateForm() {
    //     var emailReg = /^([0-9a-zA-Z]([\+\-_\.][0-9a-zA-Z]+)*)+@(([0-9a-zA-Z][-\w]*[0-9a-zA-Z]*\.)+[a-zA-Z0-9]{2,17})$/;

    //     var nome = $('#nome').val();
    //     var email = $('#email').val();
    //     var ddd = $('#ddd').cleanVal();
    //     var telefone = $('#telefone').cleanVal(); ;
    //     var mensagem = $('#mensagem').val();

    //     if (nome == "" || email == "" || ddd == "" || telefone == "" || mensagem == "") {
    //         //alert("Preencha todos os campos para efetuar seu cadastro");
    //         $('#modal p').text('').html("Preencha todos os campos para efetuar seu cadastro");
    //         $('#modal, .shadown').fadeIn();
    //         setTimeout(function() {
    //           $('#modal, .shadown').fadeOut();
    //         }, 1500);
    //         return false;
    //     }
    //     else if (ddd.length != 2) {
    //         //alert("Preencha um DDD válido");
    //         $('#modal p').text('').html("Preencha um DDD válido");
    //         $('#modal, .shadown').fadeIn();
    //         setTimeout(function() {
    //           $('#modal, .shadown').fadeOut();
    //         }, 1500);
    //         return false;
    //     }
    //     else if (telefone.length < 8 || telefone.length > 9) {
    //         //alert("Preencha um telefone válido");
    //         $('#modal p').text('').html("Preencha um telefone válido");
    //         $('#modal, .shadown').fadeIn();
    //         setTimeout(function() {
    //           $('#modal, .shadown').fadeOut();
    //         }, 1500);
    //         return false;
    //     }
    //     else if (!emailReg.test(email)) {
    //         //alert("Preencha um email válido");
    //         $('#modal p').text('').html("Preencha um email válido");
    //         $('#modal, .shadown').fadeIn();
    //         setTimeout(function() {
    //           $('#modal, .shadown').fadeOut();
    //         }, 1500);
    //         return false;
    //     }
    //     return true;
    // }   
});