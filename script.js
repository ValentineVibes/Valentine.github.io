const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️",
    "I’ll give you unlimited hugs if you say yes! 🤗",
    "I promise to make you smile every day! 😊",
    "You're my sunshine, don't turn off the light! ☀️",
    "My heart beats only for you, don’t stop it! ❤️",
    "Okay fine, but I know you love me too! 😘"
];

let messageIndex = 0;
let noClickCount = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    if (noClickCount >= 15) {
        // Remove the "No" button after 15 clicks
        noButton.style.display = "none";
        return;
    }

    // Change "No" button text
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Increase "Yes" button size exponentially
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.3}px`; // 30% increase each click

    noClickCount++;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
