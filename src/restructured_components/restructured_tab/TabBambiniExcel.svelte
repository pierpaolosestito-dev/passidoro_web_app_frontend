<script lang="ts">


    import {Card,CardHeader,CardTitle,CardBody,Image,CardText,Input} from 'sveltestrap';
    </script>

<Card class="mb-3" id="hd-card-3">
    <CardHeader id="hd-card-header-3">
        <CardTitle id="card-title">Importa lista bambini da file Excel</CardTitle>
    </CardHeader>
    <CardBody>
        <Image alt="excel-icon" class="img-excel" src="/media_resources/dashboard_resources/excel.PNG"/>
        <CardText>
            Da questa sezione sarà possibile...
        </CardText>
        <span height=50px></span>
        <Input type="file" placeholder="Inserisci file Excel" id="excelfile-input" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"/>
    </CardBody>
</Card>

<svelte:head>
    <link rel="stylesheet" href="../restructured_css/card.css"/>
    <link rel="stylesheet" href="../tab_css/tab_excel.css"/>
    <!--Da aggiungere lo script-->
    <script src="https://unpkg.com/read-excel-file@4.x/bundle/read-excel-file.min.js"></script>
    <script src="../specific_page_js/tabbambiniexcel.js"></script>
</svelte:head>