
class App {
    _init() {
        console.log('start');

        const playBtn = document.querySelector(".btn-main")!;
        const landingPage = document.querySelector<HTMLElement>(".landingPage")!;
        const gameContainer = document.querySelector(".game-container")!;

        playBtn.addEventListener('click', () => {
            landingPage.style.display = "none";
        })
    }
}

export default App;
