export default function keyboardBtn() {
    const item = "abcdefghijklmnopqrstuvwxyz".split("");

    const render = () => {
        return `
            ${item.map(element => {
                return `<button id=${element+"Key"} class="key" data-key="${element}">${element}</button>`
            }).join("\n")}
        `;
    }

    return render();
}