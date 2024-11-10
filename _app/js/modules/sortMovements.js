import { getCurrentAccount } from "./state.js";
import displayMovements from "./movements.js";

const sortButton = document.querySelector('.button__sort');

let sorted = false;

export default function sortMovements() {
	sortButton.addEventListener('click', function (e) {
		e.preventDefault();
		let currentAccount = getCurrentAccount();
		displayMovements(currentAccount.movements, !sorted);
		sorted = !sorted;
	});
}