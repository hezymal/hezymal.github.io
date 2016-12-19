<?
if((isset($_POST['feedback_name'])&&$_POST['feedback_name']!="")&&(isset($_POST['feedback_phone'])&&$_POST['feedback_phone']!="")&&(isset($_POST['feedback_mail'])&&$_POST['feedback_mail']!="")&&(isset($_POST['feedback_text'])&&$_POST['feedback_text']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
    $to = 'ganseast@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $subject = 'Обратный звонок'; //Загаловок сообщения
    $message = '
        <html>
            <head>
                <title>'.$subject.'</title>
            </head>
            <body>
                <p>Имя: '.$_POST['feedback_name'].'</p>
                <p>Телефон: '.$_POST['feedback_phone'].'</p>
                <p>E-mail: '.$_POST['feedback_mail'].'</p>
                <p>Сообщение: '.$_POST['feedback_text'].'</p>                       
            </body>
        </html>'; //Текст нащего сообщения можно использовать HTML теги
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>