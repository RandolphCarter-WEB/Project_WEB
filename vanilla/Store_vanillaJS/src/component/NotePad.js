import Component from "../core/Component";

export default class NodePad extends Component {
    constructor($target) {
        super($target);
    }

    template() {
        const item = [ ...this.$state];
        return `
            <div id="notePadList>
                ${item.map((element, index) => {
                    return`
                        <div id="Note${index}">
                    `;
                })}
            </div>
        `;
    }
}