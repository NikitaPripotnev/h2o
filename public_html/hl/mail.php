<?php

$method = $_SERVER['REQUEST_METHOD'];

//Script Foreach
$c = true;
if ( $method === 'POST' ) {

	$project_name = trim($_POST["project_name"]);
	$admin_email  = trim($_POST["admin_email"]);
	$form_subject = trim($_POST["form_subject"]);



	 //создаем переменные токена и id чата
  $token = "633903732:AAFeEA1TAZrUxGRzMNjpO0AzGjmiev341LI";
  $chat_id = "-308965356";

	foreach ( $_POST as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
			</tr>
			";
			//создаем переменную для telegramm - чтоб сообщение не было таблицей
 $txt .= "<b>".$key."</b> ".$value."%0A";
		}
	}
} else if ( $method === 'GET' ) {

	$project_name = trim($_GET["project_name"]);
	$admin_email  = trim($_GET["admin_email"]);
	$form_subject = trim($_GET["form_subject"]);

	foreach ( $_GET as $key => $value ) {
		if ( $value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject" ) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
			</tr>
			";
		}
	}
}

//отправка в телеграмм
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($project_name).' <'.www.'>' . PHP_EOL .
'Reply-To: '.ddd.'' . PHP_EOL;

$admin_email = $admin_email . ", hl.leadcollector@gmail.com";

mail($admin_email, adopt($form_subject), $message, $headers );


//WEB-HOOK---------------------------------------\
if($_POST){

    $url = 'http://web-hooks.height-line.ru/web-hooks/h2o-cleaning/qooqle-sheets.php';
    $data = array(
        'name' => $_POST['имя'],
        'phone' => $_POST['телефон'],
        'utm_source' => $_POST['utm_source'],
        'utm_medium' => $_POST['utm_medium'],
        'utm_campaign' => $_POST['utm_campaign']
    );

    // use key 'http' even if you send the request to https://...
    $options = array(
        'http' => array(
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data)
        )
    );
    $context  = stream_context_create($options);
    $result = file_get_contents($url, false, $context);

//	if ($result === FALSE) { /* Handle error */ }
//	var_dump($result);

}
//WEB-HOOK---------------------------------------/
