var box=document.querySelector('#box');
var main=document.querySelector('main');
var btn=document.querySelector('button');
var h1=document.querySelector('h1');

let team=[{
            teamname:'CSK',
            primary:'yellow',
            secondary:'blue',
            captain:'M.S.Dhoni'
          },
          {
            teamname:'RCB',
            primary:'red',
            secondary:'royalblue',
            captain:'Virat Kohli'
          },
          {
            teamname:'MI',
            primary:'blue',
            secondary:'aqua',
            captain:'Rohit Sharma'
          },
          {
            teamname:'SRH',
            primary:'pink',
            secondary:'purple',
            captain:'Sarthak Sharma'
          },
          {
            teamname:'ppb',
            primary:'crimson',
            secondary:'green',
            captain:'Jadeja'
          },
          {
            teamname:'anuja',
            primary:'wheat',
            secondary:'silver',
            captain:'Deval Hole'
          }
]

btn.addEventListener('click',function(){
    var arr=team[Math.floor(Math.random()*team.length)];
    h1.innerHTML=arr.teamname;
    main.style.backgroundColor=arr.primary;
    box.style.backgroundColor=arr.secondary;

})