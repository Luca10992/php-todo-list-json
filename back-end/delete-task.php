<?php

$index_delete_task = (int) $_POST['index'];

$json_todoList = file_get_contents('./todolist.json');
$json_todoList_array = json_decode($json_todoList, true);
unset($json_todoList_array[$index_delete_task]);
$json_todoList_array = array_values($json_todoList_array);

$json_result = json_encode($json_todoList_array);
file_put_contents('./todolist.json', $json_result);

header('Content-Type: application/json');

echo $json_result;

?>