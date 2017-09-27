<?php

$recepient = "autostock.p@ukr.net";
$sitename = "AutoStockParts";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["text"]);
$message = "Им'я: $name \nТелефон: $phone \nТекст: $text";

$pagetitle = "Нова заявка з сайту \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");