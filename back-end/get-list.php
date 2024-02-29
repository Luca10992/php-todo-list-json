<?php

$json_list = file_get_contents('./todolist.json');

header('Content-Type: application/json');

echo $json_list;

?>