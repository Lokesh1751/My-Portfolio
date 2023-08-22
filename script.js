const btn = document.getElementById("md");
let drk = false;
const icon = document.getElementById("ic");
const icon1 = document.getElementById("ic1");
const icon2 = document.getElementById("ic2");
const icon3 = document.getElementById("ic3");
const txt = document.getElementById("mysk");
const tt = document.getElementById("h");

const prog = document.getElementById("progbar");
const list = prog.querySelectorAll("li h3");

btn.addEventListener("click", () => {
  drk = !drk;

  if (drk) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    icon.style.color = "black";
    icon2.style.color = "black";
    icon1.style.color = "black";
    icon3.style.color = "black";
    btn.innerHTML = "🌙";
    btn.style.backgroundColor = "rgb(0, 0, 33)";
    txt.style.color = "black";
    tt.style.color = "white";
    list.forEach(h3 => {
        h3.style.color = 'black';
    });
  } else {
    document.body.style.backgroundColor = "rgb(0, 0, 33)";
    document.body.style.color = "white";
    icon.style.color = "white";
    icon1.style.color = "white";
    icon2.style.color = "white";
    icon3.style.color = "white";
    btn.innerHTML = "☀️";
    btn.style.backgroundColor = "white";
    txt.style.color = "white";
    tt.style.color = "white";
    list.forEach(h3 => {
        h3.style.color = 'white';
    });
  }
});
