const authenticate = require('./auth.js');
authenticate('john', 'hunter2', 'local');
authenticate('john', 'hunter3', 'local');
authenticate('john', 'hunter2', 'saml');
authenticate('john', 'hunter3', 'saml');
let authenticated = authenticate('john', 'hunter3', 'saml');
if(authenticated){
    console.log('Access granted')
}