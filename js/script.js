// 2.
const h2Tags = document.getElementsByTagName('h2');
for (const h2Tag of h2Tags) {
    h2Tag.style.color = 'lightblue';
}

// 3.
const backPack = document.getElementById('backpack');
backPack.style.backgroundColor = 'tomato';

// 4.
const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '30px';
}