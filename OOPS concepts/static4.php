<?php
class greeting {
  public static $sad = '1';
  private $asad = '1';
  public function welcome() {
    echo $this->asad; //calling non static variable
    echo self::$sad; //calling static variable
}
}

$g = new greeting;
$g->welcome();
?>