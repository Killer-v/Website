let switchMode = document.getElementById("button_dark");

switchMode.onclick = function () {
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") == "style/style.css") {
        theme.href = "style/darkStyle.css";
    } else {
        theme.href = "style/style.css";
    }
}

const handleOnMouseMove = e => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
}

for(const card of document.querySelectorAll(".card")) {
    card.onmousemove = e => handleOnMouseMove(e);
}