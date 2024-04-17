const authenticate = require('./auth.js');
console.log('\nfailing to await promise...\n')
for(const method of ['local', 'saml']){
    for(const password of ['correct', 'incorrect']){
        let authenticated = authenticate('john', password, method)
        if(authenticated){
            console.log(`john:${password.padEnd(20)}${method.padEnd(10)}--> ${String(authenticated).padEnd(20)}--> login success`)
        } else {
            console.log(`john:${password.padEnd(20)}${method.padEnd(10)}--> ${String(authenticated).padEnd(20)}--> login failed`)
        }
    }
}
console.log('')