const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const mainImg = document.getElementById('main-img');
const question = document.getElementById('question');
const giftSection = document.getElementById('gift-section');

const messages = ["بڕیارەکەت بگۆڕە! 🥺", "بیرێکی تر بکەوە! 😭", "دڵم مەشکێنە! 💔", "تکایە... 🥀"];
let index = 0;

noBtn.addEventListener('mouseover', () => {
    // گۆڕینی وێنەکە بۆ وێنەی گریانەکە
    mainImg.src = "sad.gif";
    
    noBtn.style.left = Math.random() * 70 + '%';
    noBtn.style.top = Math.random() * 70 + '%';
    
    question.innerText = messages[index % messages.length];
    index++;
});

yesBtn.addEventListener('click', () => {
    document.querySelector('.buttons').style.display = 'none';
    mainImg.style.display = 'none';
    question.style.display = 'none';
    giftSection.style.display = 'block';
});