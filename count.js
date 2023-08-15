


let count = 0;

const button = document.getElementById('plus-btn');

button.addEventListener('click', function(){
    const element = document.getElementById("button-count");
    count += 1;
    element.innerText = count;
});


const minasButton = document.getElementById('minus-btn');
minasButton.addEventListener('click', function(){
    if(count === 0){
        return alert("You Don Not Nagetive Number")
    }
    const paul = document.getElementById('button-count');
    count -= 1;
    paul.innerText = count;
})