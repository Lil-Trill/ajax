<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Клиент-серверное приложение</title>
    <link rel="stylesheet" href="css/style.css">
    <script defer src="js/script.js"></script>
    <script defer src="fetch.js"></script>
</head>
<body>
    <header>
        <p class = "profile">
            <a href="#form-auth">Авторизоваться</a>
        </p>
    </header>
<form id="form-insert-student">
    <input type="text" name="fname" id="fname" placeholder="введите имя" required><br>
    <input type="text" name="lname" id="lname" placeholder="введите фамилию" required><br>
    <input type="number" name="age" id="age" placeholder="введите возраст" required><br>
    <input type="radio" name="gender" id="m" value="m" checked>
    <label for="m">мужской</label>
    <input type="radio" name="gender" id="f" value="f">
    <label for="f">женский</label><br>
    <input type="submit" value="добавить">
</form>
<div class="content">
<?php

require_once ("api/config.php");

//соединение с БД
$connect = new mysqli(HOST, USER, PASS, DB);
if($connect->connect_error){
    exit("Ошибка подключения к БД: ".$connect->connect_error);
}
//установить кодировку
$connect->set_charset("utf8");

//код запроса
$sql = "SELECT * FROM `students`";

//выполнить запрос
$result = $connect->query($sql);

//вести результаты запроса на страницу
while ($row = $result->fetch_assoc()){
    echo "<div class='student' data-id='$row[student_id]'>
            $row[lname], $row[fname], $row[gender], $row[age]
            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-suit-heart-fill like' viewBox='0 0 16 16'>
  <path d='M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z'/>
</svg>
<span class='num-like'>$row[num_like]</span>
        </div>";
}

?>
</div>   
<div class="block"></div>

<div class="message">
    fdhydfthfct
</div>

<form method="POST" action="api/auth.php" id="form-fetch">
    <input type="text" id="login" name="login" placeholder="enter a login" required><br>
    <input type="password" id="password" name="password" placeholder="enter a password" required><br>
    <input type="submit" value="Log In">
</form>


</body>
</html>