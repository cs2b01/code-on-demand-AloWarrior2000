function getData(){
        //var carga="<img src='/home/alonso/Documentos/Ciclo_3/Desarrollo/code-on-demand-AloWarrior2000/imagen_carga.png' />";
        $('#action').html('<img src="/static/images/carga_movil.gif" width="400" height="250" />' );
        var username = $('#username').val();
        var password = $('#password').val();
        var message = JSON.stringify({
                "username": username,
                "password": password
            });

        $.ajax({
            url:'/authenticate',
            type:'POST',
            contentType: 'application/json',
            data : message,
            dataType:'json',
            success: function(response){
                //alert(JSON.stringify(response));
                $('#action').html('<img src="/static/images/sendarrow.png" />' );
            },
            error: function(response){
                //alert(JSON.stringify(response));
                if (response['status']==401){
                    $('#action').html('<img src="/static/images/fail.png" width="100" height="100" />' );
                }else{
                    window.location.href="http://127.0.0.1:8080/static/chat.html";
                }
            }
        });
    }