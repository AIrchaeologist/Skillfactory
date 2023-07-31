document.querySelector('button').onclick = function(){
    if(getComputedStyle(document.querySelector('.button__div-second')).display == 'none') {
        document.querySelector('.button__div-first').style.display = 'none';
        document.querySelector('.button__div-second').style.display = 'block';
    } else {
        document.querySelector('.button__div-first').style.display = 'block';
        document.querySelector('.button__div-second').style.display = 'none';
    }
};