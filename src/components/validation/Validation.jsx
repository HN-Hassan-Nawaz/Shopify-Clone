function validateUsername(username) {
    if (!username.trim()) {
        return 'Username is required';
    } else if (!/^[A-Za-z][A-Za-z0-9_\s]{2,29}$/.test(username)) {
        return 'Username must start with a letter and be 3–30 characters (letters, numbers, underscores, spaces allowed)';
    }
    return '';
}

function validateEmail(email) {
    if (!email.trim()) {
        return 'Email is required';
    } else if (
        !/^[A-Za-z]{3,}[A-Za-z0-9]*@gmail\.com$/.test(email)
    ) {
        return 'Email must start with at least 3 letters and end with @gmail.com (letters and numbers only)';
    }
    return '';
}


export { validateUsername, validateEmail };
