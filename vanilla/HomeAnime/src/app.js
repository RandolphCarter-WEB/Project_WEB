import Container from "./component/container.js";
import Menu from "./component/menu.js";

class App {
    constructor(item) {
        const app = document.querySelector(".viewContainer");
        if(!app) return;
        new Menu(app, item);

        if(!document.querySelector("#main")) {
            const main = document.createElement("div");
            main.setAttribute("id", "main");

            app.append(main);
        }

        const main = document.querySelector("#main");
        for(let i = 0; i < 4; i++) {
            new Container(main, [i, item[i]]);
        }
    }
}

const menuTitle = ["About", "Project", "Contact", "Inject"];
new App(menuTitle);