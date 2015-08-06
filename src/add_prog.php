<?php  
    $name = $_POST['projectName'];
    $file = $_POST['fileurl'];
    $projectUrl = $_POST['projectUrl'];
    $text = $_POST['text'];
    $data = array();
    
    //проверка полей
    if ($name === '') {
        $data['status'] = 'error';
        $data['text'] = 'Заполните имя!';
    }else{
        $data['status'] = 'OK';
        $data['text'] = 'OK';
    }

    // if ($file === '') {
    //     $data['status'] = 'error';
    //     $data['text'] = 'Добавьте картинку';
    // }else{
    //     $data['status'] = 'OK';
    // }

    if ($projectUrl === '') {
        $data['status'] = 'error';
        $data['text'] = 'введите URL';
    }else{
        $data['status'] = 'OK';
        $data['text'] = 'OK';
    }

    if ($text === '') {
        $data['status'] = 'error';
        $data['text'] = 'Опишите проект';
    }else{
        $data['status'] = 'OK';
        $data['text'] = 'OK';
    }

    header("Content-Type: application/json");
    echo json_encode($data);
    exit;
 ?> 

