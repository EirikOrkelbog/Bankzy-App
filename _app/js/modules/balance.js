const labelBalance = document.querySelector('.balance__value');

// Function for calculating balance based on transactions
const calculateBalance = function (account) {
	account.balance = account.movements.reduce((accumulator, movement) => accumulator + movement, 0);
	labelBalance.textContent = `${account.balance}$`;
};
export default calculateBalance;