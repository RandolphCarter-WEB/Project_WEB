import Component from "../core/component.js";
import event from "../event/event.js";

export default class Menu extends Component {
    constructor(target, input) {
        super(target, input);
    }

    setUp(input) {
        this.$item = [ ...input];
    }

    template() {
        return `
            <nav>
                <div id="Logo">
                    LOGO
                </div>

                <ul id="menu">
                    ${this.$item.map((element, index) => {
                        return `<li id="${index}"><span class="itemNum">${(index+1).toString().padStart(2, "0")}</span> ${element}</li>`
                    }).join("\n")}
                </ul>
            </nav>
        `;
    }

    setEvent() {
        const menuList = document.querySelectorAll("#menu li");

        menuList.forEach(menu => {
            menu.addEventListener("mouseover", (e) => {
                const id = (Number.parseInt(e.target.id) + 1).toString().padStart(2,"0");
                event.isHover(id, true);
                event.animeHover(id, true);
            });

            menu.addEventListener("mouseleave", (e) => {
                const id = (Number.parseInt(e.target.id) + 1).toString().padStart(2,"0");
                event.isHover(id, false);
                event.animeHover(id, false);
            });
        });
    }
}