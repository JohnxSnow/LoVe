const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const mainImg = document.getElementById('main-img');
const question = document.getElementById('question');
const giftSection = document.getElementById('gift-section');

const messages = ["بڕیارەکەت بگۆڕە! 🥺", "بیرێکی تر بکەوە! 😭", "دڵم مەشکێنە! 💔", "تکایە... 🥀"];
let index = 0;

// زیادکردنی وەرگرتنی دەست لێدان بۆ مۆبایل
noBtn.addEventListener('touchstart', moveNoBtn);
noBtn.addEventListener('mouseover', moveNoBtn);

function moveNoBtn() {
    noBtn.style.position = 'absolute';
    noBtn.style.left = Math.random() * 70 + '%';
    noBtn.style.top = Math.random() * 70 + '%';
    
    // گۆڕینی پەیامەکان بەبێ سنوور
    question.innerText = messages[index % messages.length];
    index++;
    
    // گۆڕینی وێنە بۆ وێنەی گریان
    mainImg.src = "sad.gif"; 
}

yesBtn.addEventListener('click', () => {
    document.querySelector('.buttons').style.display = 'none';
    mainImg.style.display = 'none';
    question.style.display = 'none';
    giftSection.style.display = 'block';
    
    // گۆرانییەکە تەنها وەک دەنگ (Audio)
    audioContainer.innerHTML = `
        <iframe width="0" height="0" src="https://www.youtube.com/embed/CMTp8sGQxQI?autoplay=1&mute=0" frameborder="0" allow="autoplay"></iframe>
    `;
});
