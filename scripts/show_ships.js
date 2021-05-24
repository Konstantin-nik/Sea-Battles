const loadShips = document.getElementById('loadShips');
const ships = document.getElementById('ships');
window.onresize = function() {
	toPosition();
}

loadShips.addEventListener('click', () => showShips(to_move));

function showShips(ship) {
	ship.style.display = 'block';
}

var dragObject;
var move = document.getElementById('to_move');
var shiftX;
var shiftY;

move.onmousedown = function(e) {
    for(n of move.children) {
        if(n.id == e.target.id) {
            dragObject = e.target;
            shiftX = e.pageX - getCoords(dragObject).left;
	        shiftY = e.pageY - getCoords(dragObject).top;

            document.onmousemove = function(e) {
                moveAt(e);
            };

            dragObject.onmouseup = function(e) {
				dragObject.style.zIndex = 900;
				//dragObject.style.position = 'relative';
                dragObject = null;
            };

            function moveAt(e) {
                dragObject.style.position = 'absolute';
				dragObject.style.zIndex = 1000;
                dragObject.style.left = e.pageX - shiftX + 'px';
                dragObject.style.top = e.pageY - shiftY + 'px';
                return;
            };
        }
    }
}

function getCoords(elem) {
	let box = elem.getBoundingClientRect();
  
	return {
	  top: box.top,
	  left: box.left,
	  bottom: box.top + box.height,
	  right: box.left + box.width
	};
}

var n;
var sss;
function toPosition() {
	sss = 10;
	move.children[0].style.left = getCoords(loadShips).left + 'px';
	move.children[0].style.top = getCoords(loadShips).bottom + 20 + 'px' ;
	var l = move.children.length;
	for(let i = 1; i < l - 2; i++) {
		n = move.children[i];
		n.style.left = getCoords(move.children[i -1]).left + 'px';
		n.style.top = getCoords(move.children[i -1]).bottom + 3 + 'px';
	}
	move.children[l-2].style.left = getCoords(move.children[l-4]).right + 4 + 'px';
	move.children[l-2].style.top = getCoords(move.children[l-4]).top + 'px';
	move.children[l-1].style.left = getCoords(move.children[l-3]).right + 4 + 'px';
	move.children[l-1].style.top = getCoords(move.children[l-3]).top + 'px';

}

document.ondragstart = function() {
	return false;
}

toPosition();
