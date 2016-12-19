<?
if((isset($_POST['addevent_name'])&&$_POST['addevent_name']!="")&&(isset($_POST['addevent_phone'])&&$_POST['addevent_phone']!="")&&(isset($_POST['addevent_email'])&&$_POST['addevent_email']!="")&&(isset($_POST['addevent_message'])&&$_POST['addevent_message']!="")&&(isset($_POST['addevent_date'])&&$_POST['addevent_date']!="")&&(isset($_POST['addevent_title'])&&$_POST['addevent_title']!="")&&(isset($_POST['addevent_content'])&&$_POST['addevent_content']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
    $to = 'ganseast@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $subject = 'Обратный звонок'; //Загаловок сообщения
    $message = '
        <html>
            <head>
                <title>'.$subject.'</title>
            </head>
            <body>
                <p>Имя: '.$_POST['addevent_name'].'</p>
                <p>Телефон: '.$_POST['addevent_phone'].'</p>
                <p>E-mail: '.$_POST['addevent_email'].'</p>
                <p>Сообщение: '.$_POST['addevent_message'].'</p>
                <p>Дата: '.$_POST['addevent_date'].'</p>
                <p>Название: '.$_POST['addevent_title'].'</p>                        
                <p>Описание: '.$_POST['addevent_content'].'</p>                        
            </body>
        </html>'; //Текст нащего сообщения можно использовать HTML теги
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>