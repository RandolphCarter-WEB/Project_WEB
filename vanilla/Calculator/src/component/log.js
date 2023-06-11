export const log = (props) => {
    const { id, data, result } = props;

    return `
        <tr>
            <td>${id}</td>
            <td>${data}</td>
            <td>${result}</td>
        </tr>
    `;
}