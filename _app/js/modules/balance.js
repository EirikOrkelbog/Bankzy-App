const labelBalance = document.querySelector('.balance__value');

// Function for calculating balance based on transactions
const calculateBalance = function (movements) {
	const balance = movements.reduce((accumulator, movement) => accumulator + movement, 0);
	labelBalance.textContent = `${balance}$`;
};
export default calculateBalance;