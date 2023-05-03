import Store from "./Store";

export default class Component {
    target;
    $state;
    constructor($target) {
        this.$state = new Store;
        this.target = $target;
        this.render();
        this.setEvent();
    }

    render() { this.target.innerHTML = this.template() }
    template() { return `` }
    
    setEvent() { }
    setState(newState) {
        this.$state.setMemoData(newState); 
    }
}