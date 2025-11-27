var main=document.querySelector('main')
var btn=document.querySelector('button')

let arr=['believe in yourself','coding is magic','web development is love','something cool is cooking...','congrats done mann!!','helloooo....','patience is yhe key to success.']

btn.addEventListener('click',function(){
    var a =document.createElement('h1')
    var x=Math.random()*100;
    var y=Math.random()*100;
    var r=Math.random()*360;
    var s=Math.random()*3;
    var c1=Math.floor(Math.random()*256);
    var c2=Math.floor(Math.random()*256);
    var c3=Math.floor(Math.random()*256);
    a.innerHTML=arr[Math.floor(Math.random()*arr.length)];
    a.style.position='absolute';
    a.style.top=x+'%';
    a.style.left=y+'%';
    a.style.rotate=r+'deg';
    a.style.scale=s;
    a.style.color=`rgb(${c1},${c2},${c3})`;

    main.appendChild(a);


})