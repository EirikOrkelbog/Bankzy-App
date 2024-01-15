export default function () {
	const containerMovements = document.querySelector('.movements');

	const account1 = {
		owner: 'Eirik Orkelbog',
		movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
		interestRate: 1.2,
		pin: 1111,
	};

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
	displayMovements(account1.movements);
}