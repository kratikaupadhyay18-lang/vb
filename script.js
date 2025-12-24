let score = 0;
let answeredCount = 0;
const totalQuestions = 10;

// INDEX PAGE
function goToGame() {
    window.location.href = "game.html";
}

// GAME LOGIC
function checkAnswer(button, isCorrect) {
    const questionDiv = button.parentElement;

    // Stop if already answered
    if (questionDiv.dataset.answered === "true") return;

    const resultSpan = questionDiv.querySelector(".result");

    if (isCorrect) {
        score += 10;
        resultSpan.innerHTML = " ✅";
        resultSpan.style.color = "green";
    } else {
        resultSpan.innerHTML = " ❌";
        resultSpan.style.color = "red";
    }

    questionDiv.dataset.answered = "true";
    answeredCount++;

    document.getElementById("score").innerText =
        `Score: ${score} / 100`;

    // Enable claim button ONLY when all questions are answered
    if (answeredCount === totalQuestions) {
        document.getElementById("claimBtn").disabled = false;
        document.getElementById("claimBtn").innerText =
            "🎁 Claim Your Gift 🎁";
    }
}

// MOVE TO GIFT PAGE
function goToGift() {
    if (answeredCount < totalQuestions) {
        alert("Finish the game first 😌🎄");
        return;
    }
    localStorage.setItem("finalScore", score);
    window.location.href = "gift.html";
}

// GIFT PAGE LOGIC
function revealGift() {
    const score = parseInt(localStorage.getItem("finalScore"));
    const giftDiv = document.getElementById("gift");
    giftDiv.classList.remove("hidden");

    if (score < 70) {
        giftDiv.innerHTML = `
            <h3>😔 Sorry My Love</h3>
            <p>Low score… but you still have my heart ❤️</p>
        `;
    } 
    else if (score === 70) {
        giftDiv.innerHTML = `
            <h3>🎄 Festive Christmas Mug 🎄</h3>
            <img src="C:\Users\HP\OneDrive\Pictures\Screenshots\Screenshot 2025-12-25 002147.png">
            <p>For cozy winter sips with my love ☕❤️</p>
        `;
    } 
    else if (score === 80) {
        giftDiv.innerHTML = `
            <h3>🛋️ Personalised Calendar Cushion 🛋️</h3>
            <img src="C:\Users\HP\OneDrive\Pictures\Screenshots\Screenshot 2025-12-25 002621.png">
            <p>So you remember me every single day 😘</p>
        `;
    } 
    else if (score === 90) {
        giftDiv.innerHTML = `
            <h3>📔 Christmas Spiral Diary 📔</h3>
            <img src="C:\Users\HP\OneDrive\Pictures\Screenshots\Screenshot 2025-12-25 003531.png">
            <p>Write our memories here 💌</p>
        `;
    } 
    else if (score === 100) {
        giftDiv.innerHTML = `
            <h3>🍫 Chocolate Hamper 🍫</h3>
            <img src="C:\Users\HP\OneDrive\Pictures\Screenshots\Screenshot 2025-12-25 003754.png">
            <p>But you are SWEETER than chocolate 😍</p>
        `;
    }
}
