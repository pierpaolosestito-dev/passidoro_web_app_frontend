<script lang="ts">
    import Navbar_Restructured from '../restructured_components/Navbar_Restructured.svelte';
    import {Spinner,Container,Card,CardBody,CardHeader,CardTitle,CardSubtitle,Alert,Col,Row,Image,Badge,Button,InputGroup,InputGroupText,Input} from 'sveltestrap';
    
</script>

<Navbar_Restructured/>
<Card class="mb-3" id="hd-card">
    <CardHeader id="hd-card-header">
        <CardTitle id="card-title">Recupera password</CardTitle>
        <CardSubtitle>Se la tua utenza risulta essere registrata nel sistema, riceverai una mail, sull'indirizzo di posta elettronica da te inserito.</CardSubtitle>
    </CardHeader>
    <CardBody>
      
            <Col>
                <Row id="row">
                    <InputGroup>
                        <InputGroupText><i class="fa-solid fa-envelope"></i></InputGroupText>
                        <Input id="email" type="email" placeholder="Inserisci qua la tua email" required />
                      </InputGroup>
                </Row>
                <Row id="row">
                    <Container id="container-btn"><button class="hd-button" id="invia-email-recupero">Invia per recupero password</button></Container>
                </Row>
                <!--<Row id="hidden-row">
                    <Col>
                        <Row>
                            <Alert color='warning'>Inserisci qua il codice che hai ricevuto nella mail. Dai un'occhiata anche alla cartella "Spam" o "Posta indesiderata"</Alert>
                        </Row>
                        <Row>
                            <InputGroup>
                                <InputGroupText><Image src="./favicon.png" class="badgeImg"/></InputGroupText>
                                <Input type="number" placeholder="CODICE" required />
                            </InputGroup>
                        </Row>  
                        <Row id="row">
                            <Container id="container-btn"><button class="hd-button">Conferma codice</button> </Container>
                        </Row>
                    </Col>
                </Row>-->
                <Row id="hidden-row">
                    
                        <Spinner id="spinner" color="warning"/>
                    
                    <Col id="hidden-col">
                       <Container id="container-btn"> <button class="hd-button" id="confermaCodice-btn">Conferma codice</button> </Container>
                    </Col>
                    <Col id="hidden-col-2">
                        <div class='error' id='error'>L'email non risulta registrata nel sistema</div>
                     </Col>
                    
                </Row>
                
                <Row id="hidden-row2">
                    <input id="password" type="password" placeholder="Inserisci la nuova password"/>
                    <input id="repeated-password" type="password" placeholder="Inserisci nuovamente la nuova password"/>
                    <Container id="container-btn"> <button class="hd-button" id="confermaPassword-btn">Conferma cambio password</button> </Container>
                </Row>
                
            </Col>
       
    </CardBody>
</Card>

<svelte:head>
        <script src="../specific_page_js/recupera_password.js"></script>
        <link rel="stylesheet" href="../restructured_css/card.css"/>
        <link rel="stylesheet" href="../restructured_css/button.css"/>
        <link rel="stylesheet" href="../specific_page_css/recupera_password.css"/>
    </svelte:head>