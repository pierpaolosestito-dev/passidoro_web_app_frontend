
<script>
	
  import Router from './routes/index.svelte';
  import RegistraBambino from './administrator/RegistraBambino.svelte';
	console.log("Ciao")
	import { onMount } from "svelte";

  const endpoint = "http://localhost:8080/api/children";
  let posts = [];

 onMount(async function () {
    const response = await fetch(endpoint);
	console.log(response.data)
    const data = await response.json();
    console.log(data);
  });


</script>
<main>
  <Router/>
  
</main>

	<!--<ParentsHome/>
  <GestioneBambini/>-->
  <!--<LoginTeacherAdmin/>
 
<ReportForm/><Prova/>-->
  

  
		
    
	


