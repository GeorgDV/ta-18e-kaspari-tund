<?php
echo ("\nPHP First Testing Code - 21.01.20 :)\n\n");

echo ("Hello World!\n");
echo ('Hello World!\n');
echo ("\n\n");


$number = 42;
echo ("Hello number $number!\n");
echo ('Hello number $number!');


echo ("\n\n"."String nr 1;"."String nr 2\n");


$startString = "a";
echo("\n\nWant the alphabet? Here you go..\n");
echo "*a\n";
for ($i = 0; $i < 25; $i++) {
    $startString++;
    echo "*".$startString."\n";
}
echo ("\n\n");


class Cat{
    /**
     * @var string
     */

    private string $name;
    public static $count = 0;

    public function __construct(string $name){
        $this->name = $name;
        self::$count++;
    }

    public function meow(){
        echo ("\nKass teeb - Mjäu.\n\n");
    }

    public function pet(){
        //add happiness to cat
        return $this;
    }

}


$sips = new Cat("Sips");
$sips ->age = 2; /*SET NEW PROPERTY DYNAMICALLY*/
$sips ->meow(); /*CALL FUNCTION FROM CAT OBJECT*/
var_dump($sips);/*DECONSTRUCT OBJECT*/ 
var_dump($sips::$count);/*DECONSTURCT COUNT INTEGER - count = 1*/

$nuustik = new Cat("Nuustik");
$nuustik ->age = 4;
$nuustik ->meow();
var_dump($nuustik::$count);
var_dump(Cat::$count); /*count = 2*/ 

Cat::meow();

//$sips::pet()->pet()->pet();
