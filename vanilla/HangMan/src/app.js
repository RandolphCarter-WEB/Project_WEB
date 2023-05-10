import GamePage from './page/gamePage.js'

class App {
    constructor($target) {
        new GamePage($target);
    }
}

const main = document.querySelector("#mainContainer");
new App(main);