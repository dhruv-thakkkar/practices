<?php
class A{
    function A(){
        echo "Inside A";
    }
}
class B extends A{
    function A(){
        echo parent::A();
    }
}
$ObjA = new A();
$ObjB = new B();
$ObjA->A();
$ObjB->A();
?>