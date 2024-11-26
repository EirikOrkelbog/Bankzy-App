const labelBalance = document.querySelector('.balance__value');
const date = document.querySelector('.date');

const currentDate = new Date().toLocaleDateString();
date.textContent = currentDate;

// Function for calculating balance based on transactions
const calculateBalance = function (account) {
	account.balance = account.movements.reduce((accumulator, movement) => accumulator + movement, 0);
	labelBalance.textContent = `${account.balance.toFixed(2)}$`;
};
export default calculateBalance;