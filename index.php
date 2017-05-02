<?php session_start();
$_SESSION['id']= 5;

?>
<!DOCTYPE html>
<html>
<head>
<title>Login</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="Magical Login Form template Responsive, Login form web template,Flat Pricing tables,Flat Drop downs  Sign up Web Templates, Flat Web Templates, Login sign up Responsive web template, SmartPhone Compatible web template, free web designs for Nokia, Samsung, LG, SonyEricsson, Motorola web design" />


 <!-- Custom Theme files -->
<link href="style.css" rel="stylesheet" type="text/css" media="all" />
<!-- //Custom Theme files -->
<!-- web font -->
<link href="http://netdna.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="https://www.gstatic.com/firebasejs/3.6.9/firebase.js"></script>
<script src="http://91.234.35.26/iwiki-admin/v1.0.0/admin/js/jquery.nicescroll.min.js"></script>
<script src="main.js"></script>
<link href='//fonts.googleapis.com/css?family=Text+Me+One' rel='stylesheet' type='text/css'>
<!-- //web font -->
</head>
<body>
	<!-- main -->
	<div class="main-w3layouts wrapper">
		<h1>Magical Login Form</h1>
		<div class="main-agileinfo">
			<div class="agileits-top"> 
				<form  method="post" action="session.php" id="loginform"> 
					<input class="text" type="text" name="email" id="loginemail" placeholder="Username" required="">
					<input class="text" type="password" name="password" id="loginpassword" placeholder="Password" required="">
					<div class="wthree-text"> 
						<div class="clear"> </div>
					</div>   
					<a type="button" id="submitme" class="btn btn-primary"> Login </a>
				</form>
				<!-- <p>Don't have an Account? <a href="#"> Signup Now!</a></p> -->
			</div>	 
		</div>	
		
		<ul class="w3lsg-bubbles">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</div>	
	<!-- //main --> 
</body>
</html>