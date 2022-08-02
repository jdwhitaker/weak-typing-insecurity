function authenticateLocal(user: string, password: string): boolean {
    return (user === 'john' && password === 'hunter2')
}

async function authenticateSAML(user: string, password: string): boolean {
    setTimeout(() => { // simulate waiting for the server
        return (user === 'john' && password === 'hunter2')
    }, 1000);
}

export function authenticate(user, password, method){
    switch(method){
        case('local'): return authenticateLocal(user, password)
        case('saml'): return authenticateSAML(user, password)
    }
}