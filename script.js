let count = localStorage.getItem('count') ? parseInt(localStorage.getItem('count')) : 0;
let MalaCount = localStorage.getItem('MalaCount') ? parseInt(localStorage.getItem('MalaCount')) : 0;
let total = localStorage.getItem('total') ? parseInt(localStorage.getItem('total')) : 0;

const counterElement = document.querySelector('#counter');
const plus = document.querySelector('#inc');
const minus = document.querySelector('#dec');
const reset = document.querySelector('.reset');
const Netotal = document.querySelector('.Total');
const Mcount = document.querySelector('.MalaTotal');

counterElement.textContent = count;
Netotal.textContent = total;
Mcount.textContent = MalaCount;

plus.addEventListener('click', () => {
    count++;
    total++;
    if (count > 107) {
        count = 0;
        MalaCount++;
        Mcount.textContent = MalaCount;
        localStorage.setItem('MalaCount', MalaCount); 
    }
    Netotal.textContent = total;
    counterElement.textContent = count;

    localStorage.setItem('count', count);
    localStorage.setItem('total', total);
});

minus.addEventListener('click', () => {
    if (count > 0) {
        count--;
        total--;
        counterElement.textContent = count;
        Netotal.textContent = total;

        localStorage.setItem('count', count);
        localStorage.setItem('total', total);
    }
});

reset.addEventListener('click', () => {
    count = 0;
    counterElement.textContent = count;

    MalaCount = 0;
    Mcount.textContent = MalaCount;

    localStorage.setItem('count', count);
    localStorage.setItem('MalaCount', MalaCount);

});