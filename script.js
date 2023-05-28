//text

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

function startAnimation() {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    const h1Element = document.querySelector("h1");
    h1Element.innerText = h1Element.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return h1Element.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= h1Element.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
}

//cursor

const blob = document.getElementById("blob")

document.body.onpointermove = event => {
    const{ clientX, clientY } = event;

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    },{duration: 3000, fill: "forwards"});
}

//cards

document.getElementById("cards").onmousemove = e => {
  for(const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };
}

setInterval(startAnimation, 3000);
console.log("R u ok?");

