// let switchMode = document.getElementById("button_dark");

// switchMode.onclick = function () {
//     let theme = document.getElementById("theme");

//     if (theme.getAttribute("href") == "style/style.css") {
//         theme.href = "style/darkStyle.css";
//     } else {
//         theme.href = "style/style.css";
//     }
// }

// const handleOnMouseMove = e => {
//     const { currentTarget: target } = e;

//     const rect = target.getBoundingClientRect(),
//         x = e.clientX - rect.left,
//         y = e.clientY - rect.top;
//     target.style.setProperty("--mouse-x", `${x}px`);
//     target.style.setProperty("--mouse-y", `${y}px`);
// }

// for (const card of document.querySelectorAll(".website")) {
//     card.onmousemove = e => handleOnMouseMove(e);
// }

document.getElementById("websites").onmousemove = e => {
    for (const card of document.getElementsByClassName("website")) {
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    }
    for (const card of document.querySelectorAll("website")) {
            card.onmousemove = e => handleOnMouseMove(e);

            };
}

let index = 0,
    interval = 1000;

const rand = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
    star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
    star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

    star.style.animation = "none";
    star.offsetHeight;
    star.style.animation = "";
}

for(const star of document.getElementsByClassName("magic-star")) {
    setTimeout(() => {
        animate(star);

        setInterval(() => animate(star), 1000);
    }, index++ * (interval / 3))
}