var btn=document.querySelector('button')
var innr=document.querySelector('#inner')
var h1=document.querySelector('h1')
let grow=0;
btn.addEventListener('click',function(){
    btn.innerHTML='Downloaded';
    btn.style.opacity=0.4;
    btn.style.pointerEvents='none';

    var num=50+Math.floor(Math.random()*50);
   
    var interval=setInterval(function(){
        grow++;
        h1.innerHTML=grow+'%';
        innr.style.width=grow+'%';
    },num);

    setTimeout(function(){
        clearInterval(interval);
    },num*100);
     console.log(`download completed in ${num/10} seconds`);
})