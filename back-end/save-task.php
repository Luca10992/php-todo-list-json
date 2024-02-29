<?php

$input_text = $_POST['newTask'];

$object = [
    'done' => false,
    'name' => $input_text
];

$json_add_task = file_get_contents('./todolist.json');
$json_add_task_array = json_decode($json_add_task);

$json_add_task_array[] = $object;
$json_result = json_encode($json_add_task_array);

file_put_contents('./todolist.json', $json_result);

header('Content-Type: application/json');

echo $json_result;

?>