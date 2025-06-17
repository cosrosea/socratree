// js/render_convo.js

document.addEventListener("DOMContentLoaded", () => {
    fetch("convo/example_convo.json")
      .then(res => res.json())
      .then(convo => {
        const lang = localStorage.getItem("lang") || "en";
        const container = document.getElementById("conversation");
  
        convo.forEach(node => {
          const div = document.createElement("div");
          let text = "";
  
          if (node.content.original.lang === lang) {
            text = node.content.original.text + " 🌐 [Original]";
          } else {
            const trans = (node.content.translations || []).find(t => t.lang === lang);
            if (trans) {
              const method = trans.method === "AI"
                ? "AI-translated"
                : `by ${trans.translator}`;
              text = trans.text + ` 🌐 [Translated from ${node.content.original.lang} via ${method}]`;
            } else {
              text = node.content.original.text + " 🌐 [Original]";
            }
          }
  
          div.innerText = text;
          container.appendChild(div);
        });
      });
  });
  