function authenticateLocal(user, password){
    return (user === 'john' && password === 'hunter2')
}

async function authenticateSAML(user, password){
    setTimeout(() => { // simulate waiting for the server
        return (user === 'john' && password === 'hunter2')
    }, 1000);
}

function authenticate(user, password, method){
    switch(method){
        case('local'): return authenticateLocal(user, password)
        case('saml'): return authenticateSAML(user, password)
    }
}

module.exports = authenticate;