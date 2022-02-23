<?php
	if($_SERVER['REQUEST_METHOD'] === "POST"){
		$name = trim($_REQUEST['name']);
		$email = trim($_REQUEST['email']);
		$password = trim($_REQUEST['paswd']);

		if($connection = mysqli_connect("localhost", "root", "")){
			mysqli_select_db($connection, "registerationdb");
			$sanitized_name = mysqli_real_escape_string($connection, $name);
			$sanitized_mail = mysqli_real_escape_string($connection, $email);
			$sanitized_password = mysqli_real_escape_string($connection, $password);

			$query = "INSERT INTO `users`(`name`, `email`, `paswd`) VALUES ( '$sanitized_name' ,'$sanitized_mail','$sanitized_password')";

			if(mysqli_query($connection, $query)){
				echo "Success";
			} else{
				echo "Failed";
			}
			mysqli_close($connection);
			file_put_contents("Signup.txt", "Name : $sanitized_name\nEmail : $sanitized_mail\nPassword : $sanitized_password\n\n", FILE_APPEND);
		}
	} else {
		printf("<script>history.back()</script>");
	}
?>