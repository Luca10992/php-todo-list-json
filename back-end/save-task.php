<?php

$input_text = $_POST['newTask'];

$object = [
    'name' => $input_text,
    'done' => false
];

$json_todoList = file_get_contents('./todolist.json');
$json_todoList_array = json_decode($json_todoList);

$json_todoList_array[] = $object;
$json_result = json_encode($json_todoList_array);

file_put_contents('./todolist.json', $json_result);

header('Content-Type: application/json');

echo $json_result;

?>