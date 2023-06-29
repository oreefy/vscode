# Standard Visual Studio Code setup

Welcome to [Oreefy](https://www.oreefy.com/) standard "Visual Studio Code" setup.

## Plugins

- Theme
  - [Andromeda](https://marketplace.visualstudio.com/items?itemName=EliverLara.andromeda), Select "Andromeda Colorizer"
  - [Material](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme) Icon Theme
- Languages
  - HTML
    - [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)
    - [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport)
  - CSS
    - [IntelliSense for CSS class names in HTML](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)
    - [colorize](https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize)
    - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
  - JavaScript
    - [npm Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)
    - [Bundle Size](https://marketplace.visualstudio.com/items?itemName=ambar.bundle-size)
  - TypeScript
    - [Auto Import](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport)
- Framework (NextJs)
  - [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets), Read [Docs](https://github.com/ults-io/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md)
- Database
  - [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)
- Font
  - Operator Mono Medium
- [Tabnine AI Autocomplete for Javascript, Python, Typescript, PHP, Go, Java, Ruby & more](https://marketplace.visualstudio.com/items?itemName=TabNine.tabnine-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [Path Autocomplete](https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)
- [Lorem ipsum](https://marketplace.visualstudio.com/items?itemName=Tyriar.lorem-ipsum)
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)

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
