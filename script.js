// * AUTO SCROLL

var myTime;
var count = 0;
var scrollInterval;

function startScrolling() {
    scrollInterval = setInterval(pageScroll, 25);
}

function pageScroll() {
    var objDiv = document.getElementById("data");
    objDiv.scrollLeft += 1;
    
    if (objDiv.scrollLeft >= (objDiv.scrollWidth - objDiv.clientWidth)) {
        objDiv.scrollLeft = 0;
        count++;
        
        if (count >= 2) {
            clearInterval(scrollInterval); // Parar o scrolling após a segunda vez
            count = 0; // Reiniciar o contador
            setTimeout(startScrolling, 1200); // Iniciar novamente após um intervalo de 1200ms
        }
    }
}

startScrolling();


// * AUTO SCROLL


// * EFEITO BTN_UP 
const btn_up = document.querySelector("#btn-up");
function scrollTop(){
    document.addEventListener('scroll',function(){
        if(window.pageYOffset<100){
            btn_up.classList.add('show');
        }else{
            btn_up.classList.remove('show');
        }
    });
    btn_up.addEventListener('click',function(){
        window.scroll({
            top:0,
            behavior:'smooth'
        });
    });
}
scrollTop();

// * EFEITO BTN_UP 

// * EFEITO MÁQUINA DE ESCREVER
function typeWrite(e) {
    const textoArray = e.innerHTML.split('');
    e.innerHTML = ' ';
    textoArray.forEach(function (letter, i) {
        setTimeout(function () {
            e.innerHTML += letter;
        }, 80 * i);
    });
}

const phrase = document.querySelector('.txt-apre');

typeWrite(phrase);
// * EFEITO MÁQUINA DE ESCREVER

// * EFEITO VIBRAR

function shake(el) {
    var ang = -2;
    var prefix = (function () {
        var styles = window.getComputedStyle(document.documentElement, ''),
        pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o']))[1];
        if (pre == 'moz')
        return '';
        return '-' + pre + '-';
    })();
    var qtd = 0;
    var shakeInterval = setInterval(function () {
        ang = -ang;
        el.style[prefix + 'transform'] = 'rotate(' + ang + 'deg)';
        qtd++;
        if (qtd > 5) {
            el.style[prefix + 'transform'] = 'rotate(0deg)';
            clearInterval(shakeInterval);
        }
    }, 100);
}

// * EFEITO VIBRAR