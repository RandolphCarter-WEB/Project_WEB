import { observable, observe } from './Observer.js';

//TODO use HTTPElement extends
export default class Component {
    state; target;
    constructor ($target) {
        this.target = $target;
        this.setup();
    }

    setup() {
        this.state = observable(this.initState());
        observe(() => {
            this.render();
            this.setEvent();
            this.mounted();
        });
    }

    initState() { return {} }
    template () { return ''; }
    render () { this.target.innerHTML = this.template(); }
    setEvent () {}
    mounted () {}
}