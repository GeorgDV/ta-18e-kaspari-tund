<?php
//include("Cat.php"); /*INCLUDE PUHUL TÖÖTAB KOOD EDASI kA SIIS KUI INCLUDE EI TÖÖTA*/
/*require("Dog.php"); /*REQUIERI FAILIMISEL FAILIB KA KOHE ÜLEJÄÄNUD KOOD*/
/*require_once("Horse.php") /*REQUIERIB KORRA JA EI PUUTU SELLEGA SEOTUD KOODI ROHKEM KUI 1 KORD*/

echo("\n28.01.2020 ------\n");
/*
echo("\nThis will also show when include fails..\n\n\n");
$sips = new Cat();
var_dump($sips);
*/

echo("\n------------NEW POINT TO LEARN-----------\n\n");

spl_autoload_register(function($class){ /*AUTOMATED REQUIREING*/
    require($class . ".php");
});

$potsataja = new Cat();
var_dump($potsataja);