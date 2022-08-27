<script>
    
    import Login_Restructured from '../restructured_pages/Login_Restructured.svelte';
    import RecuperaPasswordRestructured from '../restructured_pages/RecuperaPassword_Restructured.svelte';
    import WaveSpinner_Restructured from '../restructured_components/WaveSpinner_Restructured.svelte';
    import Impostazioni_Restructured from '../restructured_pages/Impostazioni_Restructured.svelte';
    import Dashboard_Restructured from '../restructured_pages/Dashboard_Restructured.svelte';
    import ReportForm_Restructured from '../restructured_pages/ReportForm_Restructured.svelte';
    import GestioneSezioniRestructured from '../restructured_pages/GestioneSezioni_Restructured.svelte';
    import Communications_Restructured from '../restructured_pages/Communications_Restructured.svelte';
    import ParentsHome from '../parents/ParentsHome.svelte';
    import Dashboard from '../generally_components/Dashboard.svelte';

    import RegistraBambino from '../administrator/RegistraBambino.svelte';
    import TabRegistraBambino from '../restructured_components/restructured_tab/TabRegistraBambino.svelte';
    import GestioneSezione from '../administrator/GestioneSezione.svelte';
    import GestioneBambini from '../administrator/GestioneBambini.svelte';
    import Prova from '../administrator/administrator_navpages/Prova.svelte';
    import Prova2 from '../administrator/administrator_navpages/Prova2.svelte';
    import ProfiloStaff from '../restructured_pages/ProfiloStaff.svelte';
    import ProfiloBambino from '../administrator/ProfiloBambino.svelte';
    import ProfiloBambino2 from '../administrator/ProfiloBambino2.svelte';
    import GestioneStaffRestructured from '../restructured_pages/GestioneStaff_Restructured.svelte';

   import Testing from '../restructured_pages/restructured_pages_params_by_url/Testing.svelte';
   import Card_Eg from '../da_cancellare_screen_tesi/Card_Eg.svelte';
    export let url = '';
    import { Router, Route } from 'svelte-routing';
import WaveSpinnerRestructured from '../restructured_components/WaveSpinner_Restructured.svelte';
import CardEg from '../da_cancellare_screen_tesi/Card_Eg.svelte';
import { get } from 'svelte/store';
import CommunicationsRestructured from '../restructured_pages/Communications_Restructured.svelte';
import { get_all_dirty_from_scope } from 'svelte/internal';
import DashboardRestructured from '../restructured_pages/Dashboard_Restructured.svelte';
import LoginRestructured from '../restructured_pages/Login_Restructured.svelte';
import ReportFormRestructured from '../restructured_pages/ReportForm_Restructured.svelte';
import ErrorPage from '../restructured_components/404ErrorPage.svelte';


    
  </script>
  

  <Router {url}>
    <div>
      <!--GENERAL ROUTE-->
      <Route path="/">
        {#if sessionStorage.getItem("user")==null}
        <LoginRestructured/>
        {:else if sessionStorage.getItem("user") == "admin"}
        <Dashboard_Restructured usertype={"Amministratore"}/>
        {:else}
        <Dashboard_Restructured usertype={"Maestra"}/>
        {/if}
      </Route> 
      <Route path="/profiloBambino2">
        {#if sessionStorage.getItem("user")==null}
        <LoginRestructured/>
        {:else}
        <ProfiloBambino2/>
        {/if}
      </Route> 
      <Route path="/reportform">
        {#if sessionStorage.getItem("user")==null}
        <LoginRestructured/>
        {:else}
        <ReportFormRestructured/>
        {/if}
      </Route> 
      <Route path="/recuperapassword" component={RecuperaPasswordRestructured}/>
      <Route path="/impostazioniprofilo">
        {#if sessionStorage.getItem("user")==null}
        <LoginRestructured/>
        {:else}
        <Impostazioni_Restructured/>
        {/if}
      </Route> 
      <!--MAESTRX ROUTE-->
      <Route path="maestra">
        {#if sessionStorage.getItem("user") == null}
        <LoginRestructured/>
        {:else if sessionStorage.getItem("user") == "admin"}
        <ErrorPage/>
        {:else}
        <Dashboard_Restructured usertype={"Maestra"}/>
        {/if}
      </Route>


      <Route path="/maestra/comunicazioni">
      {#if sessionStorage.getItem("user") == null}
        <LoginRestructured/>
        {:else if sessionStorage.getItem("user") == "admin"}
        <ErrorPage/>
        {:else}
        <Communications_Restructured/>
        {/if}
      </Route> 


      <Route path="maestra/gestioneBambini">
        {#if sessionStorage.getItem("user") == null}
        <LoginRestructured/>
        {:else if sessionStorage.getItem("user") == "admin"}
        <ErrorPage/>
        {:else}
        <Prova2 usertype={"Maestra"}/>
        {/if} 
      </Route>

      <!--ADMIN ROUTE-->
      <Route path="admin">
        {#if sessionStorage.getItem("user") == null}
        <LoginRestructured/>
        {:else if sessionStorage.getItem("user") == "maestra"}
        <ErrorPage/>
        {:else}
        <Dashboard_Restructured usertype={"Amministratore"}/>
        {/if}
      </Route>


      <Route path="admin/gestioneBambini">
        {#if sessionStorage.getItem("user") == null}
        <LoginRestructured/>
        {:else if sessionStorage.getItem("user") == "maestra"}
        <ErrorPage/>
        {:else}
        <GestioneBambini/>
        {/if}
        </Route>
      <Route path="admin/gestioneSezioni2">
        {#if sessionStorage.getItem("user") == null}
        <LoginRestructured/>
        {:else if sessionStorage.getItem("user") == "maestra"}
        <ErrorPage/>
        {:else}
        <GestioneSezioniRestructured/>
        {/if}
      </Route> 


      <Route path="admin/gestioneStaff">
        {#if sessionStorage.getItem("user") == null}
        <LoginRestructured/>
        {:else if sessionStorage.getItem("user") == "maestra"}
        <ErrorPage/>
        {:else}
        <GestioneStaffRestructured/>
        {/if}
      </Route>


      <Route path="admin/profiloStaff">
        {#if sessionStorage.getItem("user") == null}
        <LoginRestructured/>
        {:else if sessionStorage.getItem("user") == "maestra"}
        <ErrorPage/>
        {:else}
        <ProfiloStaff/>
        {/if}
      </Route>
      
      <!--
      <Route path="/" component={Login_Restructured} />
      <Route path="/a" component={Testing} />
      <Route path="/cm\d+" component={Login_Restructured}/>
      <Route path="cm" component={Communications_Restructured} />
      
      
    
  
    
    <Route path="admin/gestioneSezioni" component={GestioneSezione} />
    <Route path="admin/gestioneSezioni2" component={GestioneSezioniRestructured} />
    <Route path="reportform" component={ReportForm_Restructured} />
    <Route path="admin/gestioneBambini">
    <GestioneBambini/>
    </Route>
    <Route path="admin/gestioneStaff">
      <GestioneStaffRestructured/>
      </Route>
    <Route path="maestra/gestioneBambini">
        <Prova usertype={"Maestra"}/>
    </Route>
    </div>
    <Route path="profiloBambino" component={ProfiloBambino}/>
    <Route path="profiloBambino2" component={ProfiloBambino2}/>
    <Route path="profiloStaff" component={ProfiloStaff}/>
    <Route path="tesi_pierpaolo/card_eg" component={CardEg}/>-->
  </Router>