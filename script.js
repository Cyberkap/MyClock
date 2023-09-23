document.addEventListener('DOMContentLoaded', function () {
    const getTimeButton = document.getElementById('getTimeButton');
    const resultElement = document.getElementById('result');
    const dateElement = document.getElementById('date');
    const dayElement = document.getElementById('day');
    const timeElement = document.getElementById('time');

    getTimeButton.addEventListener('click', function () {
        const now = new Date();
        const date = now.toDateString();
        const day = now.toLocaleDateString(undefined, { weekday: 'long' });
        const time = now.toLocaleTimeString();

        dateElement.textContent = `Date: ${date}`;
        dayElement.textContent = `Day: ${day}`;
        timeElement.textContent = `Time: ${time}`;

        resultElement.classList.remove('hidden');
    });
});
