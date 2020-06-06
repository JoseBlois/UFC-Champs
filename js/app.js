var target = document.querySelectorAll('.drag-target');
console.log(target)
var cards = document.querySelectorAll('.card');
// console.log(cards)


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
    }
}
var viewerUpdate = function(id){
    var text = styleCheck(id);
    var elemento = document.getElementById('text-style')
    // console.log(elemento)
    elemento.innerHTML=(text);
    // console.log(text);
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