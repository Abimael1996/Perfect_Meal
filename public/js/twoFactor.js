const getPINBtn = document.querySelector('.register button');
const checkPinBtn = document.querySelector('[action=check] button');
const cancelVerificationBtn = document.querySelector('[action=cancel] button');
const phoneNumber = document.querySelector('.register [name=phone]');
const pinConfirmationEl = document.querySelector('[name=pin]');
const checkReqIdEl = document.querySelector('[action=check] [name=reqId]');
const cancelReqIdEl = document.querySelector('[action=cancel] [name=reqId]');

if (getPINBtn) {
    getPINBtn.addEventListener('click', e => {
        getPinNumber(phoneNumber.value)
    });
}

if (checkPinBtn) {
    checkPinBtn.addEventListener('click', e => {
        sendPin(pinConfirmationEl.val, checkReqIdEl.getAttribute('value'));
    });
}

if (cancelVerificationBtn) {
    cancelVerificationBtn.addEventListener('click', e => {
        cancelPinVerification(cancelReqIdEl.getAttribute('value'));
    });
}

async function getPinNumber(phone) {
    await fetch("/verify", {
        method: "POST",
        body: JSON.stringify({ phone: phone }),
        headers: { "Content-Type": "application/json" },
    });
}

async function sendPin(pin, reqId) {
    await fetch("/check", {
        method: "POST",
        body: JSON.stringify({ pin: pin, reqId: reqId }),
        headers: { "Content-Type": "application/json" },
    });
}

async function cancelPinVerification(reqId) {
    await fetch("/cancel", {
        method: "POST",
        body: JSON.stringify({ reqId: reqId }),
        headers: { "Content-Type": "application/json" },
    });
}