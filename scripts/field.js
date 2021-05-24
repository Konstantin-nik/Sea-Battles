const battlefield1 = document.getElementById('battlefield1');
const battlefield2 = document.getElementById('battlefield2');

window.onresize = function () {
	toPosition();
}

var center_backX;
var center_backY;

const make_visible = document.getElementById('make_visible');
var visible = true;

make_visible.addEventListener('click', () => make_invisible());

function make_invisible() {
	if (visible) {
		visible = false;
		battlefield2.style.display = 'none';
		toPosition();
	} else {
		visible = true;
		battlefield2.style.display = 'block';
		toPosition();
	}
}

var field1 = battlefield1.children[1];
var field2 = battlefield2.children[1];

function toPosition() {
	field1.style.position = 'absolute';
	center_backX = (getCoords(battlefield1.children[0]).right + getCoords(battlefield1.children[0]).left) / 2;
	center_backY = (getCoords(battlefield1.children[0]).top + getCoords(battlefield1.children[0]).bottom) / 2;
	field1.style.left = center_backX - field1.width / 2 + 'px';
	field1.style.top = center_backY - field1.width / 2 + 2 + 'px';
	field2.style.position = 'absolute';
	center_backX = (getCoords(battlefield2.children[0]).right + getCoords(battlefield2.children[0]).left) / 2;
	center_backY = (getCoords(battlefield2.children[0]).top + getCoords(battlefield2.children[0]).bottom) / 2;
	field2.style.left = center_backX - field2.width / 2 + 'px';
	field2.style.top = center_backY - field2.width / 2 + 2 + 'px';
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

toPosition();