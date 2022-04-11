const title = document.getElementById("hero-title");
console.log(title);
// mengganti konten html
title.innerHTML = "New Title";

// mengganti style css
title.style.color = "blue";
title.style.border = "1px solid black";

// memberikan reaksi dari suatu aksi
const buttonLayout = document.getElementById("btn-layout");
buttonLayout.addEventListener("click", function () {
  alert("Hello World");
});

function showAlert() {
  alert("Button layouting telah diklik!");
}
