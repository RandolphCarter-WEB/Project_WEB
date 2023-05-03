export default class Component {
    $target;

    constructor(target, input) {
        this.$target = target;
        this.setUp(input);
        this.render();
        this.setEvent();
    }

    setUp(input) { }
    render() { this.$target.innerHTML = this.template(); }
    template() { return `` }
    setEvent() { }
}