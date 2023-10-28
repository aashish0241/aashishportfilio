<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Set the recipient email address
    $to = "timsinaaashish6@gmail.com"; // Change this to the recipient's email address

    // Set the subject of the email
    $subject = "Contact Form Submission from $name";

    // Compose the email message
    $message = "Name: $name\nEmail: $email\n\n$message";

    // Set the headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Email could not be sent. Please try again later.";
    }
}
?>
