export default class Component {
    state;
    
    constructor(target, props) {
        this.$target = target;
        this.props = props;
        this.setUp();
        this.render();
        this.setEvent();
    }

    setUp() { }
    render() { this.$target.innerHTML = this.template(); }
    template() { return ''; }
    setEvent() { }
    setState(newState) {
        this.state = [ ...this.state, newState ];
        this.render();
    }
}