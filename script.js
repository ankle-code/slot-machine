const start = document.getElementById('start');
const pause = document.getElementById('pause');
const painel = document.querySelector('.machine');
const resultText = document.getElementById('result');


start.addEventListener('click', function(){
    start.classList.add('machine__button--hidden');
    pause.classList.remove('machine__button--hidden');
    pause.classList.add('machine__button--on');
    painel.classList.add('machine--on');
    resultText.textContent = "Clique para parar";
    resultText.style.color = "#000";

    let loop = setInterval(function(){
        sort();
        animation();
    },40);
    
    function sortStop(){
        pause.classList.add('machine__button--hidden');
        start.classList.remove('machine__button--hidden');
        painel.classList.remove('machine--on');

        clearInterval(loop);
        const slot = document.getElementsByTagName('img');
        
        for(let i = 0; i < 3; i++){
            slot[i].classList.remove('machine__image--sort');
            let result = slot[i].src.replace(/Speed/, '');
            slot[i].src = result;
        };
        
        
    };
    
    pause.addEventListener('click',function(){
        sortStop();
        verification();
    });
});



function sort() {
    let random = Math.floor(Math.random()  *  (6 - 1) + 1);
    let result = 'images/randomIcon' + random + 'Speed.png';
    return result;
};

function animation(){    
    for(let i = 0; i < 3; i++){
        let slot = document.getElementById(`slot${i+1}`);
        slot.src = sort();
        slot.classList.add('machine__image--sort');
    };
};

function verification() {
    const slot1 = document.querySelectorAll('img')[0].src;
    const slot2 = document.querySelectorAll('img')[1].src;
    const slot3 = document.querySelectorAll('img')[2].src;
    
    if(slot1 === slot2 && slot2 === slot3){
        resultText.textContent = "You Win, Nice!!! :^)";
        resultText.style.color = "#2ad890";
    }
    else if(slot1 === slot2 || slot2 === slot3 || slot1 === slot3){
            resultText.textContent = "Oh, you almost win...";
            resultText.style.color = "#0536d6";
        
    }else{
        resultText.textContent = "You Lose, try again! :^(";
        resultText.style.color = "#ff0000";
    }
}




