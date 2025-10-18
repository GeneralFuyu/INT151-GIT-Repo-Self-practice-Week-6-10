document.addEventListener("DOMContentLoaded", () => {
      const background_color = localStorage.getItem("background_color");
      const font_color = localStorage.getItem("font_color");
      const font_size = localStorage.getItem("font_size");

      if (background_color) document.body.style.backgroundColor = background_color;
      if (font_color) document.body.style.color = font_color;
      if (font_size) {
        if (font_size === "small") { document.body.style.fontSize = "small" };
        if (font_size === "medium") { document.body.style.fontSize = "medium" };
        if (font_size === "large") { document.body.style.fontSize = "large" };
        document.getElementById("font_size").value = font_size;
      }

      if (background_color) document.getElementById("background_color").value = background_color;
      if (font_color) document.getElementById("font_color").value = font_color;

      document.getElementById("save").addEventListener("click", () => {
        const bg = document.getElementById("background_color").value;
        const font = document.getElementById("font_color").value;
        const size = document.getElementById("font_size").value;
        localStorage.setItem("background_color", bg);
        localStorage.setItem("font_color", font);
        localStorage.setItem("font_size", size);
        applySettings(bg, font, size);
      });

      document.getElementById("reset").addEventListener("click", () => {
        localStorage.clear();
        location.reload();
      });

      function applySettings(bg, font, size) {
        document.body.style.backgroundColor = bg;
        document.body.style.color = font;
        if (size === "small") { document.body.style.fontSize = "small" };
        if (size === "medium") { document.body.style.fontSize = "medium" };
        if (size === "large") { document.body.style.fontSize = "large" };
      }
    });
