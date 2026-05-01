document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("print-page-button")) {
        return;
    }

    var printButton = document.createElement("button");
    printButton.id = "print-page-button";
    printButton.type = "button";
    printButton.textContent = "Print Page";
    printButton.setAttribute("aria-label", "Print this page");
    printButton.title = "Print this page";
    printButton.style.position = "fixed";
    printButton.style.bottom = "1.25em";
    printButton.style.right = "1.25em";
    printButton.style.padding = "0.75em 1.25em";
    printButton.style.fontSize = "1rem";
    printButton.style.zIndex = "1000";
    document.body.appendChild(printButton);

    printButton.addEventListener("click", function () {
        window.print();
    });
});