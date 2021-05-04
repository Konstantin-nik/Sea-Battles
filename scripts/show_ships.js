const loadShips = document.getElementById('loadShips');
const ships = document.getElementById('ships');

loadShips.addEventListener('click', () => showShips(ships));

function showShips(ship) {
	ship.style.display = 'block';
}