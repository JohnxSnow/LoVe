const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const mainImg = document.getElementById('main-img');
const question = document.getElementById('question');
const giftSection = document.getElementById('gift-section');
const audioContainer = document.getElementById('audio-container');

// زیادکردنی گۆرانییەکە لێرە
const song = new Audio("https://www.mboxdrive.com/CMTp8sGQxQI.mp3"); 

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
