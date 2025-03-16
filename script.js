lucide.createIcons();

function main(naeb = false, error = false) {
    const countdownElement = document.getElementById('countdown');
    const messageElement = document.getElementById('message');
    const naebElement = document.getElementById('naeb-text');

    setTimeout(() => {
        if (!naeb && !error){
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
        } else if (error) {
            naebElement.textContent = 'Наеб не обнаружен. Ошибка. Но ты все равно ебанный бот!';
        } else {
            naebElement.textContent = 'Наеб обнаружен. Редирект не выполнен. Ты бот ебанный!';
        }
    }, 1000);
}

function CloudflareFake(Success = true, Failed = false, Error = false, delay = 5, checkbox = false, termsLink = 'https://www.cloudflare.com/terms', privacyLink = 'https://www.cloudflare.com/privacy', feedbackLink = 'https://www.cloudflare.com/feedback') {
    const verificationDiv = document.getElementById('verification-div');
    const loaderDiv = document.getElementById('loader');
    const successDiv = document.getElementById('success');
    const failedDiv = document.getElementById('failed');
    const errorDiv = document.getElementById('error');
    const checkboxContainer = document.getElementById('checkbox-container');
    const verificationCheckbox = document.getElementById('verification-checkbox');
    const termsAnchor = document.querySelector('.terms-link');
    const privacyAnchor = document.querySelector('.privacy-link');
    const errorAnchor = document.querySelector('.error');

    verificationDiv.classList.remove('hidden');
    loaderDiv.classList.remove('hidden');
    successDiv.classList.add('hidden');
    failedDiv.classList.add('hidden');
    errorDiv.classList.add('hidden');
    checkboxContainer.classList.add('hidden');
    verificationCheckbox.checked = false;

    if (termsAnchor) {
        termsAnchor.href = termsLink;
    }
    if (privacyAnchor) {
        privacyAnchor.href = privacyLink;
    }
    if (errorAnchor) {
        errorAnchor.href = feedbackLink;
    }

    const delayInMilliseconds = delay * 1000;

    setTimeout(() => {
        loaderDiv.classList.add('hidden');

        if (checkbox) {
            checkboxContainer.classList.remove('hidden');
            verificationCheckbox.addEventListener('change', () => {
                if (verificationCheckbox.checked) {
                    setTimeout(() => {
                        loaderDiv.classList.remove('hidden');
                        checkboxContainer.classList.add('hidden');
                        setTimeout(() => {
                            loaderDiv.classList.add('hidden');
                            if (Success) {
                                successDiv.classList.remove('hidden');
                                main()
                            } else if (Failed) {
                                failedDiv.classList.remove('hidden');
                                main(true)
                            } else if (Error) {
                                errorDiv.classList.remove('hidden');
                                main(false, true)
                            } else {
                                successDiv.classList.remove('hidden');
                                main()
                            }
                        }, 3000);
                    }, 300);
                }
            });
        } else {
            if (Success) {
                successDiv.classList.remove('hidden');
                main()
            } else if (Failed) {
                failedDiv.classList.remove('hidden');
                main(true)
            } else if (Error) {
                errorDiv.classList.remove('hidden');
                main(false, true)
            } else {
                successDiv.classList.remove('hidden');
                main()
            }
        }
    }, delayInMilliseconds);
}

function getRandomOutcome() {
    const random = Math.random();
    if (random < 0.7) return { Success: true, Failed: false, Error: false };
    if (random < 0.85) return { Success: false, Failed: true, Error: false };
    return { Success: false, Failed: false, Error: true };
}

function getRandomDelay() {
    return Math.floor(Math.random() * (7 - 3 + 1)) + 3;
}

function getRandomCaptcha() {
    return Math.random() < 0.6;
}

const outcome = getRandomOutcome();
const delay = getRandomDelay();
const captcha = getRandomCaptcha();

CloudflareFake(outcome.Success, outcome.Failed, outcome.Error, delay, captcha);
