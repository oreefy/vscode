import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.json({
    project: "VS Code Oreefy Standard Setup",
    description: "Visual Studio Code standard setup of Oreefy",
    repository: "git+https://github.com/oreefy/vscode.git",
    author: "Md. Tahmidullah",
    message: "Read README.md file. First install the Extensions then pest the json settings into the vscode.",
    "vscode json settings": {
      //Default terminal Git Bash
      "terminal.integrated.defaultProfile.windows": "Git Bash",
      //Format On Save
      "editor.formatOnSave": true,
      //Auto save on after delay
      "files.autoSave": "afterDelay",
      //Andromeda Colorizer Theme
      "workbench.colorTheme": "Andromeda Colorizer",
      //Material icon
      "workbench.iconTheme": "material-icon-theme",
      //Font Ligatures
      "editor.fontLigatures": true,
      //Operator Mono Font
      "editor.fontFamily": "'Operator Mono Light', 'monospace'",
      //Font Size
      "editor.fontSize": 18,
      //Mouse Wheel Zoom
      "editor.mouseWheelZoom": true,
      //Font Line Height
      "editor.lineHeight": 2,
      //Cursor Blinking
      "editor.cursorBlinking": "expand",
      //Cursor Width
      "editor.cursorWidth": 3,
      //Cursor Moving Animation
      "editor.cursorSmoothCaretAnimation": "explicit",
      //Default Code Formatter
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      //Format On Paste
      "editor.formatOnPaste": true,
      //Smooth Scrolling
      "editor.smoothScrolling": true,
      //Menu Bar Customization
      "window.menuBarVisibility": "compact",
      //Bottom Status Bar Customization
      "workbench.statusBar.visible": false,
      //1x zoom vs code layout
      "window.zoomLevel": 1,
      //Terminal Smooth Scrolling
      "terminal.integrated.smoothScrolling": true,
    },
    license: "MIT",
  });
  res.end();
});
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
