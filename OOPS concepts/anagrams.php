<?php
$string1 = 'LISTEN';
$string2 = 'SILENT';
$splitted_string1 = str_split($string1);
$splitted_string2 = str_split($string2);

$result = array_diff($splitted_string1,$splitted_string2);
if(!empty($result)){
    echo "Your String is NOT Anagram";
}else{
    echo "Your String is Anagram";
}