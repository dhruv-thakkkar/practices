<?php
class Fruit {
  public $name ="asd";
  public $color;
  public function __construct($name, $color) {
    $this->name = $name;
    $this->color = $color; 
  }
  protected function intro() {
    echo "The fruit is {$this->name} and the color is {$this->color}."."</br>"; 
  }
}

class Strawberry extends Fruit {
  public function message() {
    echo "Am I a fruit or a berry? "; 
    $this->intro();
  }
}

$strawberry = new Strawberry("Strawberry", "red");  
$fruit = new dFruit("Apple", "red");
$strawberry->message(); 
?>
