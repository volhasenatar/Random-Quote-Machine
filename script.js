const quote = document.querySelector('#text'); //получаем доступ к тексу цитаты, чтобы в дальнейшем можно было через js менять текст
const button = document.querySelector('#btn'); //получаем доступ к кнопке, чтобы при ее нажатии мы могли рандомно менять цвет фона, менять цвет кнопки, менять цвет твиттера, менять цитату
const body = document.querySelector('body')

let quoteArray = [ //через let (потому что она может изменяться) делаем массив с перечислением цитат
    'I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do. - Leonardo da Vinci',
    'When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me. - Erma Bombeck',
    'Everything you’ve ever wanted is on the other side of fear. - George Addair',
    'Every strike brings me closer to the next home run. - Babe Ruth',
    'Life isn’t about getting and having, it’s about giving and being. - Kevin Kruse',
    'Everything you’ve ever wanted is on the other side of fear. - George Addair',
    'People often say that motivation doesn’t last. Well, neither does bathing. That’s why we recommend it daily. - Zig Ziglar',
    'I attribute my success to this: I never gave or took any excuse. - Florence Nightingale',
    'Everything you’ve ever wanted is on the other side of fear. - George Addair',
    'It does not matter how slowly you go as long as you do not stop. - Confucius',
    'The most common way people give up their power is by thinking they don’t have any. - Alice Walker',
    'I didn’t fail the test. I just found 100 ways to do it wrong. - Benjamin Franklin'
];

let colorsArray = [ // делаем массив с перечислением цветов
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
];

button.addEventListener('click', changeAll) //ставим прослушку на кнопку, чтобы при ее нажатии мы могли все менять

function changeAll(){
    let randomQuote = quoteArray[Math.floor(Math.random()*quoteArray.length)]
    quote.textContent = randomQuote

    let randomBodyColor = colorsArray[Math.floor(Math.random()*colorsArray.length)]
    body.style.backgroundColor = randomBodyColor
    button.style.backgroundColor = randomBodyColor
}

