<script lang="ts">
    import {Card,CardBody,CardHeader,CardTitle,CardSubtitle,Alert,Col,Row,Image,Badge,Button} from 'sveltestrap';
  
    let radioGroup;
    let selected = "Ciao";
    let submitted = false;
    let isSuccessVisible = false;
    function handleSubmit(e) {
		isSuccessVisible = true;

    console.log(selected);
		setTimeout(function(){
			isSuccessVisible = false;
		}, 4000);
	}
  import Navbar_Restructured from '../restructured_components/Navbar_Restructured.svelte';
  import ErrorCard from '../restructured_components/404Card.svelte';

  import axios from 'axios';
  import {onMount} from 'svelte';
  
  let parameters = new URLSearchParams(window.location.search);
  
    let IDn= parameters.get("ID")
    let result;
    let error404=false;
  onMount(async () => {
    try {
        
            const res = await axios({method:'get',url:'http://127.0.0.1:8000/staff',headers:{'CUSTOM-OPTION':IDn,'Authorization':'Token ' + sessionStorage.getItem("key")}});
            console.log(res.data);
            if(res.data != "Il profilo non esiste"){
                document.getElementById('nome-staff').innerText = res.data.first_name;
                document.getElementById('cognome-staff').innerText = res.data.last_name;
                document.getElementById('email-staff').innerText = res.data.email;
                document.getElementById('subtitle-staff').innerText = "Dati membro staff: " + res.data.username;
            }
            result = res.data;
        } catch (e) {
            console.log("ERRORE");
            error404=true;
            console.log(e);
        }
    });
</script>

<main>
<Navbar_Restructured/>
{#if result == "Il profilo non esiste" || error404}
<ErrorCard/>
{:else}
<Card class="mb-3" id="hd-card-3">
    <CardHeader id="hd-card-header-3">
      <CardTitle>Profilo</CardTitle>
      <CardSubtitle id="subtitle-staff">Dati membro staff: username</CardSubtitle>
    </CardHeader>
    <CardBody>
        <Image id="defaultAvatar" class="defaultAvatar" alt="defaultAvatar" src="https://t3.ftcdn.net/jpg/01/28/56/34/360_F_128563455_bGrVZnfDCL0PxH1sU33NpOhGcCc1M7qo.jpg"/>
        
        <Col>
            <Row>
                <p id="nome-staff">Nome</p>
            </Row>
            <Row>
                <p id="cognome-staff">Cognome</p>
            </Row>
            <Row>
                    
                <p id="email-staff">Email</p>
                <input type="email" id="email-staff-input" placeholder="INSERISCI NUOVA EMAIL"/>
            </Row>
            <Row>
                <button class="hd-button" id="removeButton">Elimina</button>
            </Row>
            <Row id="hiddenRow3">
                <button class="hd-button" id="editButton">Modifica</button>
               
            </Row>
           <Row id="hiddenRow2" style="display:none;">
            <button class="hd-button" id="confirmButton">Conferma</button>
           </Row>
        </Col>
    

    </CardBody>
 
  </Card>
  {/if}
</main>


<svelte:head>
    <style>
        #email-staff-input{
            display:none;
        }
        #editButton,#removeButton,#confirmButton{
            margin-top:10px;
            max-width:850px;
        }
        
    </style>
    <script src="../specific_page_js/profilostaff.js"></script>

 <link rel="stylesheet" href="../restructured_css/card.css">
 <link rel="stylesheet" href="../restructured_css/button.css">
 <link rel="stylesheet" href="../specific_page_css/profilo_bambino.css">
  </svelte:head>