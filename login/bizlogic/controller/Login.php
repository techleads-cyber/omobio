<?php    
header("Access-Control-Allow-Origin: http://localhost:3000");  
header("Access-Control-Allow-Credentials:true");
header('Content-type: application/json');  
session_start();
require_once("../includes/fonctions.php");
require_once("../modele/userManager.php"); 
  
    //var_dump($_SESSION);
    //echo $_SESSION['email_user'] ;


    
    $json = file_get_contents('php://input');
     
     //  Store JSON into $obj variable.
    $obj = json_decode($json,true);
     
    
    //$j = var_dump($_SESSION);

    if( isset( $_SESSION['id_user'])){
        $LoginMsg = "Login succes";  
    }else
        $LoginMsg = "You must be Login";


        $LoginMsg = json_encode($LoginMsg);
    echo($LoginMsg); 
 ?>