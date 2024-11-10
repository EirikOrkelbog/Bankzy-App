import { accounts } from "./data.js";
import { getCurrentAccount } from './state.js';

const closeButton = document.querySelector('.form__button--close');
const closeUser = document.querySelector('.form__input--user');
const closePin = document.querySelector('.form__input--pin');
const containerApp = document.querySelector('.app');
const labelWelcome = document.querySelector('.welcome');

export default function closeAccount() {
	closeButton.addEventListener('click', (e) => {
		e.preventDefault();
		let currentAccount = getCurrentAccount();

		if (
			currentAccount.username === closeUser.value &&
			currentAccount.pin === Number(closePin.value)
		) {
			const index = accounts.findIndex(
				account => account.username === currentAccount.username
			);

			accounts.splice(index, 1);

			closeUser.value = closePin.value = '';

			containerApp.style.opacity = 0;

			labelWelcome.textContent = 'Log in to get started';
		}
	})
}