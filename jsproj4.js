var btn1=document.querySelector('#add');
var h5=document.querySelector('h5');
let check=0;

btn1.addEventListener('click',function(){
    if(check===0)
    {
        h5.innerHTML='Friends';
        h5.style.color='green';
        btn1.innerHTML='Remove'

        check =1
    }
    else{
         h5.innerHTML='Stranger';
        h5.style.color='red';
        btn1.innerHTML='Add Friend';
        check=0
    }
})




