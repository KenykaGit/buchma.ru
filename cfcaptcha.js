import { CloudflareFake } from './cfcaptcha.js';

lucide.createIcons();

const countdownElement = document.getElementById('countdown');
const messageElement = document.getElementById('message');
const naebElement = document.getElementById('naeb-text');

CloudflareFake(true, false, false, 4, true);

setTimeout(() => {
    let countdown = 3;
    countdownElement.textContent = countdown;
    messageElement.classList.remove('hidden');
    naebElement.textContent = 'Проверено, наеба не обнаружено!';
    const interval = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;
        if (countdown <= 0) {
            clearInterval(interval);
            window.location.replace('https://vk.com/buchmadesign');
        }
    }, 1000);
}, 1000);