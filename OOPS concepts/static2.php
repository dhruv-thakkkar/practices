<?php
class greeting {
  public static function welcome() {
    echo "Hello World!";
  }

  public function __construct() {
    self::welcome(); //both workds
    $this->welcome();  //both workds
  }
}

class greeting2{
    public function asd(){
        greeting::welcome(); //can call from class name
    }

}
$g = new greeting();
$greet2 = new greeting2();
$greet2->asd();
?>