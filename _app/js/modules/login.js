import { accounts } from "./data.js";
import { setCurrentAccount } from './state.js';
import displayMovements from "./movements.js";
import calculateBalance from "./balance.js";
import calculateSummary from "./summary.js";

export const updateUI = function (acc) {
	displayMovements(acc.movements);
	calculateBalance(acc);
	calculateSummary(acc);
}

export default function login() {
	const btnLogin = document.querySelector('.login__button');
	const inputLoginUsername = document.querySelector('.login__input--user');
	const inputLoginPin = document.querySelector('.login__input--pin');
	const labelWelcome = document.querySelector('.welcome');
	const containerApp = document.querySelector('.app');

	let currentAccount;

	btnLogin.addEventListener('click', function (event) {
		event.preventDefault();
		currentAccount = accounts.find(account => account.username === inputLoginUsername.value);
		
		if (currentAccount?.pin === Number(inputLoginPin.value)) {
			setCurrentAccount(currentAccount);
			// Display UI and welcome message
			labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}`;
			containerApp.style.opacity = 100;
			// Clear input fields
			inputLoginUsername.value = inputLoginPin.value = '';
			inputLoginPin.blur();
			updateUI(currentAccount);
		}
	});
};