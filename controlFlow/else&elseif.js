//else if statements

const password = 'p@ss';
if (password.length >= 12) {
    console.log('You have a strong password');
} else if (password.length >= 8) {
    console.log('the password is long enough');
} else {
    console.log('the password is not long enough');
}