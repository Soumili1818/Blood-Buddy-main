<?php
	if($_SERVER['REQUEST_METHOD'] === "POST"){
		$name = trim($_REQUEST['name']);
		$email = trim($_REQUEST['mail']);
		$phone = trim($_REQUEST['phone']);
		$message = trim($_REQUEST['msg']);

		if($connection = mysqli_connect("localhost", "root", "")){
			mysqli_select_db($connection, "contactinfo");
			$sanitized_name = mysqli_real_escape_string($connection, $name);
			$sanitized_mail = mysqli_real_escape_string($connection, $email);
			$sanitized_phone = mysqli_real_escape_string($connection, $phone);
			$sanitized_message = mysqli_real_escape_string($connection, $message);

			$query = "INSERT INTO `contactinfo`(`name`, `email`, `phone`, `message`) VALUES ('$sanitized_name','$sanitized_mail','$sanitized_phone','$sanitized_message')";

			if(mysqli_query($connection, $query)){
				echo "Success";
			} else{
				echo "Failed";
			}
			mysqli_close($connection);
		}
	} else {
		printf("<script>history.back()</script>");
	}
?>