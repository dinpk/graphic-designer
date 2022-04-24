function writeHeader() {
	document.write(
		"<header> " + 
		"<!-- <img id='logo' src='images/logo.png'> --> " + 
		"<a href='index.html'>Browse</a> " + 
		"<a href='design.html' target='_blank'>New Design</a> " + 
		"<a href='fonts.html'>Fonts</a> " + 
		"<a href='export.html' target='_blank'>Export</a> " + 
		"<a href='import.html' target='_blank'>Import</a> " + 
		"<a href='settings.html'>Settings</a> " + 
		"</header>"
		);
}

function showMessage(msg, color) {
	let message = document.createElement("div");
	let message_text = document.createTextNode(msg);
	message.appendChild(message_text);
	message.setAttribute("style", "width:200px;position:fixed;top:10px;left:50%;margin-left:-100px;font-family:Arial;font-weight:bold;font-size:15px;text-align:center;padding:5px 10px 5px 10px;border:1px solid " + color + ";border-radius:5px;color:" + color + ";background-color:lightyellow;");
	document.getElementsByTagName("body")[0].appendChild(message);
	setTimeout(function() {document.getElementsByTagName("body")[0].removeChild(message);},3000);
}
