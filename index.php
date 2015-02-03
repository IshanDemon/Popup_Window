<html>
<head>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
<script type="text/javascript" src="src/demon_popup.js"></script>
<script type="text/javascript">
	$(document).ready(function(){
		$('#me').click(function(){
			$.demon_popup({
				path: 'connect.php',
				callback: function(){
					alert("Reload page after popup window is closed.")
					window.location.reload();
				}
			});
		});
	});
</script>
</head>
<body>
<button id='me'>Click me </button>
</body>
</html>