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

// 5. 
document.getElementById('p-Btnn').addEventListener('click', function () {
    console.log('Hi!, I am here.');
});

// 6.
const textm = document.getElementsByClassName('panda-btn');
for (const bTn of textm) {
    bTn.addEventListener('click', function () {
        bTn.remove();
    })
}

// 7.
document.getElementById('email').addEventListener('keyup', function (event) {

    if (event.target.value == 'email') {
        document.getElementById('submit-btn').removeAttribute('disabled');
    }
    else {
        document.getElementById('submit-btn').setAttribute('disabled', true);
    }
})