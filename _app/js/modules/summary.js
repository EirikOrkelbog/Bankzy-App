const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');

// Function for calculating and displaying summary of total deposits, withdrawals and interests
const calculateSummary = function (account) {
	const deposits = account.movements.filter(movement => movement > 0).reduce((accumulator, current) => accumulator + current, 0);
	const withdrawals = account.movements.filter(movement => movement < 0).reduce((accumulator, current) => accumulator + current, 0);
	const interest = account.movements.filter((movement) => movement > 0).map(deposit => (deposit * account.interestRate) / 100).reduce((accumulator, interest) => accumulator + interest, 0);
	labelSumIn.textContent = `${deposits}$`;
	labelSumOut.textContent = `${Math.abs(withdrawals)}$`;
	labelSumInterest.textContent = `${interest}$`;
};
export default calculateSummary;