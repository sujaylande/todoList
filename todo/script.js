const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

// first we create one li then we create one span(x) and then we append span to li and then we append li to listContainer
function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let spna = document.createElement('span');
        spna.innerHTML = '\u00d7';
        li.appendChild(spna);
    }
    inputBox.value = '';
    saveData();
}

//ja li vr click kel te cheaked asel tr uncheak hoil and vice vrsa ani jr span(x) vr click kel tr li remove hoil
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        let div = e.target.parentNode;
        div.remove();
        saveData();
    }
}, false);

//local storage madhe data save kela ani show kela aplya local brower mdhe
function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showData();