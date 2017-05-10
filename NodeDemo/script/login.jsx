let login = (username, password) => {
	if(username !== 'admin' || password !== 'radical') {
		console.log('incorrect login encountered. ECMA6!');
	}
};

// login('admin', 'radical');    //not traditionally used in ES6

export {login}