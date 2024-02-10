/*===========================VARIABLES===========================*/
/*---------------------------getElement---------------------------*/
let enter = document.getElementById('enter'),
    res = document.getElementById('result'),
    select1 = document.getElementById('select1'),
    select2 = document.getElementById('select2'),
    select1TXT = document.getElementById('select1.txt'),
    select2TXT = document.getElementById('select2.txt'),
    saving = document.getElementById('saving'),
    saveList = document.getElementById('saveList'),
    decision = document.getElementById('decision'),
    decisionB = document.getElementById('decisionB')
/*---------------------------Other---------------------------*/
let share2 = 2,
    share1 = 10,
    saveColor = 1,
    decColor = 1,
    decBColor = 1,
    saverow = decision.rows[0],
    saverow2 = decisionB.rows[0],
    options = [2, 8, 10, 16],
    saveBul = false

/*===========================SELECT===========================*/

for (let i = 0; i < 4; i++) {
    let j = document.createElement('option')
    j.value = options[i]
    j.innerHTML = options[i]
    select1.appendChild(j)
    let k = j.cloneNode(true)
    select2.appendChild(k)
}
select1[2].selected = true
let all = document.createElement('option')
all.value = 'all'
all.innerHTML = 'Все'
select1.appendChild(all)
let all2 = all.cloneNode(true)
select2.appendChild(all2)

/*===========================BUTTONS===========================*/

let box1 = document.querySelector('.box1');

for (let i = 0; i < 10; i++) {
    let buttons = document.createElement('button');
    buttons.addEventListener('click', function() {
        num(i);
    }, false);
    buttons.id = i
    buttons.innerHTML = i
    box1.appendChild(buttons);
}
for (let i = 0; i < 26; i++) {
    let alfabet = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'.split(' ')
    let buttons = document.createElement('button');
    buttons.addEventListener('click', function() {
        num(alfabet[i]);
    }, false);
    buttons.id = i + 10
    buttons.style.display = 'none'
    buttons.innerHTML = alfabet[i]
    box1.appendChild(buttons);
}
