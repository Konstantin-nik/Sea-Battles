const loadShips = document.getElementById('loadShips');
const ships = document.getElementById('ships');
var field_back = document.getElementById('sea_background');
var field = document.getElementById('field');

window.onresize = function() {
	toPosition();
	setFieldsPos();
	//setTilesPosition();
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
				if(dragObject != null)
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

			function placeShip(e) {
				
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

var field1;
function setFieldsPos() {
	field1 = battlefield1.children[1];
	field1.style.position = 'absolute';
	center_backX = (getCoords(battlefield1.children[0]).right + getCoords(battlefield1.children[0]).left) / 2;
	center_backY = (getCoords(battlefield1.children[0]).top + getCoords(battlefield1.children[0]).bottom) / 2;
	field1.style.left = center_backX - field1.width / 2 + 'px';
	field1.style.top = center_backY - field1.width / 2 + 2 + 'px';
}

function matrixArray(rows,columns) {
	var arr = new Array();
	for(var i=0; i<rows; i++) {
	  	arr[i] = new Array();
	  	for(var j=0; j<columns; j++) {
			arr[i][j] = i+j+1;//вместо i+j+1 пишем любой наполнитель. В простейшем случае - null
		}
	}
	return arr;
}

var matrix1 = matrixArray(10,10);

var tag;
function newCell(x, y, z) {
	tag = document.createElement('div');
	tag.id="cells";
	tag.innerHTML = '<img class="cell" src="../assets/images/shipDown/1.png"/>';

	tag.children[0].style.left = x + "px";
	tag.children[0].style.top= y + "px";
	tag.children[0].style.zIndex= z + "px";
	/*
	style.position="absolute";
	tag.style.left=x+"px";
	tag.style.top=y+"px";
	tag.style.zIndex=z + "px";
	tag.style.src="../assets/images/shipDown/1.png";
	tag.style.height= "40px";
	tag.style.width = "40px";
	*/
	document.body.append(tag);
	return tag;
}

var xc;
var yc;
var k = 40;
function createTiles() {
	matrix1.
	xc = getCoords(field).left;
	yc = getCoords(field).top;
	for(let i = 0; i < 10; i++) {
		for(let j = 0; j < 10; j++) {
			matrix1[i][j] = newCell(xc + k*i, yc + k*j, -10);
		}
	}
}


document.ondragstart = function() {
	return false;
}
document.body.onload = function() {
	toPosition();
	setFieldsPos();
	//createTiles();
};
//createTiles();
