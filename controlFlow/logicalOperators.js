//Logcal operators - OR || and AND &&

const password = 'p@ss';


if (password.length >= 12 && password.includes('@')) {
    console.log('You have a strong password');
} else if (password.length >= 8 || password.includes('@') && password.length > 5) {
    console.log('the password is strong enough');
} else {
    console.log('the password is not strong enough');
}