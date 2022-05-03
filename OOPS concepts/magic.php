<?php 

class A {
    function __wakeup(){
        echo "in magic";
    }
}

$objA = new A();
?>