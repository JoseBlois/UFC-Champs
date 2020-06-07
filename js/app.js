var target = document.querySelectorAll('.drag-target');
console.log(target)
var cards = document.querySelectorAll('.card');
var fightersList = document.querySelector('#drag-target-wish ul');
console.log(fightersList);
// console.log(cards)

//wishlist constructor
var List = (function(){
    this.fighters = [];
});
//fighter constructor
var Fighter =( function(name){
    this.name = name;
})
var currentList = null;
currentList = JSON.parse(localStorage.getItem('list'))
if( !currentList){
    // createEmptyList();
    createEmptyList();
}
UpdateListUI()
currentList.addFighter = function(fighter){
    currentList.fighters.push(fighter);
    localStorage.setItem('list', JSON.stringify(currentList));
}

var styleCheck = function(id){
    if(id === '185' || id === '145' || id === '265' || id === '205'){
        return 'Striker';
    }else{
        return 'Wrestler'
    }
};

var dragStart = function(e){
    e.dataTransfer.setData('text/plain', e.target.id)
    // console.log(e.target)
};

var cancel = function(e) {
    if (e.preventDefault) e.preventDefault();
    if (e.stopPropagation) e.stopPropagation();
    return false;
  };

var dropped = function(e){
    var id;
    e.preventDefault();
    id = e.dataTransfer.getData('text/plain');
    // console.log(this.id);
    if(this.id == 'drag-target-style'){
        viewerUpdate(id)
    }else{
        addFighter(id);
    }
}
var viewerUpdate = function(id){
    var text = styleCheck(id);
    var elemento = document.getElementById('text-style')
    // console.log(elemento)
    elemento.innerHTML=(text);
    // console.log(text);
}

var addFighter = function (id){
    var element = document.getElementById(id);
    var name = element.getAttribute('data-name');

    var fighter = new Fighter(name);
    currentList.addFighter(fighter);

    UpdateListUI()

}
function createEmptyList(){
    localStorage.clear();
    localStorage.setItem('list', JSON.stringify(new List()));
    currentList = JSON.parse(localStorage.getItem('list'));
}

function UpdateListUI(){
    fightersList.innerHTML='';

    for(let i = 0, l = currentList.fighters.length; i<l; i++){
        var liElement = document.createElement('li')
        liElement.innerHTML = currentList.fighters[i].name;
        fightersList.appendChild(liElement);
    }
}

for (let i = 0, l = cards.length; i<l ;i ++){
    cards[i].addEventListener('dragstart',dragStart,false);
}
for (let v = 0, b = target.length; v<b ;v ++){
target[v].addEventListener('dragenter', cancel, false);
target[v].addEventListener('dragover', cancel, false)
target[v].addEventListener('drop',dropped,false);
console.log(target[v])
}