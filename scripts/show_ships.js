const loadShips = document.getElementById('loadShips');
const ships = document.getElementById('ships');

loadShips.addEventListener('click', () => showShips(ships));

function showShips(ship) {
	ship.style.display = 'block';
}



var dragObject;
var move = document.getElementById('to_move');
var shiftX;
var shiftY;

document.onmousedown = function(e) {
    for(n of move.children) {
        if(n.id == e.target.id) {
            dragObject = e.target;
            shiftX = e.pageX - getCoords(dragObject).left;
	        shiftY = e.pageY - getCoords(dragObject).top;

            document.onmousemove = function(e) {
                moveAt(e);
            };

            dragObject.onmouseup = function(e) {
                dragObject = null;
            };

                function moveAt(e) {
                dragObject.style.position = 'absolute';
                document.getElementById("debug").innerHTML = shiftX + ':' + shiftY;
                document.getElementById("debug2").innerHTML = dragObject.id;
                dragObject.style.left = e.pageX - shiftX + 'px';
                dragObject.style.top = e.pageY - shiftY + 'px';
                return;
            };
        }
    }
}

function myFunc() {
    var x = document.getElementsByClassName("hhh");
      x[1].style.display = "none";
      x[0].style.display = "none";
    
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

