<?php
interface ParentClass{
    public function abc();
}

Class Child1 implements ParentClass{
    public function abc(){
        echo "asd";
    }
}
$objChild1 = new Child1();
$objChild1->abc();
?>