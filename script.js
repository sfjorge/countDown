// Set the date of your next date with your girlfriend (replace with your actual date)
const nextDate = new Date('2023-10-14T08:41:00');

function updateCountdown() {
    const now = new Date();
    const timeDifference = nextDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days-value').textContent = days;
    document.getElementById('hours-value').textContent = hours;
    document.getElementById('minutes-value').textContent = minutes;
    document.getElementById('seconds-value').textContent = seconds;
}

setInterval(updateCountdown, 1000); // Update the countdown every second
updateCountdown(); // Initial call to display the countdown immediately
