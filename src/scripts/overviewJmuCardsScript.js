var acc = document.getElementsByClassName("involvementCard");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
  });
}