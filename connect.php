<?php

    // PHP code based heavily on Tariqu tutorial on Youtube
    // https://youtu.be/2HVKizgcfjo

    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $street1 = $_POST['street1'];
    $street2 = $_POST['street2'];
    $city = $_POST['city'];
    $state = $_POST['state'];
    $zipCode = $_POST['zip'];
    $country = $_POST['country'];
    //$gender = $_POST['gender'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $number = $_POST['phone'];


    // Database connection
    $conn = new mysqli('localhost', 'root','', 'capstone');

    if($conn->connect_error){
            echo "$conn->connect_error";
            die("Connection failed : ". $conn->connect_error);        
    }   else {

        $stmt = $conn->prepare("insert into registration(firstName, lastName, street1, street2, city, state, zipCode, country, email, password, number) values(?,?,?,?,?,?,?,?,?,?,?)");
        $stmt->bind_param("ssssssisssi", $firstName, $lastName, $street1, $street2, $city, $state, $zipCode, $country, $email, $password, $number);
        $execval = $stmt->execute();
        echo $execval;
        echo "Registration successful";
        $stmt->close();
        $conn->close();
    }
?>