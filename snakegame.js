var board=document.querySelector('.board');
var scoreele=document.querySelector('#score');
var btnstart=document.querySelector('.btn-start');
var btnrestart=document.querySelector('.btn-restart');
var modal1=document.querySelector('.modal1')
var restartgame=document.querySelector('.restartgame');
var startgame=document.querySelector('.startgame');
var timeele=document.querySelector('#time');
var highscore=document.querySelector('#highscore');
const blockheight=30;
const blockwidth=30;
var gamespeed=300;

const cols=Math.floor(board.clientWidth/blockwidth);
const rows=Math.floor(board.clientHeight/blockheight);

var blocks=[];
var score=0;
var time='00:00';
var hgh=Number(localStorage.getItem("highscore")) || 0;
var snake=[{x:1,y:3},{x:1,y:4},{x:1,y:5}];
var direction='right';
var intervalid=null;
var timerid=null;
var food={x:Math.floor(Math.random()*rows),y:Math.floor(Math.random()*cols)};

highscore.innerText=hgh;


// for(let i=0;i<rows*cols;i++)
// {
//     const block=document.createElement('div');
//     block.classList.add('block');
//     board.appendChild(block);

// }

for(let row=0;row<rows;row++){
    for(let col=0;col<cols;col++){
        const block=document.createElement('div');
        block.classList.add('block');
        board.appendChild(block);
        blocks[`${row},${col}`]=block;
    }
}

function drawsnake(){
     let head=null;
     blocks[`${food.x},${food.y}`].classList.add("food");

    if(direction==='right')
    {
        head={x:snake[0].x,y:snake[0].y+1};
    }
    else if(direction==='left')
    {
        head={x:snake[0].x,y:snake[0].y-1};
    }
     else if(direction==='up')
    {
        head={x:snake[0].x-1,y:snake[0].y};
    }
     else if(direction==='down')
    {
        head={x:snake[0].x+1,y:snake[0].y};
    }


    if(head.x<0 || head.x>=rows || head.y<0 || head.y>=cols)
    {
        modal1.style.display='flex';
        startgame.style.display='none';
        restartgame.style.display='flex';
        clearInterval(intervalid);
        return;
    }

    if(head.x===food.x && head.y===food.y)
    {
        blocks[`${food.x},${food.y}`].classList.remove('food');
        food={x:Math.floor(Math.random()*rows),y:Math.floor(Math.random()*cols)};
        score+=10;
        scoreele.innerText=score;

        if(score>hgh)
        {
            hgh=score;
            localStorage.setItem("highscore",hgh.toString());
            highscore.innerText=hgh;
        }
        blocks[`${food.x},${food.y}`].classList.add('food');
        snake.unshift(head);
    }


    snake.forEach(function(elem){
        blocks[`${elem.x},${elem.y}`].classList.remove('fill');
    })
    snake.unshift(head);
    snake.pop();

    snake.forEach(function(elem){
       blocks[`${elem.x},${elem.y}`].classList.add('fill');
    })

   
    
}
drawsnake();


addEventListener('keydown',function(elem){
    if(elem.key=='ArrowUp')
    {
        direction="up";
    }
    else if(elem.key=='ArrowDown')
    {
        direction='down';
    }
    else if(elem.key=='ArrowLeft')
    {
        direction='left';
    }
    else if(elem.key=='ArrowRight')
    {
        direction='right';
    }
})

btnstart.addEventListener('click',function(){
     clearInterval(intervalid);
    clearInterval(timerid);
    intervalid=setInterval(drawsnake,gamespeed);
    modal1.style.display='none';
    timerid=setInterval(function(){
        let[min,sec]=time.split(':').map(Number);

        if(sec===59)
        {
            min+=1;
            sec=0;
        }
        else
        {
            sec+=1;
        }

        time=`${min}:${sec}`;
        timeele.innerText=time;
    },1000)
})

function restart(){
    clearInterval(intervalid);   // <<-- IMPORTANT
    clearInterval(timerid);
    blocks[`${food.x},${food.y}`].classList.remove('food');
    snake.forEach(function(elem){
      blocks[`${elem.x},${elem.y}`].classList.remove('fill');
    });
    score=0;
    time='00:00'
    timeele.innerText=time;
    modal1.style.display='none';
    direction='down';
    snake=[{x:1,y:3},{x:1,y:4},{x:1,y:5}];
    food={x:Math.floor(Math.random()*rows),y:Math.floor(Math.random()*cols)};
    timerid=setInterval(function(){
        let[min,sec]=time.split(':').map(Number);

        if(sec===59)
        {
            min+=1;
            sec=0;
        }
        else
        {
            sec+=1;
        }

        time=`${min}:${sec}`;
        timeele.innerText=time;
    },1000)
    intervalid=setInterval(drawsnake,gamespeed);

}


btnrestart.addEventListener('click',restart);

document.querySelectorAll('.btn-diff').forEach(function(btn){
    btn.addEventListener('click',function(){
        gamespeed=Number(btn.dataset.speed);

        document.querySelectorAll('.btn-diff').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

    })
})