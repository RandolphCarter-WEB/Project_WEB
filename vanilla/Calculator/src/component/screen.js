import { store } from "../store/Store.js";
import { input } from "./input.js";

export const screen = () => {
    //TODO input listener
    return `
        <div class="ScreenContainer">
            ${input({
                className : 'screen',
                idName : "resultScreen",
                value : store.getState().resultData,
                focus : false
            })}
            <div class="inputContainer">
                ${input({
                    className : 'screen',
                    idName : "operatorScreen",
                    value : store.getState().operator,
                    focus : false
                })}
                ${input({
                    className : 'screen',
                    idName : "numScreen",
                    value : store.getState().currentData,
                    focus : true
                })}
            </div>
        </div>
    `;
}