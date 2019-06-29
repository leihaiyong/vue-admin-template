
export async function login(name, pwd) {
    let user = {
        user: name,
        token: pwd,
        role: name==='admin' ? 'admin': 'user'
    }
    setCachedUser(user)
    return user
}

export function logout() {
    setCachedUser(null)
}

export function setCachedUser(user) {
    if (!user) {
        sessionStorage.removeItem("user")
        return
    }
    sessionStorage.setItem("user",
        JSON.stringify(user))
}

export function getCachedUser() {
    let u = sessionStorage.getItem("user")
    if (u) {
        return JSON.parse(u)
    }
    return null
}
