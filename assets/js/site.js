// Theme toggle: flips data-theme on <html> and remembers the choice.
(function () {
  var button = document.querySelector(".theme-toggle");
  if (!button) return;
  button.addEventListener("click", function () {
    var root = document.documentElement;
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
})();

// CV page: "Save as PDF" opens the print dialog with the print stylesheet.
(function () {
  var button = document.querySelector("[data-print]");
  if (button) button.addEventListener("click", function () { window.print(); });
})();
