// js/lang_switch.js

document.addEventListener("DOMContentLoaded", () => {
    const lang = localStorage.getItem("lang") || "en";
    document.getElementById("lang-selector").value = lang;
  
    fetch(`lang/${lang}.json`)
      .then(res => res.json())
      .then(data => {
        document.getElementById("title").innerText = data.title;
        document.getElementById("tagline").innerText = data.tagline;
      });
  });
  
  document.getElementById("lang-selector").addEventListener("change", function() {
    localStorage.setItem("lang", this.value);
    location.reload();
  });
  