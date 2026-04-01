const generateBtn = document.getElementById('generate');
const numbersDiv = document.getElementById('numbers');

generateBtn.addEventListener('click', () => {
    // Clear previous numbers
    numbersDiv.innerHTML = '';

    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    // Create and append number balls
    sortedNumbers.forEach(number => {
        const ball = document.createElement('div');
        ball.classList.add('number-ball');
        ball.textContent = number;
        numbersDiv.appendChild(ball);
    });
});