const authenticate = require('./auth.js');
console.log(authenticate('john', 'hunter2', 'local'));
console.log(authenticate('john', 'hunter3', 'local'));
console.log(authenticate('john', 'hunter2', 'saml'));
console.log(authenticate('john', 'hunter3', 'saml'));
// failing to await promise
let authenticated = authenticate('john', 'hunter3', 'saml');
if(authenticated){
    console.log('Access granted')
}
else {
    console.log('Access denied')
}
// awaiting promise
(async () => {
    authenticated = await authenticate('john', 'hunter3', 'saml');
    if(authenticated){
        console.log('Access granted')
    }
    else {
        console.log('Access denied')
    }
})();