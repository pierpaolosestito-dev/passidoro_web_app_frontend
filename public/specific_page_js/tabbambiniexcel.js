


window.addEventListener("load",function(){
	var jQueryScript = document.createElement('script');
  jQueryScript.setAttribute('src','https://unpkg.com/sweetalert/dist/sweetalert.min.js');
  jQueryScript.setAttribute('src','https://cdn.jsdelivr.net/npm/sweetalert2@11');
  
	document.head.appendChild(jQueryScript);
  
    
})
var input = document.getElementById("excelfile-input");
        input.addEventListener('change',function(){
          readXlsxFile(input.files[0]).then(function(data){
            children_array = []
            let counter = 0;
            let nomeSezione = "";
            piu_sezioni = false;
            for(let i=1;i<data.length;i++){
                if(counter==0 && nomeSezione=="")
                {
                  nomeSezione = data[i][5];
                  counter+=1;
                }
                if(counter!=0){
                  if(nomeSezione!=data[i][5])
                    piu_sezioni=true;
                }
                console.log(i,data[i][0]);
                bambino_corrente = {"Nome":data[i][0],"Cognome":data[i][1],"Email_Genitore1":data[i][2],"Email_Genitore2":data[i][3],"Data_di_nascita":data[i][4],"NomeSezione":data[i][5]}
                children_array.push(bambino_corrente)
            }

   if(piu_sezioni){
            console.log("PIU SEZIONI");
            nomeSezione = "TUTTE"
   }
    else
            console.log("STESSA SEZIONE");
console.log("NOMESEZIONE",nomeSezione);

Swal.fire({
  title:"Caricamento in corso",
  imageUrl:"../media_resources/loader_resources/cat_loader.gif",
  didOpen: function(){
    axios({
      method:'post',
      url:'http://127.0.0.1:8000/bambini',
      data:children_array,
      headers:{'CUSTOM-OPTION':nomeSezione,"Authorization":"Token " + sessionStorage.getItem("key")}})
      .then(response => {
        console.log(response)
        if(response.data == "OK"){
          swalAlert(1,"Operazione avvenuta con successo.");
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
        });