var h1= document.querySelector('h1');
var inc=document.querySelector('#increase');
var dec=document.querySelector('#decrease');

let a=0;
inc.addEventListener('click',function(){
    a++;
    h1.innerHTML=a;
})

dec.addEventListener('click',function(){
    a--;
    h1.innerHTML=a;
})