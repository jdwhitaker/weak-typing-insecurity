function authenticateLocal(user: string, password: string): boolean {
    return (user === 'john' && password === 'correct')
}

async function authenticateSAML
(user: string, password: string): boolean {
    setTimeout(() => { // simulate waiting for the server
        return (user === 'john' && password === 'correct')
    }, 1000);
}


async function authenticateSAMLCorrect(user: string, password: string): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
        setTimeout(() => { // simulate waiting for the server
            resolve((user === 'john' && password === 'correct'))
        }, 1000);
    })
}

export function authenticate(user, password, method){
    switch(method){
        case('local'): return authenticateLocal(user, password)
        case('saml'): return authenticateSAML(user, password)
    }
}