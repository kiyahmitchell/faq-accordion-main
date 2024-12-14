var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Close all active panels except the clicked one */
    var allActivePanels = document.querySelectorAll(".accordion.active");
    for (var j = 0; j < allActivePanels.length; j++) {
      if (allActivePanels[j] !== this) {
        allActivePanels[j].classList.remove("active");
        allActivePanels[j].nextElementSibling.style.maxHeight = null;
      }
    }

    /* Toggle the state of the clicked panel */
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
