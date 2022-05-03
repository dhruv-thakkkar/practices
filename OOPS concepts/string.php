<?php
$i = 'abc';
$j = 'def';
[$j,$i] = [$i,$j];
echo $j;
echo "</br>";
echo $i;