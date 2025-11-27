var img=document.querySelector('img');
var love=document.querySelector('i');

img.addEventListener('dblclick',function(){
    love.style.opacity=1;
    love.style.color='crimson';
    love.style.transform=`translate(-50%,-50%) scale(0.98)`;
})