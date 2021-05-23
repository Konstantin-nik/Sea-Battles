const loadShips = document.getElementById('loadShips');
const ships = document.getElementById('ships');

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
	  left: box.left
	};
}

move.ondragstart = function() {
	return false;
}

