export default function QuestionUI([question, answer, hint], life, userAnswer) {
    const answerUI = answer.map(element => {
        if(userAnswer.includes(element)) {
            return element;
        } else {
            if(element.match(/^[a-zA-Z]+$/)) {
                return `_`;
            } else {
                return element;
            }
        }
    });

    const render = () => {
        return `
            <h3 id="questionTitle">${question}</h3>
            <p id="userAnswer">${answerUI.join("")}</p>
            <p id="userLife">You have ${life} lives!</p>
            <p id="hintTitle">Clue - <span id="hint" style="opacity: 0">${hint}</span></p>
        `;
    }

    return render();
}