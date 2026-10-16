const copyBtn = document.querySelector('.copy-btn');
const copyLabel = document.querySelector('.copy-label');

let copiedTimer;
let labelTimer;

copyBtn.addEventListener('click', function(){

    clearTimeout(copiedTimer);
    clearTimeout(labelTimer);

    copyBtn.classList.add('copied');
    copyLabel.textContent = 'Translation copied';

    copiedTimer = setTimeout(function(){
        copyBtn.classList.remove('copied');

        labelTimer = setTimeout(function(){
            copyLabel.textContent = 'Copy translation';
        }, 100);
    }, 1000);

});