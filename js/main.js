function howdy( firstName, lastName, greeting ) {
    return firstName + lastName + greeting;
}

var message = howdy( 'Blakeley ', 'Kilgore ', 'says hi!' );
console.log( message );

var numba = function(string) {
	if (string.length < 7) {
		console.log('What a short little word!');
	}
	else if (string.length == 7) {
		console.log('7, what a perfect choice!');
	}
	else {
		console.log("I'm sorry, but that's too many to count");
	}
};

numba("7");
numba("seventy");
numba("university");
