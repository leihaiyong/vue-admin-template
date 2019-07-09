
export function login(name, pwd) {
    let user = {
        user: name,
        token: pwd,
        role: name==='admin' ? 'admin': 'user'
    }
    return new Promise(resovle => {
        setTimeout(() => {
            resovle(user)
        }, 1000)
    })
}

export function logout() {
    return new Promise(resovle => {
        setTimeout(() => {
            resovle()
        }, 1000)
    })
}
