<?php
abstract Class ParentClass{
    public $name;
    public  function __construct($Child1){
         $this->name = $Child1;
    }
    abstract public function intro() : string;
}

Class Child1 extends ParentClass{
    public function intro() : string {
        return "your choosen car is $this->name";
    }

}
$objChild1 = new Child1("Child1");
echo $objChild1->intro();
?>