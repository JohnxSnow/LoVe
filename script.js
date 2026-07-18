const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const mainImg = document.getElementById('main-img');
const question = document.getElementById('question');
const giftSection = document.getElementById('gift-section');
const audioContainer = document.getElementById('audio-container');

// زیادکردنی گۆرانییەکە لێرە
// لێرە تەنها ناوی فایلەکە بنووسە
const song = new Audio("song.mp3"); 

// ... باقی کۆدەکەت

yesBtn.addEventListener('click', () => {
    // لێدانی گۆرانییەکە
    song.play().then(() => {
        console.log("گۆرانییەکە دەستی پێکرد");
    }).catch(error => {
        console.log("پێویستە کلیک بکەیت بۆ ئەوەی گۆرانییەکە دەست پێ بکات");
    });
    
    document.querySelector('.buttons').style.display = 'none';
    mainImg.style.display = 'none';
    question.style.display = 'none';
    giftSection.style.display = 'block';
});

const messages = ["بڕیارەکەت بگۆڕە! 🥺", "بیرێکی تر بکەوە! 😭", "دڵم مەشکێنە! 💔", "تکایە... 🥀"];
let index = 0;

function moveBtn() {
    noBtn.style.position = 'absolute';
    noBtn.style.left = Math.random() * 70 + '%';
    noBtn.style.top = Math.random() * 70 + '%';
    question.innerText = messages[index % messages.length];
    index++;
    mainImg.src = "sad.gif"; 
}

noBtn.addEventListener('mouseover', moveBtn);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveBtn();
});

yesBtn.addEventListener('click', () => {
    // لێدانی گۆرانییەکە بە دەنگەوە
    song.play().catch(error => console.log("Auto-play blocked"));
    
    document.querySelector('.buttons').style.display = 'none';
    mainImg.style.display = 'none';
    question.style.display = 'none';
    giftSection.style.display = 'block';
});
