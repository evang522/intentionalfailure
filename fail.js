const rejectThatPromise = () => {
	return new Promise((resolve, reject) => {
		reject('BAD!');
	})
}


setTimeout(rejectThatPromise, 3000);

// The purpose here is to create an importable module that will return a rejected promise, so that it can be tested for cross origin scripting errors in Sentry.
