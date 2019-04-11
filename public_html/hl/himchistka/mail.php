<?php
$s='';
$message='Заказ с сайта:'."\r\n";
try {
    $to = "h2o.uborka@gmail.com"; // адрес куда отправлять письмо
    $subject = "Отправка формы с сайта"; // заголовок письма
    $mas_name = ($_POST["name"]); //массив name input
    $mas_val = ($_POST["val"]); // массив значений
    foreach ($mas_name as $key => $name) {
        $val = $mas_val[$key]; // получаем значение по ключу массива(ввод пользователя)
                $message = $message .$name.": " . $val . "\r\n";
    }

$headers  = "Content-type:  text/plain; charset=utf-8 \r\n";
mail($to, $subject, $message, $headers);
}
catch (Exception $e) {
    $s = "Ошибка отправки сообщения";
}
if ($s=='') $s='Ваше сообщение отправлено!';
echo $s;
?>