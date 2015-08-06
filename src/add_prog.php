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
    }elseif ($file === '') {
        $data['status'] = 'error';
        $data['text'] = 'Добавьте картинку';
    }elseif ($projectUrl === '') {
        $data['status'] = 'error';
        $data['text'] = 'введите URL';
    }elseif ($text === '') {
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

