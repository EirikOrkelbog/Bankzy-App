import { accounts } from "./data.js";
export default function transactions() {
	const containerMovements = document.querySelector('.movements');

	// Function for updating transaction movements
	const displayMovements = function (movements) {
		containerMovements.innerHTML = '';

		movements.forEach(function (movement, index) {
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
	displayMovements(accounts[0].movements);
}