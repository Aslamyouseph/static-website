<?php
$host="localhost";
$user="root";
$pass="";
$database="form1";


$connection =  mysqli_connect($host,$user,$pass,$database);

if (!$connection) {
    die("Data base is not connected : please try again  " .mysqli_connect_error());
}

$firstname=$_POST["firstname"];
$lastname=$_POST["lastname"];
$address=$_POST["address"];
$country=$_POST["country"];
$phone=$_POST["phone"];
$email=$_POST["email"];
$Feedback=$_POST["Feedback"];

$sql = "INSERT INTO mini_table (name,last_name,address,country,phone,email,feedback) values ('$firstname','$lastname','$address','$country','$phone','$email','$Feedback')";  

$result=mysqli_query($connection,$sql);
if (!$result) {
    die("Values are not inserted to the database: please try again " . mysqli_connect_error());
}

mysqli_close($connection);
?>


