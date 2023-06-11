import { log } from "./log.js";

export const logTable = () => {
    const len = localStorage.length;
    const logs = () => {
        for(let i = 0; i < len; i++) {
            log(localStorage.getItem(i));
        }
    }

    const render = () => `
        <div class="logContainer">
            <h2>Log</h2>
            <div class="log">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Expression</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${logs}
                    </tbody>
                </table>
            </div>
        </div>
    `;

    const defalutRender = () => `
        <div class="logContainer">
            <h2>Log</h2>
            <div class="log">
                <h3>There is No Data.</h3>
            </div>
        </div>
    `;

    return localStorage.length > 0 ? render() : defalutRender();
}