<script lang="ts">
    import Navbar_Restructured from "../restructured_components/Navbar_Restructured.svelte"
    import {Container,Row,Card,CardBody,CardFooter,CardHeader,Alert,CardTitle,FormText,InputGroup,Input,InputGroupText,Image,Form,} from 'sveltestrap';
import { loop_guard } from "svelte/internal";
</script>

<Navbar_Restructured/>

<Card class="mb-3" id="hd-card-3">
    <CardHeader id="hd-card-header-3"><Image src="/media_resources/dashboard_resources/login_icon.PNG" class="badgeIcon"></Image></CardHeader>
    <CardBody>
        
           <Row id="row">
              <InputGroup class="ciao">
                  <InputGroupText style="max-height:38px;"><i class="fa-solid fa-envelope"></i></InputGroupText>
                  <Input id="email" type="email" placeholder="email"/>
                </InputGroup>
              </Row>
          <Row id="row">
            <InputGroup>
                <InputGroupText style="max-height:38px;"><i class="fa-solid fa-key"></i></InputGroupText>
                <Input id="password" type="password" placeholder="password"/>
              </InputGroup>
              <FormText id="togglePassword"><i class="fa-solid fa-eye-slash" id="icon"></i> Clicca qua per vedere la password in chiaro</FormText>
            </Row>
        <Row id="row">
          <Container id="container-btn"><button id="enter-btn" class="hd-button">ENTRA</button></Container>
        </Row>
     
    </CardBody>
    <CardFooter id="hd-card-footer-3"><Alert color='warning'>Se hai smarrito la password, o non riesci ad entrare nel sistema <a href="recuperapassword">clicca qua</a><i class="fas fa-hand-point-left"></i> </Alert></CardFooter>
</Card>

<svelte:head>
    <link rel="stylesheet" href="../restructured_css/navbar.css">
    <link rel="stylesheet" href="../restructured_css/button.css">
    <link rel="stylesheet" href="../restructured_css/card.css">
    <link rel="stylesheet" href="../specific_page_css/login.css">
    <script src="../specific_page_js/login.js"></script>
    <style>
        .ciao{
            border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
        }
    </style>
    <script>
        const togglePassword = document.querySelector("#togglePassword");
        const icon = document.querySelector("#icon");
        const password = document.querySelector("#password");
  
        togglePassword.addEventListener("click", function () {
           
            const type = password.getAttribute("type") === "password" ? "text" : "password";
            password.setAttribute("type", type);
            
            if(type=="text"){
                icon.className = "fa-solid fa-eye";
            }else{
                icon.className = "fa-solid fa-eye-slash";
            }
           
            
        });
    </script>
</svelte:head>