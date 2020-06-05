var target = document.querySelector('#drag-target');
// console.log(target)
var cards = document.querySelectorAll('.card');
// console.log(cards)


var styleCheck = function(id){
    if(id === '185' || id === '145' || id === '265'){
        return 'Striker';
    }else{
        return 'Wrestler'
    }
};

var dragStart = function(e){
    e.dataTransfer.setData('text/plain', e.target.id)
    console.log(e.target)
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
    var text = styleCheck(id);
    var elemento = document.getElementById('text')
    // console.log(elemento)
    elemento.innerHTML=(text);
    // console.log(text);
}
target.addEventListener('dragenter', cancel, false);
target.addEventListener('dragover', cancel, false)
target.addEventListener('drop',dropped,false);
for (let i = 0, l = cards.length; i<l ;i ++){
    cards[i].addEventListener('dragstart',dragStart,false);
}