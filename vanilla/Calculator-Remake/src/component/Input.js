export const Input = (props) => {
    const { type, use, id, isFocus } = props;

    const style = () => `
        <style>
            #${id} {
                color : green
            }
        </style>
    `;

    const render = () => `
        <input type="${type}" class="input${use}" id="${id}" ${isFocus ? "" : "disabled"}>  
    `;
}