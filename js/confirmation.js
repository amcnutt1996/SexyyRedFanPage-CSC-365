"use strict";

const params = new URLSearchParams(window.location.search);
const userData = {
  first: params.get("first-name"),
  last: params.get("last-name"),
  email: params.get("email"),
};

const nameOutput = (document.getElementById("name").textContent =
  " " + userData.first + " " + userData.last);
const emailOutput = (document.getElementById("email").textContent =
  "" + userData.email + " ");

const homeButtom = document.getElementsByTagName('button')[0].addEventListener("click", () => {
  window.location.href = '../index.html'
})
