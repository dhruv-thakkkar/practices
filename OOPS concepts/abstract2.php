<?php
abstract Class ParentClass{
    abstract public function intro($name) : string;
}

Class Child1 extends ParentClass{
    public function intro($name) : string {
        return "your choosen car is $name";
    }

}
$objChild1 = new Child1("Child1");
echo $objChild1->intro("asd");
?>