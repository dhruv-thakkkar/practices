<?php

class A{

    function A(){
        echo "A";
    }
}
class B extends A{

    function __construct(){
        echo "B";
    }
}

$objA = new A();
$objB = new B();
?>