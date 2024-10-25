let currentAccount;

export const setCurrentAccount = (account) => {
	currentAccount = account;
};

export const getCurrentAccount = () => {
	return currentAccount;
};