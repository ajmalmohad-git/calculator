let resultbox = document.querySelector('.result');
let historybox = document.querySelector('.history');

let cleardata = document.querySelector('.clear');
let something = document.querySelector('.idk');

let equals = document.querySelector('.equals');
let addition = document.querySelector('.adder');
let multplier = document.querySelector('.mult');
let minus = document.querySelector('.minus');
let division = document.querySelector('.divi');

let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let zero = document.querySelector('.zero');
let point = document.querySelector('.point');

let numberonbox = '' ;

one.addEventListener('click',()=>{
    numberonbox = numberonbox + '1';
    resultbox.textContent=numberonbox;
})
two.addEventListener('click',()=>{
    numberonbox = numberonbox + '2';
    resultbox.textContent=numberonbox;
})
three.addEventListener('click',()=>{
    numberonbox = numberonbox + '3';
    resultbox.textContent=numberonbox;
})
four.addEventListener('click',()=>{
    numberonbox = numberonbox + '4';
    resultbox.textContent=numberonbox;
})
five.addEventListener('click',()=>{
    numberonbox = numberonbox + '5';
    resultbox.textContent=numberonbox;
})
six.addEventListener('click',()=>{
    numberonbox = numberonbox + '6';
    resultbox.textContent=numberonbox;
})
seven.addEventListener('click',()=>{
    numberonbox = numberonbox + '7';
    resultbox.textContent=numberonbox;
})
eight.addEventListener('click',()=>{
    numberonbox = numberonbox + '8';
    resultbox.textContent=numberonbox;
})
nine.addEventListener('click',()=>{
    numberonbox = numberonbox + '9';
    resultbox.textContent=numberonbox;
})
zero.addEventListener('click',()=>{
    numberonbox = numberonbox + '0';
    resultbox.textContent=numberonbox;
})
point.addEventListener('click',()=>{
    if(numberonbox == '')
    {
        numberonbox = numberonbox + '0.';
        resultbox.textContent=numberonbox;
    }
    else if(numberonbox.includes('.'))
    {
        numberonbox = numberonbox;
        resultbox.textContent=numberonbox;
    }
    else
    {
        numberonbox = numberonbox + '.';
        resultbox.textContent=numberonbox;
    }  
})


something.addEventListener('click',()=>{
    let temp = numberonbox.split('');
    temp.pop();
    temp = temp.join('');
    numberonbox = temp;
    resultbox.textContent=numberonbox;
})

let value1 = 0;
let k = 0;
let value2 = 0;


addition.addEventListener('click',()=>{
    value1 = Number(resultbox.textContent);
    k = 1;
    numberonbox = '';
    resultbox.textContent='';
});
multplier.addEventListener('click',()=>{
    value1 = Number(resultbox.textContent);
    k = 2;
    numberonbox = '';
    resultbox.textContent='';
});
minus.addEventListener('click',()=>{
    value1 = Number(resultbox.textContent);
    k = 3;
    numberonbox = '';
    resultbox.textContent='';
});
division.addEventListener('click',()=>{
    value1 = Number(resultbox.textContent);
    k = 4;
    numberonbox = '';
    resultbox.textContent='';
});

equals.addEventListener('click',()=>{
    value2 = Number(resultbox.textContent);


    if(k==0)
    {
        k=0;
    }
    else if(k==1)
    {
        resultbox.textContent=value1+value2;
        k=0;
    }
    else if(k==2)
    {
        resultbox.textContent=value1*value2;
        k=0;
    }
    else if(k==3)
    {
        resultbox.textContent=value1-value2;
        k=0;
    }
    else if(k==4)
    {
        resultbox.textContent=value1/value2;
        k=0;
    }
    else
    {
        k=0;
    }

    value2=0;
});

cleardata.addEventListener('click',()=>{
    value1 = 0;
    k = 0;
    value2 = 0;
    numberonbox = '' ;
    resultbox.textContent=numberonbox;
});