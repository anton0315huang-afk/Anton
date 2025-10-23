document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMessage').textContent = "感謝你的訊息！(此表單無法在 GitHub Pages 送出)";
});
