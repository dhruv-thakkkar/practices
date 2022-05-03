<?php 

class ParentA{
    public static $var = 123;
}

class ChildB extends ParentA{

    public function run(){
        echo parent::$var;
    }
}

$objB = new ChildB();
$objB->run();
echo "</br>";
echo ChildB::$var;
?>