import Component from "../core/component.js";
import event from "../event/event.js";

export default class Container extends Component {
    $index;

    constructor(target, input) {
        super(target, input);
    }

    setUp([index, item]) {
        this.$index = (index+1).toString().padStart(2, "0");
        this.$title = item;
        this.src = "./resource/assets/vid" + this.$index + ".mp4";
    }

    render() { this.$target.innerHTML += this.template(); }

    template() {
        return `
            <section id="${this.$index}">
                <div class="constainer${this.$index}Title">
                    <p><span id="titleNum${this.$index}">${this.$index}</span><span id="title${this.$index}"> ${this.$title}</span></p>
                    <hr id="hr${this.$index}">
                    <p class="titlenum">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus quaerat at iure nobis cupiditate placeat sint repudiandae itaque, aliquam esse et, asperiores similique. Ad, temporibus quasi! Sed reprehenderit itaque qui.
                    </p>
                </div>

                <video
                    id="video${this.$index}"
                    src="${this.src}"
                    width="200"
                    muted="true"
                    loop></video>
            </section>
        `;
    }

    setEvent() {
        const sections = document.querySelectorAll("section");

        sections.forEach(section => {
            //TODO: event section id => tag id querySelectorAll()
            section.addEventListener("mouseover", (e) => {
                event.isHover(e.target.id, true);
                event.animeHover(e.target.id, true);
            });

            section.addEventListener("mouseleave", (e) => {
                event.isHover(e.target.id, false);
                event.animeHover(e.target.id, false);
            });
        })
    }
}