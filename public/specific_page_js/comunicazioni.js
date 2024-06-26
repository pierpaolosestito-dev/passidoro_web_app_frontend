

$("#sezione-select").change(function() {
    $("#hidden-row").show();
 });

 window.addEventListener("load",function(){
	var jQueryScript = document.createElement('script');
	jQueryScript.setAttribute('src','https://unpkg.com/sweetalert/dist/sweetalert.min.js');
  jQueryScript.setAttribute('src','https://cdn.jsdelivr.net/npm/sweetalert2@11');
	document.head.appendChild(jQueryScript);
    
})

$(document).on('click', '#send-btn', function(){ 
    
    if($('#oggetto').val().length == 0 || $('#messaggio').val().length == 0 || $( "#sezione-select option:selected" ).text() == ""){
        console.log($( "#sezione-select option:selected" ).text());
          swalAlert(0,"Tutti i campi devono essere riempiti.");
          return;
    }
    Solo_rappresentante = "";
    if($("#solo-rappresentante").is(":checked") == false)
        Solo_rappresentante = "No";
    else
        Solo_rappresentante = "Si";

    Nome_sezione = "Lupacchiotti";
    Oggetto = $("#oggetto").val();
    Messaggio = $("#messaggio").val();

    comunicazione = {"Nome_sezione":Nome_sezione,"Oggetto":Oggetto,"Messaggio":Messaggio,"Solo_rappresentante":Solo_rappresentante};
    
    Swal.fire({
      title:"Caricamento in corso",
      imageUrl:"../media_resources/loader_resources/cat_loader.gif",
      didOpen: function(){
        axios({method:"post",url:'http://127.0.0.1:8000/invia_comunicazione',data:comunicazione,headers:{"Authorization":"Token " + sessionStorage.getItem("key")}})
        .then(response => {
          console.log(response);
          if(response.data == "Email inviata con successo"){
            swalAlert(1,"Operazione avvenuta con successo.");
              setTimeout(function(){
                location.reload();
              },1200);
              return;
            
          }else{
            swalAlert(0,"L'operazione non è andata a buon fine.");
          }
          
        }).catch(function(err){
            swalAlertCONN_REF();
            return;
        });
      }});
    
  });

function pulisciInputFields(){
    $("#oggetto").val("");
    $("#messaggio").val("");
    $("#sezione-select").text("");
}