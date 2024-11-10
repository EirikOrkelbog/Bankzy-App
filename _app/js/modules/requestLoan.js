import { getCurrentAccount } from "./state.js";
import { updateUI } from "./login.js";

const loanAmount = document.querySelector('.form__input--loan-amount');
const loanButton = document.querySelector('.form__button--loan');

export default function requestLoan() {
	loanButton.addEventListener('click', (e) => {
		e.preventDefault();
		let currentAccount = getCurrentAccount();		
		const amount = Number(loanAmount.value);

		if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
			currentAccount.movements.push(amount);
			updateUI(currentAccount);
		}
		loanAmount.value = '';
	})
}