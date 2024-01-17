import { accounts } from './data.js';
export default function usernames() {
	// Function for creating usernames
	const createUsernames = function (accounts) {
		accounts.forEach(function (account) {
			account.username = account.owner
				.toLowerCase()
				.split(' ')
				.map(name => name[0])
				.join('');
		});
	};
	createUsernames(accounts);
}