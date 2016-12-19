<?
if((isset($_POST['txtname'])&&$_POST['txtname']!="")&&(isset($_POST['txtphone'])&&$_POST['txtphone']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
    $to = 'mirkomforta5@mail.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $subject = 'Обратный звонок'; //Загаловок сообщения
    $message = '
        <html>
            <head>
                <title>'.$subject.'</title>
            </head>
            <body>
                <p>Имя: '.$_POST['txtname'].'</p>
                <p>Телефон: '.$_POST['txtphone'].'</p>                        
            </body>
        </html>'; //Текст нащего сообщения можно использовать HTML теги
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>