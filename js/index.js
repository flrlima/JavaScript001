$(document).ready(function(){
    $("#idBotao").click(function(){
        validarFormulario();
    });
    
    function validarFormulario()
    {
        var nome = $("#idNome").val();
        var email = $("#idEmail").val();
        var mensagemErro = "";
        if(nome == "")
            mensagemErro += "Campo nome é obrigatório\n";
        if(email == "")
            mensagemErro += "Campo e-mail é obrigadtório\n";
        if(mensagemErro == "")
            alert($("#idNome").val() + ", você foi cadastrado com sucesso!");
        else
            return alert(mensagemErro);
    }
});
