import { accounts } from "./data.js";
import { updateUI } from "./login.js";
import { getCurrentAccount, setCurrentAccount } from './state.js';

export default function transfers() {
	const transferButton = document.querySelector('.form__button--transfer');
	const transferAmount = document.querySelector('.form__input--amount');
	const transferTo = document.querySelector('.form__input--to');

	
	transferButton.addEventListener('click', (e) => {
		e.preventDefault();

		let currentAccount = getCurrentAccount();	
		
		if (!currentAccount) {
			console.error('No current account found.');
			return;
		}		

		const amount = Number(transferAmount.value);
		const receiverAccount = accounts.find(account => account.username === transferTo.value);

		transferTo.value = transferAmount.value = '';

		// Validate the transfer conditions
		if (
			amount > 0 &&
			receiverAccount &&
			currentAccount.balance >= amount &&
			receiverAccount?.username !== currentAccount.username
		) {
			// Do the transfer
			currentAccount.movements.push(-amount);
			receiverAccount.movements.push(amount);

			setCurrentAccount(currentAccount);
			updateUI(currentAccount);

		} else {
			console.error('Transfer not valid.');
		}
	});
};