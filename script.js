const text = [
"Желаю весеннего настроения, радости, улыбок и чтобы каждый день приносил что-то хорошее.",
"Пусть в жизни будет больше счастья, тепла, красивых моментов и людей, которые искренне радуются за тебя.",
"Желаю вдохновения, лёгкости в делах и чтобы мечты постепенно становились реальностью.",
"Пусть в сердце всегда будет тепло, а рядом будут люди, которые поддерживают и ценят тебя.",
"Пусть каждый день приносит радость, новые возможности и поводы для улыбки.",
"Желаю ярких эмоций, солнечных дней, хорошего настроения и исполнения самых заветных желаний.",
"Пусть жизнь будет наполнена счастьем, заботой и приятными сюрпризами.",
"Пусть весна принесёт много вдохновения, сил для новых достижений и море позитивных эмоций.",
"Желаю гармонии, радости, уверенности в себе и чтобы каждый день был немного особенным.",
"Пусть в жизни будет много улыбок, любви, тепла и красивых моментов, которые хочется вспоминать."
];

let p = document.querySelector(".text");
const textRandom = Math.floor(Math.random() * text.length);

p.innerHTML = text[textRandom];

const colorRandom = Math.floor(Math.random() * 3)
let colorBackground;
let colorText;
let img;

switch(colorRandom) {
    case 0: 
        colorBackground = "C0BD88"
        colorText = "8E8C67"
        img = "flower1"
        break
    case 1:
        colorBackground = "FB5948"
        colorText = "7E0602"
        img = "flower2" 
        break
    case 2:
        colorBackground = "BB8AB0"
        colorText = "BB8AB0"
        img = "flower3"     
        break
}

let imgElement = document.querySelector(".img");
let bobyElement = document.querySelector(".body");
let titleElement = document.querySelector(".title");

imgElement.src = `img/${img}.png`;
bobyElement.style.backgroundColor = `#${colorBackground}`;
p.style.color = `#${colorText}`;
titleElement.style.color = `#${colorText}`;