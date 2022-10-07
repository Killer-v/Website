let switchMode = document.getElementById("button_dark");

switchMode.onclick = function () {
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "style.css") {
        theme.href = "darkStyle.css";
    } else {
        theme.href = "style.css";
    }
}