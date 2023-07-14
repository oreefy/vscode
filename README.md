# Standard Visual Studio Code setup

Welcome to [Oreefy](https://www.oreefy.com) standard "Visual Studio Code" setup.

## Plugins
- Software
  - [Visual Studio Code](https://code.visualstudio.com)
- Theme
  - [Andromeda](vscode:extension/EliverLara.andromeda), Select "Andromeda Colorizer"
  - [Material](vscode:extension/PKief.material-icon-theme) Icon Theme
- Languages
  - HTML
    - [HTML CSS Support](vscode:extension/ecmel.vscode-html-css)
    - [Auto Rename Tag](vscode:extension/steoates.autoimport)
  - CSS
    - [IntelliSense for CSS class names in HTML](vscode:extension/Zignd.html-css-class-completion)
    - [colorize](vscode:extension/kamikillerto.vscode-colorize)
    - [Tailwind CSS IntelliSense](vscode:extension/bradlc.vscode-tailwindcss)
  - JavaScript
    - [NodeJs](https://nodejs.org/en)
    - [npm Intellisense](vscode:extension/christian-kohler.npm-intellisense)
    - [Bundle Size](vscode:extension/ambar.bundle-size)
  - TypeScript
    - [Auto Import](vscode:extension/steoates.autoimport)
- Framework (NextJs)
  - [ES7+ React/Redux/React-Native snippets](vscode:extension/dsznajder.es7-react-js-snippets), Read [Docs](https://github.com/ults-io/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md)
- Database
  - [Prisma](vscode:extension/Prisma.prisma)
- Font
  - Operator Mono Medium
- [Tabnine AI Autocomplete for Javascript, Python, Typescript, PHP, Go, Java, Ruby & more](vscode:extension/TabNine.tabnine-vscode)
- [ESLint](vscode:extension/dbaeumer.vscode-eslint)
- [Live Preview](vscode:extension/ms-vscode.live-server)
- [Live Server](vscode:extension/ritwickdey.LiveServer)
- [Path Autocomplete](vscode:extension/ionutvmi.path-autocomplete)
- [Prettier - Code formatter](vscode:extension/esbenp.prettier-vscode)
- [Thunder Client](vscode:extension/rangav.vscode-thunder-client)
- [Lorem ipsum](vscode:extension/Tyriar.lorem-ipsum)
- [Better Comments](vscode:extension/aaron-bond.better-comments)

## JSON Settings

```json
{
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
  "terminal.integrated.smoothScrolling": true
}
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
