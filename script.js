const mountainLeft = document.querySelector('#mountain_left');
const mountainRight = document.querySelector('#mountain_right');
const cloud1 = document.querySelector('#clouds_1');
const cloud2 = document.querySelector('#clouds_2');
const text = document.querySelector('#text');
const man = document.querySelector('#man');

// Debounce function to limit the rate at which the scroll event is processed
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function handleScroll() {
    let value = window.scrollY;

    if (mountainLeft) mountainLeft.style.left = `-${value / 0.7}px`;
    if (cloud2) cloud2.style.left = `-${value * 2}px`;
    if (mountainRight) mountainRight.style.left = `${value / 0.7}px`;
    if (cloud1) cloud1.style.left = `${value * 2}px`;
    if (text) text.style.bottom = `-${value}px`;
    if (man) man.style.height = `${window.innerHeight - value}px`;
}

window.addEventListener('scroll', debounce(handleScroll));
