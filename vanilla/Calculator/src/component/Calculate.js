import { Button } from "./Btn.js";
import { screen } from "./screen.js";

export const calculate = () => {

    const numberPadItems = [7, 8, 9, 4, 5, 6, 1 ,2, 3, 0, "00", "."];
    const operatorPadItems = ["M+", "M-", "x", "/", "+", "-", "="];

    return `
        <div class="calculatorContainer">
            ${screen()}
            <div class="BtnContainer">
                <div class="numberPad">
                    ${numberPadItems.map(element => {
                        return Button({
                            className : "NumberBtn",
                            data : element,
                            children : element
                        });
                    }).join("")}
                </div>
                <div class="operatorPad">
                    ${operatorPadItems.map(element => {
                        return Button({
                            className : "OperatorBtn",
                            data : element,
                            children : element
                        });
                    }).join("")}
                </div>
            </div>
        </div>
    `;
}