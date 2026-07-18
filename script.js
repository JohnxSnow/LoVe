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
    
    // زیادکردنی گۆرانی تەنها کاتێک بەڵێ دەکرێت
    const musicDiv = document.createElement('iframe');
    musicDiv.src = "https://www.youtube.com/embed/CMTp8sGQxQI?autoplay=1";
    musicDiv.style.width = "100%";
    musicDiv.style.height = "200px";
    giftSection.appendChild(musicDiv);
});
