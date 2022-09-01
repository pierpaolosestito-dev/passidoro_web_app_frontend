
window.addEventListener("load",function(){
	var jQueryScript = document.createElement('script');
	jQueryScript.setAttribute('src','https://unpkg.com/sweetalert/dist/sweetalert.min.js');
	document.head.appendChild(jQueryScript);
    
})
let modificheReport=false;
$("#r1").change(function(){
    $('#info-aggiuntive').show();
    modificheReport = true;
});

$("#r2").change(function(){
    $('#info-aggiuntive').hide();
    modificheReport = true;
});
$("#r3").change(function(){
    modificheReport = true;
    ha_dormito=true;
});
$("#r4").change(function(){
    modificheReport = true;
    ha_dormito=false;
});

$("#pasto").on("input", function() {
    modificheReport = true;
});
$("#info-aggiuntive-text").on("input", function() {
    modificheReport = true;
});
$("#promemoria").on("input", function() {
    modificheReport = true;
});

let parameters = new URLSearchParams(window.location.search);
  console.log(parameters.get("ID"));
    let IDn= parameters.get("ID");
    console.log("IDn",IDn);

    info_aggiuntive = $("#info-aggiuntive-text").val();

$(document).on('click', '#conferma-modifiche', function(){ 
    
    
    bisogni_fisiologici="";
    ha_dormito=false;
    if($("#r2").is(':checked')){
        bisogni_fisiologici = "NO "

    }else{
        if($("#info-aggiuntive-text").val()!=info_aggiuntive){
            var regex = /SI /;
            if(!regex.test(bisogni_fisiologici)){
                bisogni_fisiologici ="SI "
            }
            bisogni_fisiologici = bisogni_fisiologici.concat($("#info-aggiuntive-text").val()+"");
        }else{
            bisogni_fisiologici=info_aggiuntive;
        }
    }

    if($("#r3").is(':checked')){
        ha_dormito=true;
    }else{
        ha_dormito=false;
    }
    pasto = $( "#pasto" ).val()+""; 
    promemoria = $( "#promemoria" ).val()+"";
    console.log("PRomemoria",promemoria);

    Swal.fire({
        title:"Caricamento in corso",
        imageUrl:"../media_resources/loader_resources/cat_loader.gif",
        didOpen: function(){

            aggiornamenti_report = {"ID":IDn,"Bisogni_fisiologici":bisogni_fisiologici,"Ha_dormito":ha_dormito,"Pasto":pasto,"Promemoria_genitori":promemoria,"Modificato":true}
            //aggiornamenti_report = {"ID":IDn,"Bisogni_fisiologici":bisogni_fisiologici,"Ha_dormito":ha_dormito,"Pasto":pasto}
            console.log("BISOGNI FISIOLOGICI: ", bisogni_fisiologici)
            axios.put('http://127.0.0.1:8000/report_giornaliero', aggiornamenti_report)
            .then(response => {
              console.log(response)
                if(response.data == "Aggiornato con successo"){
                    swalAlert(1,"Operazione avvenuta con successo. <br> Se non hai fatto alcuna modifica, i dati rimarranno integri per come sono.");
                    modificheReport=false;  
                    return;
                      
                }else{
                    swalAlert(0,"L'operazione non è andata a buon fine.");
                }
            });
        }});

});

$(document).on('click', '#invia-report', function(){ 
    if(modificheReport){
        swalAlert(0,"Devi prima confermare le modifiche che hai fatto. <br> Se hai apportato modifiche involontariamente, aggiorna la pagina e successivamente invia il report.");
        return;
    }
    dati = {"ID":IDn};
    Swal.fire({
        title:"Caricamento in corso",
        imageUrl:"../media_resources/loader_resources/cat_loader.gif",
        didOpen: function(){
            axios.post("http://127.0.0.1:8000/invia_report",dati).then(response=>{
        console.log(response.data);
        if(response.data == "Email inviata con successo"){
            swalAlert(1,"Report inviato correttamente.");
            setTimeout(function(){
                location.reload();
            },1000);
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