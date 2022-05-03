<?php 
/* 
Private can only be used in the class itself.

Protected can only be used in the class itself and child classes.

Public can be used anywhere.

*/
class A{
    private $asd = 'ass';
    public function getMethodA(){
        echo $this->asd;
    } 
}
$objA = new A();
$objA->getMethodA();
?>

