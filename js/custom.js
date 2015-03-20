$(document).ready(function () {
    

    // framework to start animation css
    wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    });
    wow.init();

    // FORM
    // Submit form to send the data to email
    $("#formRegister").submit(function (e) {
        e.preventDefault();
        if (!validateForm())
            return false;

        var dataS = {
            "IdContato": 0,
            "dsNome": $('#nome').val(),
            "dsEmail": $('#email').val(),
            "dsAssunto": $('#assunto').val(),
            "dsMensagem": $('#mensagem').val()
        };

        $.ajax({
            type: "POST",
            url: "/Home/CadastraContato",
            data: JSON.stringify(dataS),
            dataType: "json",
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
                if (response.id == 0) {
                    //alert("Obrigado por se cadastrar.");
                    $('#msg').text('').html("Obrigado por se cadastrar.");
                    $('#msg').fadeIn();
                    setTimeout(function() {
                      $('#msg').fadeOut();
                    }, 1500);
                    $('#nome').val("");
                    $('#email').val("");
                    $('#assunto').val(""); ;
                    $('#mensagem').val("");
                } else{                    
                    $('#msg').text('').html("Ocorreu um erro ao efetuar seu cadastro: " + response.dsMensagem);
                    $('#msg').fadeIn();
                    setTimeout(function() {
                      $('#msg').fadeOut();
                    }, 1500);
                }
            }
        });
        return false;
    });

    

    // Validate form data
    function validateForm() {
        var emailReg = /^([0-9a-zA-Z]([\+\-_\.][0-9a-zA-Z]+)*)+@(([0-9a-zA-Z][-\w]*[0-9a-zA-Z]*\.)+[a-zA-Z0-9]{2,17})$/;

        var nome = $('#nome').val();
        var email = $('#email').val();
        var assunto = $('#assunto').val();        
        var mensagem = $('#mensagem').val();

        if (nome == "" || email == ""  || assunto == "" || mensagem == "") {
            //alert("Preencha todos os campos para efetuar seu cadastro");
            $('#msg').text('').html("Preencha todos os campos para efetuar seu cadastro");
            $('#msg').fadeIn();
            setTimeout(function() {
              $('#msg').fadeOut();
            }, 1500);
            return false;
        }
        else if (!emailReg.test(email)) {
            $('#msg').text('').html("Preencha um email válido");
            $('#msg').fadeIn();
            setTimeout(function() {
              $('#msg').fadeOut();
            }, 1500);
            return false;
        }
        return true;
    }   

    $(".formRegister2").submit(function (e) {
        e.preventDefault();
        var form = $(this);
        if (!validateForm2(form)){
            return false;
        }

        var dataS = {
            "IdEmailVoceNoBastro":0,
            "IdVoceNoBastro": form.parent().parent().attr('data-id'),
            "dsEmail": form.find('.email2').val(),
        };

        $.ajax({
            type: "POST",
            url: "/Home/CadastraEmail",
            data: JSON.stringify(dataS),
            dataType: "json",
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
                if (response.id == 0) {
                    //alert("Obrigado por se cadastrar.");
                    form.find('.msg2').text('').html("E-mail enviado com sucesso. Em breve entraremos em contato.");
                    form.find('.msg2').fadeIn();
                    setTimeout(function() {
                      form.find('.msg2').fadeOut();
                    }, 1500);
                    form.find('.email2').val("");
                } else{                    
                    form.find('.msg2').text('').html("Ocorreu um erro ao efetuar seu cadastro: " + response.dsMensagem);
                    form.find('.msg2').fadeIn();
                    setTimeout(function() {
                      form.find('.msg2').fadeOut();
                    }, 1500);
                }
            }
        });
        return false;
    });

    

    // Validate form data
    function validateForm2($this) {
        var emailReg = /^([0-9a-zA-Z]([\+\-_\.][0-9a-zA-Z]+)*)+@(([0-9a-zA-Z][-\w]*[0-9a-zA-Z]*\.)+[a-zA-Z0-9]{2,17})$/;

        var email = $this.find('.email2').val();

        if (email == "") {
            //alert("Preencha todos os campos para efetuar seu cadastro");
            $this.find('.msg2').text('').html("Preencha todos os campos para efetuar seu cadastro");
            $this.find('.msg2').fadeIn();
            setTimeout(function() {
              $this.find('.msg2').fadeOut();
            }, 1500);
            return false;
        }
        else if (!emailReg.test(email)) {
            $this.find('.msg2').text('').html("Preencha um email válido");
            $this.find('.msg2').fadeIn();
            setTimeout(function() {
              $this.find('.msg2').fadeOut();
            }, 1500);
            return false;
        }
        return true;
    }   

});