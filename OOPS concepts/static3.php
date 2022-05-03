<?php
class greeting {
  public static $sad = '1';
  public function welcome() {
    echo "Hello World!";
  }
}

$g = new greeting;
echo $g->sad; //error
echo greeting::$sad; //error
?>