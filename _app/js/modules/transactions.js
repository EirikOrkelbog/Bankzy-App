import { accounts } from "./data.js";
export default function transactions() {
	const containerMovements = document.querySelector('.movements');
	const labelBalance = document.querySelector('.balance__value');
	const labelSumIn = document.querySelector('.summary__value--in');
	const labelSumOut = document.querySelector('.summary__value--out');
	const labelSumInterest = document.querySelector('.summary__value--interest');

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

	// Function for calculating balance based on transactions
	const calculateBalance = function (movements) {
		const balance = movements.reduce((accumulator, movement) => accumulator + movement, 0);
		labelBalance.textContent = `${balance}$`;
	};
	calculateBalance(accounts[0].movements);

	// Function for calculating and displaying summary of total deposits, withdrawals and interests
	const calculateSummary = function (movements) {
		const deposits = movements.filter(movement => movement > 0).reduce((accumulator, current) => accumulator + current, 0);
		const withdrawals = movements.filter(movement => movement < 0).reduce((accumulator, current) => accumulator + current, 0);
		const interest = movements.filter(movement => movement > 0).map(deposit => (deposit * 1.2) / 100).reduce((accumulator, interest) => accumulator + interest, 0);
		labelSumIn.textContent = `${deposits}$`;
		labelSumOut.textContent = `${Math.abs(withdrawals)}$`;
		labelSumInterest.textContent = `${interest}$`;
	};
	calculateSummary(accounts[0].movements);
};