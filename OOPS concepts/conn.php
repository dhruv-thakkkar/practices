<?php

Class DB{
    function __construct(){
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "test";
        $conn = mysqli_connect($servername, $username, $password, $dbname);
        $this->conn = $conn;
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }
    }
   
    function select_customers(){
        $sql = "SELECT * FROM customers";
        $result = mysqli_query($this->conn, $sql);
    }
    

}
$dbObj = new DB();
$dbObj->select_customers();


?>