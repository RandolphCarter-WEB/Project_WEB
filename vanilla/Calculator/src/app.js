import Component from "./core/component.js";
import { calculate } from "./component/Calculate.js"
import { Button } from "./component/Btn.js";
import { inputNum, inputOperator, store } from "./store/Store.js";
class App extends Component {
    initState() { return store.getState() }
    template() {
        return `
            //TODO use HTML Component
            ${calculate()}
            <div class="BtnUI"> 
                ${Button({
                    className : "btnUI",
                    data : "Log",
                    children : "Log"
                })}
                ${Button({
                    className : "btnUI",
                    data : "Set",
                    children : "Set"
                })}
            </div>
        `;
    }

    setEvent() {
        document.querySelectorAll(".BtnContainer button").forEach(element => {
            element.addEventListener("click", ({ target }) => {
                if(target.className.includes("Number")) {
                    const num = ((store.getState().currentData === 0)
                        ? parseInt(target.dataset.value)
                        : store.getState().currentData.toString() + target.dataset.value.toString());

                    store.dispatch(inputNum(num));
                }

                if(target.className.includes("Operator")) {
                    store.dispatch(inputOperator(target.dataset.value.toString()));
                    console.log(store.getState().saveData);
                }
            })
        });

        document.querySelector("#numScreen").addEventListener("change", ({ target }) => {
           store.dispatch(inputNum(target.value));
        });
    }
}

new App(document.querySelector("#mainContainer"));