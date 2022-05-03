<?php
class ClassName {
  public static function staticMethod() {
    echo "Hello World!";
  }
  public  function asd() {
    echo "Hello World!";
  }
}
$ob = new ClassName();
$ob->staticMethod(); // normal way of calling.
ClassName::staticMethod(); //you can call static function this way
ClassName::asd(); //error
?>