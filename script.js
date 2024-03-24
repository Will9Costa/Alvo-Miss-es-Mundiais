let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");
let startButton = document.querySelector(".startButton");

let progress;
let progressValue = 0;
let progressEndValue = 32;
let totalAmount = 3000; // Valor total em reais
let speed = 100;

function formatCurrency(value) {
    return `R$ ${value.toFixed(2)}`;
}

function startProgress() {
    if (progress) {
        clearInterval(progress);
        progressValue = 0;
        valueContainer.textContent = `0%`;
        progressBar.style.background = `conic-gradient(
            #4d5bf9 0deg,
            #cadcff 0deg
        )`;

        progress = null;
    } else {
        progress = setInterval(() => {
            progressValue++;
            let percentage = (progressValue / 100) * progressEndValue;
            valueContainer.textContent = `${percentage.toFixed(2)}%`;
            if (progressValue >= progressEndValue) {
                valueContainer.textContent = formatCurrency((percentage / progressEndValue) * totalAmount);
            }
            progressBar.style.background = `conic-gradient(
                #4d5bf9 ${progressValue * 3.6}deg,
                #cadcff ${progressValue * 3.6}deg
            )`;

            if (progressValue == progressEndValue) {
                clearInterval(progress);
            }
        }, speed);
    }
}

startButton.addEventListener("click", startProgress);

