export const input = (props) => {
    const { className, idName, value, focus } = props;

    return `
        <input type="text" class="${ className }" id="${ idName }" value="${ value }" ${!focus ? "disabled" : ""}/>
    `;
}