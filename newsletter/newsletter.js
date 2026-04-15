// todo: make this handle the forum data entry and send to confirmation page
"use strict";
//TODO: add input validation for empty values
document.getElementsByTagName("button")[0].addEventListener("click", () => {
	let firstName = document.getElementById("first-name").value;
	let lastName = document.getElementById("last-name").value;
	let email = document.getElementById("email").value;

	email == ""
		? alert("please enter your email address")
		: firstName == ""
			? alert("Please enter your first name")
			: (lastName = ""
					? alert("enter your last name")
					: (window.location.href =
							"confirmation.html?first-name=" +
							firstName +
							"&last-name=" +
							lastName +
							"&email=" +
							email));
});
