var i=document.querySelector('i');
var img=document.querySelector('img');

img.addEventListener('dblclick',function(){
    i.style.opacity=1;
    i.style.color='crimson';
    i.style.transform=' translate(-50%,-50%) scale(1)';
    
    setTimeout(function(){
        i.style.opacity= 0;
    },1500);
   

})

