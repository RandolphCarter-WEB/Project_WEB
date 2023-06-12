export const Button = (props) => {
    const { className, data, children } = props;

    return `
        <button type="button" class="${ className }" data-value="${ data }">
            ${ children }
        </button>
    `;
}

