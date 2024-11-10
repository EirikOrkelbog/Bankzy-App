const containerMovements = document.querySelector('.movements');

// Function for updating transaction movements
const displayMovements = function (movements, sort = false) {
	containerMovements.innerHTML = '';
	
	const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
	
	movs.forEach(function (movement, index) {
		const type = movement > 0 ? 'deposit' : 'withdrawal';
		const html = `
		<div class="movements__row">
		<div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
		<div class="movements__value">${movement}$</div>
		</div>
		`;
		containerMovements.insertAdjacentHTML("afterbegin", html);
	});
};
export default displayMovements;