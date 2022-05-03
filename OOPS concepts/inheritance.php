<?php 
class Foo
{
    public function printItem($string)
    {
        echo 'Foo: ' . $string . PHP_EOL. '</br>';
    }
    
    public function printPHP()
    {
        echo 'PHP is great.' . PHP_EOL. '</br>';
    }
}

class Bar extends Foo
{
    public function printItem($string)
    {
        echo 'Bar: ' . $string . PHP_EOL. '</br>';
    }
}

$foo = new Foo();
$bar = new Bar();
$foo->printItem("asd");
$bar->printItem("asd");
$foo->printPHP();
$bar->printPHP();
echo "==============";

class Person
{
    public $name;
    protected $age;
    private $phone;

    public function talk(){
        //Do stuff here
    }

    protected function walk(){
        //Do stuff here
    }

    private function swim(){
        //Do stuff here
    }
}

class Tom extends Person
{
    /*Since Tom class extends Person class this means
        that class Tom is a child class and class person is
        the parent class and child class will inherit all public
        and protected members(properties and methods) from
        the parent class*/

     /*So class Tom will have these properties and methods*/

     //public $name;
     //protected $age;
     //public function talk(){}
     //protected function walk(){}

     //but it will not inherit the private members
     //this is all what Object inheritance means
}
?>