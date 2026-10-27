function clickhandler(color: string): () => void {
    return function (): void {
        document.body.style.backgroundColor = color;
    };
}

const orangeBtn = document.getElementById('orange');
const greenBtn = document.getElementById('green');

if (orangeBtn) {
    orangeBtn.onclick = clickhandler('orange');
}

if (greenBtn) {
    greenBtn.onclick = clickhandler('green');
}