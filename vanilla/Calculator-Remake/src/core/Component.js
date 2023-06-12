export default class Component extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.setEvent();
    }

    render() { this.innerHTML = this.template(); }
    template() { return ``; }
    setEvent() { }
}