let main = document.querySelector('.main');
let isStart = false;
let score = 0;
let btn = document.querySelector(".btn");
let time = document.querySelector(".time span");
let scroeBox = document.querySelector(".score span");
let difficulty = 1;
let radios = document.querySelectorAll('input[type=radio');


function addElement(){
    let item = document.createElement('img');
    b = Math.ceil(Math.random()*3);
    console.log(b)
    switch(b){
        case 0: item.src = 'zongzi1.png';
       
        break;
        case 1: item.src = 'zongzi2.png';
        item.style.backgroundColor = '#fefefe';
        break;
        case 2: item.src = 'zongzi3.png';
        item.style.backgroundColor = '#88dbdbf1';
        break;
        case 3: item.src = 'zongzi1.png';
        break;
    }
    
    item.classList = 'zongzi';
    item.style.left = Math.random()*750+'px';
    main.appendChild(item);
    item.classList.add('zongzi'+difficulty);
    item.addEventListener('mousedown',function(){
        main.removeChild(item);
        score +=6;
        scroeBox.innerHTML = score;
    })
}

radios.forEach(x=>{
    x.addEventListener('change',function(){
        if(!isStart)
        difficulty = x.value;
    })
})

btn.addEventListener('mousedown',function(){
if(!isStart){
    isStart = true;
    score = 0;
    scroeBox.innerHTML = score;
    let times = 10;
    let zongzi = setInterval(()=>addElement(),500);
    let timer = setInterval(()=>{
        times-=1;
        time.innerHTML = times;
        if(times<=0){
            clearInterval(zongzi);
            clearInterval(timer);
            isStart = false;
        }

    },1000)

}
});
