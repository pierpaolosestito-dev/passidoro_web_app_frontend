

let codiceRecuperoPassword;
let id;
let tentativi = 3;
let tentativiPassword = 3;
let counter = 0;
let emailVar;
window.addEventListener("load",function(){
	var jQueryScript = document.createElement('script');
	jQueryScript.setAttribute('src','https://unpkg.com/sweetalert/dist/sweetalert.min.js');
  jQueryScript.setAttribute('src','https://cdn.jsdelivr.net/npm/sweetalert2@11');
	document.head.appendChild(jQueryScript);
    
})
var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
$(document).on('click', '#invia-email-recupero', function(){ 
     
    if(!regex.test($('#email').val())){
      swalAlert(0,"L'email inserita non è valida");
            return;
    }
    $("#hidden-row").fadeIn();
    //$("#spinner").show();
    emailVar = $('#email').val();
    email = {'Email':$('#email').val()}
    //Qui verificheremo l'esistenza della mail, se esiste
    var regex2 =  /(\d+)/;
    var regex3 = /Email per recupero password inviata con successo,(\d+)/;
    console.log("Ciao");
    axios.post('http://127.0.0.1:8000/recupero_password', email)
    .then(response => {
      console.log(response)
      if(response.data == "Risulta esserci un errore"){
        swalAlert(0,"L'operazione non è andata a buon fine");
      }else{
        swalAlert(1,"Email per il recupero password inviata con successo");
        codiceRecuperoPassword = response.data.code_to_sent;
        id=response.data.id;
        console.log(id);
        console.log(codiceRecuperoPassword);
        setTimeout(codice,3000);
        return;
      }
      /*if(regex3.test(response.data)){
        swalAlert(1,"Email per il recupero password inviata con successo");
        match = response.data.match(regex2);
        console.log(match[1]);
        codiceRecuperoPassword = match[1];
        
      }else{
        swalAlert(0,"L'operazione non è andata a buon fine.");
        setTimeout(errore,3000);
      }*/
    });
    
    counter+=1;
});
function errore(){
    $("#spinner").replaceWith
    ("<div class='error' id='error'>L'email non risulta registrata nel sistema</div><p id='spinner'>La pagina si aggiornerà tra qualche secondo</p>");
    setTimeout(reload,3000);
 
}

function reload(){
    location.reload();
}
function codice(){
    $("#spinner").replaceWith
    ("<input id='codice_input' type='number' placeholder='Inserisci il codice che hai ricevuto'/>");
    $("#hidden-col").fadeIn();
    $(document).on('click', '#confermaCodice-btn', function(){
        console.log(codiceRecuperoPassword);
        console.log($('#codice_input').val());
        //Successo, mostra un messaggio che la password è stata cambiata con successo
        if(codiceRecuperoPassword == $('#codice_input').val() ){
            console.log("COMBACIANO");
            swalAlert(1,"Il codice è corretto.");
            
            $("#codice_input").fadeOut();
            $("#confermaCodice-btn").fadeOut();
            $("#hidden-row2").fadeIn();
           
            $(document).on('click', '#confermaPassword-btn', function(){
              
                if($('#password').val() == $('#repeated-password').val()){
                    if($('#password').val().length < 8){
                      swalAlert(0,"Questa password è troppo breve. Deve contenere almeno 8 caratteri.");
                      return;
                    }

                    oggetto = {'Email':emailVar,'Password':$('#password').val(),'id':id}
                    
                    Swal.fire({
                      title:"Caricamento in corso",
                      imageUrl:"../media_resources/loader_resources/cat_loader.gif",
                      didOpen: function(){
                        axios({method:"post",url:'http://127.0.0.1:8000/recupero_password/cambio_password', data:oggetto,headers:{'CUSTOM-OPTION':codiceRecuperoPassword}})
                        .then(response => {
                            console.log(response);
                                if(response.data == "Password cambiata con successo"){
                                  swalAlert(1,response.data);
                                    setTimeout(function(){
                                      location.href="/"
                                    },3000);
                                    return;
            
                                }else{
                                  swalAlert(0,response.data);
                               }
          
                        }).catch(function(err){
                          swalAlertCONN_REF();
                          return;
                        });
                      }});
                    
                
              }else{
                    if(tentativiPassword == 0){
                        setTimeout(reload,3000);
                      }
                      tentativiPassword-=1;
                      swalAlert(0,"Errore! Le password non combaciano, HAI ANCORA " + tentativiPassword + " TENTATIVI");
      
                      
                      
                }
            });
        /*swal({
            title: "Successo!",
            text: "La password è stata cambiata con successo",
            icon: "https://png.pngtree.com/png-vector/20190629/ourlarge/pngtree-success-icon-for-your-project-png-image_1522120.jpg",
          });*/
        }else{
            if(tentativi == 0){
                setTimeout(reload,3000);
              }
              tentativi-=1;
              swalAlert(0,"Errore! Il codice non sembra combaciare con quello ricevuto, HAI ANCORA " + tentativi + " TENTATIVI");
              
              
              
        }
        //Errore, che il codice non risulta combaciare.
        //$("#hidden-col-2").fadeIn();
    });

};


 