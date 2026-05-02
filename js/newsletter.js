"use strict";

document.getElementById("newsletter-form").addEventListener("submit", (event) => {
	event.preventDefault();

	const firstName = document.getElementById("first-name").value.trim();
	const lastName = document.getElementById("last-name").value.trim();
	const email = document.getElementById("email").value.trim();

	if (email === "") {
		alert("Please enter your email address");
		return;
	}

	if (firstName === "") {
		alert("Please enter your first name");
		return;
	}

	if (lastName === "") {
		alert("Please enter your last name");
		return;
	}

	window.location.href =
		"confirmation.html?first-name=" +
		encodeURIComponent(firstName) +
		"&last-name=" +
		encodeURIComponent(lastName) +
		"&email=" +
		encodeURIComponent(email);
});
