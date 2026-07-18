const mainImg = document.getElementById('main-img');
const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');

const imageLinks = {
    sad1: "https://i.ibb.co/CGwmQ06/DBB14-F99-06-AD-41-B9-9384-07-BFC2-C4354-F.gif",
    sad2: "https://i.ibb.co/p6FDPWxs/2010-C9-B0-F2-BE-4072-B6-E0-EBD0-A0-A571-FF.gif",
    happy: "https://i.ibb.co/FqVLmyb2/6062-F3-A2-B836-4-C38-90-C1-7-B6951-FEB124.gif"
};

let clickCount = 0;

function moveNoBtn() {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 150);
    noBtn.style.position = "absolute";
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';

    if (clickCount === 0) {
        mainImg.src = imageLinks.sad1;
    } else {
        mainImg.src = imageLinks.sad2;
    }
    clickCount++;
}

yesBtn.addEventListener('click', () => {
    mainImg.src = imageLinks.happy;
    document.querySelector('h1').innerText = "منیش زۆرم خۆشەوێیت ! ❤️";
    document.querySelector('.buttons').style.display = 'none';
    document.getElementById('gift-section').style.display = 'block';
});

// لێدانی دەنگ کاتێک کلیکی دوگمەکە دەکرێت
document.getElementById('play-music-btn').addEventListener('click', function() {
    const player = document.getElementById('youtube-player');
    player.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    this.style.display = 'none'; // شاردنەوەی دوگمەکە دوای لێدانی
});

noBtn.addEventListener('mouseover', moveNoBtn);
noBtn.addEventListener('touchstart', moveNoBtn, {passive: true});